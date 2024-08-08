import express, { Request, Response } from 'express';
import Team from '../models/team';

const router = express.Router();

router.post('/teams', async (req: Request, res: Response) => {
  const { name, foundationYear, state } = req.body;
  try {
    const team = new Team({ name, foundationYear, state });
    await team.save();
    res.status(201).json(team);
  } catch (error) {
    const err = error as Error;
    res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req: Request, res: Response) => {
  try {
    const teams = await Team.find();
    const response = teams.map((team) => ({ id: team._id, name: team.name }));
    res.status(200).json(response);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
});

router.get('/teams/:id', async (req: Request, res: Response) => {
  try {
    const team = await Team.findById(req.params.id);
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(404).json({ error: err.message });
  }
});

router.patch('/teams/:id', async (req: Request, res: Response) => {
  const { name, foundationYear, state } = req.body;  const { id } = req.params;

  try {
    const team = await Team.findByIdAndUpdate(req.params.id, { name, foundationYear, state }, { new: true });
    if (team) {
      res.status(200).json(team);
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(404).json({ error: err.message });
  }
});

router.delete('/teams/:id', async (req: Request, res: Response) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (team) {
      res.status(200).json({ message: 'Team deleted successfully' });
    } else {
      res.status(404).json({ error: 'Team not found' });
    }
  } catch (error) {
    const err = error as Error;
    res.status(404).json({ error: err.message });
  }
});

export default router;

import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware';
import { logMiddleware } from '../middleware/logMiddleware';

const dashboardRouter = express.Router();

dashboardRouter.use(logMiddleware);

dashboardRouter.get("/", authMiddleware, (req, res) => {
  res.send("Dashboard route");
});

export default dashboardRouter;

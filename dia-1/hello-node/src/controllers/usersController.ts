import { Request, Response } from 'express';
import User from "../models/user";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch(err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if(!user) {
      throw new Error('Usuário não encontrado');
    }
    res.status(200).json(user);
  } catch(err: any) {
    res.status(404).json({ message: err.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;
  try {
    if(!email || !password) {
      throw new Error('Email e senha são obrigatórios');
    }
    // Unique
    const userExists = await User.findOne({ email });
    if(userExists) {
      throw new Error('Usuário já existe');
    }
    const user = new User({ email, password, role }); // A escrever o SQL
    await user.save(); // Ao commit da transaction
    res.status(201).json(user);
  } catch(err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { email, password, role } = req.body;

    if(!email || !password) {
      throw new Error('Email e senha são obrigatórios');
    }

    const userExists = await User.findOne({ email, _id: { $ne: id } });
    if(userExists) {
      throw new Error('E-mail duplicado');
    }

    const newUser = await User.updateOne({ _id: id }, { email, password, role });
    if(!newUser) {
      throw new Error('Usuário não encontrado');
    }
    
    res.status(200).json(newUser);
  } catch(err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    // Todas os usuários que tenham um específico role
    //const many = await User.deleteMany({ role: 'guest'});
    if(!user) {
      throw new Error('Usuário não encontrado');
    }
    res.status(200).json({ message: 'Já era magrão!' });
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};
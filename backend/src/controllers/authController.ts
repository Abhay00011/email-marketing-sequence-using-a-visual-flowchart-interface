import { Request, Response } from 'express';
import { loginUser, registerUser } from '../services/authService';

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    await registerUser(email, password);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    if (err instanceof Error) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(400).json({ error: 'An unknown error occurred' });
    }
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (err) {
    if (err instanceof Error) {
      res.status(401).json({ error: err.message });
    } else {
      res.status(401).json({ error: 'An unknown error occurred' });
    }
  }
};

import { Request, Response, NextFunction } from 'express';

const validateRequest = (req: Request, res: Response, next: NextFunction): void => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    res.status(400).json({ message: 'Missing required fields' });
    return;
  }

  next();
};

export default validateRequest;

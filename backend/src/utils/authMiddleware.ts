import { NextFunction, RequestHandler, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey';
interface AuthenticatedRequest extends Request {
    user?: string | JwtPayload;
  }
  
export const authMiddleware:RequestHandler =async (req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
  const authHeader = req.headers.authorization as string | undefined;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Access denied. No token provided.' });
    return;
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // now valid thanks to global type override
    next();
  } catch (error) {
    res.status(403).json({ error: 'Invalid or expired token.' });
  }
};

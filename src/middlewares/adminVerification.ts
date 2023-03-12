import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../configs/config';
import { User } from '../models';

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization as string;
    const getToken = authHeader.split(' ')[1];
    const verifyToken = jwt.verify(getToken, config.secret) as User;

    if (verifyToken.scope === 'admin') {
      return next();
    } else {
      return res.status(401).json({ 'message': 'Admin exclusive route' });
    }
  } catch {
    return res.status(401).json({ 'message': 'Token error - Unable to verify user' });
  }
};
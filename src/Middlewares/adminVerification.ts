import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config'

export default (req: Request, res: Response, next: NextFunction) => {
  try {
    const authHeader: any = req.headers.authorization;
    const getToken = authHeader.split(' ')[1];
    const verifyToken: any = jwt.verify(getToken, process.env.SECRET as string);
  
    if (verifyToken.scope === 'admin') {
      return next();
    } else {
      return res.status(400).json('Admin exclusive route');
    }
  } catch {
    return res.status(500).json('Token error - Unable to verify user');
  }
};

//revisar os valores dos status
import { Request } from 'express';
import jwt from 'jsonwebtoken';

function getUserIdFromToken(req: Request): number | undefined {
  const authHeader = req.headers.authorization as string;
  const token = authHeader?.split(' ')[1];

  if (!token) {
    return undefined;
  }

  try {
    const { id_user } = jwt.verify(token, process.env.SECRET as string) as { id_user: number };
    return id_user;
  } catch (err) {
    return undefined;
  }
}

export default getUserIdFromToken;

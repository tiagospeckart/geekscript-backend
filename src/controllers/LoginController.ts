import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import config from '../configs/config';
import MESSAGE from '../constants/messages';

interface LoginRequestBody {
  email: string;
  password: string;
}
export default class LoginController {
  static login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    try {
      const { email, password } = req.body as LoginRequestBody;

      const user = await User.findOne({ where: { email } });

      if (!user) {
        return res
          .status(401)
          .json({ "message": MESSAGE.ERROR.INVALID_DATA });
      };

      const isPasswordValid: boolean = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(401).json({ message: MESSAGE.ERROR.INVALID_DATA });
      };
    
      const token: string = jwt.sign(
        {
          id_user: user.id_user,
          name: user.name,
          email: user.email,
          scope: user.scope,
        },
        config.secret,
        { expiresIn: '1 day' }
      );

      return res.status(200).json({ id: user.id_user, token: token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ "message": MESSAGE.ERROR.TOKEN });
    }
  };
}

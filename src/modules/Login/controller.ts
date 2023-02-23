import { Request, Response } from 'express';
import User from '../../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import key from '../../configs/jwtKey';

export default class controller {
  static login = async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const dataUser = await User.findOne({ where: { email } });

    if (!dataUser) {
      return res
        .status(401)
        .json('Invalid e-mail or password, please try again');
    }

    if (!bcrypt.compareSync(password, dataUser.password)) {
      return res
        .status(401)
        .json('Invalid e-mail or password, please try again');
    }


  };
}

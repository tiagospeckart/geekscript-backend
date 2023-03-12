import { NextFunction, Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import key from '../configs/jwtKey';
import MESSAGE from '../constants/messages';

export default class LoginController {
  static login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const { email, password } = req.body;

    const dataUser = await User.findOne({ where: { email } });

    if (!dataUser) {
      return res
        .status(401)
        .json({ "message": MESSAGE.ERROR.INVALID_DATA });
    }

    if (!bcrypt.compareSync(password, dataUser.password)) {
      return res
        .status(401)
        .json({ "message": MESSAGE.ERROR.INVALID_DATA });
    }

    try {
      const token = jwt.sign(
        {
          id_user: dataUser.id_user,
          name: dataUser.name,
          email: dataUser.email,
          scope: dataUser.scope,
        },
        key.privateKey,
        { expiresIn: '1 day' }
      );

      return res.status(200).json({ id: dataUser.id_user, token: token });
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.TOKEN });
    }
  };
}

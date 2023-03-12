import { Request, Response } from 'express';
import { Purchase, User } from '../models';
import bcrypt from 'bcryptjs';
import MESSAGE from '../constants/messages';

export default class UserController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password, scope } = req.body;
      const criptoPassword: string = bcrypt.hashSync(password, 10);

      const checkEmail = await User.count({ where: { email } });
      if (checkEmail) {
        return res.status(409).json({ "message": MESSAGE.ERROR.EXIST.EMAIL });
      }

      const newUser = await User.create({
        name,
        email,
        password: criptoPassword,
        scope,
      });
      return res.status(201).json(newUser);
    } catch {
      return res.status(400).json({ "message": MESSAGE.ERROR.REGISTER.USER });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findUsers = await User.findAll({
        attributes: { exclude: ['password'] },
      });
      return res.status(200).json(findUsers);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findAllUserPurchase = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      const findUsers = await User.findByPk(id, {
        include: Purchase,
        attributes: { exclude: ['password', 'scope', 'email'] },
      });
      return res.status(200).json(findUsers);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findUser = await User.findByPk(id);

      if (!findUser) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }

      findUser = await User.findByPk(id, {
        include: Purchase,
        attributes: { exclude: ['password'] },
      });
      return res.status(200).json(findUser);
    } catch {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { name, email, password, scope } = req.body;
      const checkUser = await User.findByPk(id);
      if (!checkUser) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }

      const criptoPassword = password ? bcrypt.hashSync(password, 10): checkUser.password;

      await User.update(
        {
          name,
          email,
          password: criptoPassword,
          scope,
        },
        {
          where: {
            id_user: id,
          },
        }
      );

      const showUser = await User.findByPk(id);
      return res.status(200).json(showUser);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.UPDATE_REGISTER });
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleteUser = await User.findByPk(id);
      if (!deleteUser) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }
      await User.destroy({
        where: {
          id_user: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.DELETE });
    }
  };
}

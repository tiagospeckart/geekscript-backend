import { Request, Response } from 'express';
import { Purchase, User } from '../../models/';
import bcrypt from 'bcryptjs';

export default class controller {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password } = req.body;
      const criptoPassword: string = bcrypt.hashSync(password, 10);

      const newUser = await User.create({
        name,
        email,
        password: criptoPassword
      });
      return res.status(201).json(newUser);
    } catch {
      return res.status(400).json('Não foi possível realizar o cadastro');
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findUsers = await User.findAll({
        include: Purchase,
      });
      return res.status(200).json(findUsers);
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findUser = await User.findByPk(id);

      if (!findUser) {
        return res.status(404).json('Id não encontrado');
      }

      findUser = await User.findByPk(id, {
        attributes: {
          exclude: ['password'],
        },
      });
      return res.status(200).json(findUser);
    } catch {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id: string = req.params.id;
      const { name, email, password, isAdm } = req.body;
      const criptoPassword: string = bcrypt.hashSync(password, 10);

      const checkUser = await User.findByPk(id);
      if (!checkUser) {
        return res.status(404).json('Id não encontrado');
      }

      await User.update(
        {
          name,
          email,
          password: criptoPassword,
          isAdm,
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
      return res.status(500).json('Não foi possível atualizar o cadastro');
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleteUser = await User.findByPk(id);
      if (!deleteUser) {
        return res.status(404).json('Id não encontrado');
      }
      await User.destroy({
        where: {
          id_user: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };
}

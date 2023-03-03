import { Request, Response } from 'express';
import { Purchase, User } from '../models';
import bcrypt from 'bcryptjs';

export default class userController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, email, password, scope } = req.body;
      const criptoPassword: string = bcrypt.hashSync(password, 10);

      const checkEmail = await User.count({ where: { email } });
      if (checkEmail) {
        return res.status(409).json('Email já cadastrado');
      }

      const newUser = await User.create({
        name,
        email,
        password: criptoPassword,
        scope,
      });
      return res.status(201).json(newUser);
    } catch {
      return res.status(400).json('Não foi possível realizar o cadastro');
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findUsers = await User.findAll({
        attributes: {exclude:["password"]}
      });
      return res.status(200).json(findUsers);
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static findAllUserPurchase = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    try {
      const findUsers = await User.findByPk(id, {
        include: Purchase,
        attributes: {exclude:["password", "scope", "email"]}
      })
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
<<<<<<< HEAD:src/controllers/UserController.ts
=======
      const { name, email, password, scope } = req.body;
      const criptoPassword: string = bcrypt.hashSync(password, 10);

      const checkEmail = await User.count({ where: { email } });
      if (checkEmail) {
        return res.status(409).json('Email já cadastrado');
      }

>>>>>>> 5abc0a2506eb7a84324f1fd43efdaf5f7ad87cbc:src/modules/User/UserController.ts
      const checkUser = await User.findByPk(id);
      if (!checkUser) {
        return res.status(404).json('Id não encontrado');
      }

      const { name, email, password, scope } = req.body;
      const criptoPassword: string = bcrypt.hashSync(password, 10);

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

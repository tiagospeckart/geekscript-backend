import { Request, Response } from "express";
import { User } from "../../models/";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { name, email, password, isAdm } = req.body;
      const newUser = await User.create({
        name,
        email,
        password,
        isAdm,
      });
      return res.status(201).json(newUser);
    } catch {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const findUsers = await User.findAll();
      return res.status(200).json(findUsers);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let findUser = await User.findByPk(id);

      if (!findUser) {
        return res.status(404).json("Id não encontrado");
      }

      findUser = await User.findByPk(id, {
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(findUser);
    } catch {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const { name, email, password, isAdm } = req.body;

      const checkUser = await User.findByPk(id);
      if (!checkUser) {
        return res.status(404).json("Id não encontrado");
      }

      await User.update(
        {
          name,
          email,
          password,
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
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      let deleteUser = await User.findByPk(id);
      if (!deleteUser) {
        return res.status(404).json("Id não encontrado");
      }
      await User.destroy({
        where: {
          id_user: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
};

export default controller;

import { Request, Response } from "express";
import { Category } from "../../models/";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { name } = req.body;

      const checkCategory = await Category.count({ where: { name } });
      if (checkCategory) {
        return res.status(409).json("categoria já existente");
      }

      const newCategory = await Category.create({
        name,
      });
      return res.status(201).json(newCategory);
    } catch {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const findCategories = await Category.findAll();
      return res.status(200).json(findCategories);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let findCategory = await Category.findByPk(id);

      if (!findCategory) {
        return res.status(404).json("Id não encontrado");
      }

      findCategory = await Category.findByPk(id, {
        attributes: {
          exclude: ["password"],
        },
      });
      return res.status(200).json(findCategory);
    } catch {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const { name } = req.body;

      const checkCategory = await Category.findByPk(id);
      if (!checkCategory) {
        return res.status(404).json("Id não encontrado");
      }

      await Category.update(
        {
          name,
        },
        {
          where: {
            id_category: id,
          },
        }
      );

      const showCategory = await Category.findByPk(id);
      return res.status(200).json(showCategory);
    } catch (error) {
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      let deleteCategory = await Category.findByPk(id);
      if (!deleteCategory) {
        return res.status(404).json("Id não encontrado");
      }
      await Category.destroy({
        where: {
          id_category: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
};

export default controller;

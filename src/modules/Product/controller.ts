import { Request, Response } from "express";
import { Category, Product } from "../../models/";

const controller = {
  async create(req: Request, res: Response) {
    try {
      const { name, photo, category_id, price, description } = req.body;
      const newProduct: Product = await Product.create({
        name,
        photo,
        category_id,
        price,
        description,
      });
      return res.status(201).json(newProduct);
    } catch {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  },

  async findAll(req: Request, res: Response) {
    try {
      const findProducts = await Product.findAll({
        include: Category
    });
      return res.status(200).json(findProducts);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async findOne(req: Request, res: Response) {
    try {
      const { id } = req.params;
      let findProduct = await Product.findByPk(id);

      if (!findProduct) {
        return res.status(404).json("Id não encontrado");
      }

      findProduct = await Product.findByPk(id);
      return res.status(200).json(findProduct);
    } catch {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = req.params.id;

      const { name, photo, category_id, price, description } = req.body;

      const checkProduct = await Product.findByPk(id);
      if (!checkProduct) {
        return res.status(404).json("Id não encontrado");
      }

      await Product.update(
        {
          name,
          photo,
          category_id,
          price,
          description,
        },
        {
          where: {
            id_product: id,
          },
        }
      );

      const showProduct = await Product.findByPk(id);
      return res.status(200).json(showProduct);
    } catch (error) {
      return res.status(500).json("Não foi possível atualizar o cadastro");
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;

      let deleteProduct = await Product.findByPk(id);
      if (!deleteProduct) {
        return res.status(404).json("Id não encontrado");
      }
      await Product.destroy({
        where: {
          id_product: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  },
};

export default controller;

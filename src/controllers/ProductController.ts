import { Request, Response } from "express";
import { Category, Product } from "../models";

export default class productController  {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, photo, price, description, category_id } = req.body;
      const newProduct: Product = await Product.create({
        name,
        photo,
        price,
        description,
        category_id,
      });
      return res.status(201).json(newProduct);
    } catch {
      return res.status(400).json("Não foi possível realizar o cadastro");
    }
  }

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findProducts = await Product.findAll({ 
        include: Category,
      });
      return res.status(200).json(findProducts);
    } catch (error) {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  }

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findProduct = await Product.findByPk(id);

      if (!findProduct) {
        return res.status(404).json("Id não encontrado");
      }

      findProduct = await Product.findByPk(id, { include: Category });
      return res.status(200).json(findProduct);
    } catch {
      return res.status(500).json("Não foi possível realizar a ação");
    }
  }

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { name, photo, price, description, category_id } = req.body;

      const checkProduct = await Product.findByPk(id);
      if (!checkProduct) {
        return res.status(404).json("Id não encontrado");
      }

      await Product.update(
        {
        name,
        photo,
        price,
        description,
        category_id,
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
  }

  static delete = async (req: Request, res: Response): Promise<Response> => {
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
  }
};
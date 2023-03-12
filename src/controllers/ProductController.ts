import { Request, Response } from 'express';
import { Category, Product } from '../models';
import MESSAGE from '../constants/messages';

export default class ProductController {
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
      return res.status(400).json({ "message": MESSAGE.ERROR.REGISTER.PRODUCT });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      
      //filter by category
      const categoryUrl = req.query.category;

      if (categoryUrl) {
        const findProducts = await Product.findAll({
          include: {
            model: Category,
            where: {
              name: categoryUrl,
            },
          },
        });
        return res.status(200).json(findProducts);
      }

      const findProducts = await Product.findAll({
        include: {
          model: Category,
        },
      });
      return res.status(200).json(findProducts);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findProduct = await Product.findByPk(id);

      if (!findProduct) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }

      findProduct = await Product.findByPk(id, {
        include: { model: Category },
      });
      return res.status(200).json(findProduct);
    } catch {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { name, photo, price, description, category_id } = req.body;

      const checkProduct = await Product.findByPk(id);
      if (!checkProduct) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
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
      return res.status(500).json({ "message": MESSAGE.ERROR.UPDATE_REGISTER });
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleteProduct = await Product.findByPk(id);
      if (!deleteProduct) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }
      await Product.destroy({
        where: {
          id_product: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(401).json({ "message": MESSAGE.ERROR.DELETE });
    }
  };
}

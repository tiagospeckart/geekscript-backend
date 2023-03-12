import { Request, Response } from 'express';
import { Category } from '../models';
import MESSAGE from '../constants/messages';

export default class CategoryController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name } = req.body;
      const categoryCount: number = await Category.count({ where: { name } });
      if (categoryCount) {
        return res.status(409).json({ "message": MESSAGE.ERROR.EXIST.CATEGORY });
      }
      const newCategory: Category = await Category.create({
        name,
      });
      return res.status(201).json(newCategory);
    } catch {
      return res.status(400).json({ "message": MESSAGE.ERROR.REGISTER.CATEGORY });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findCategories: Category[] = await Category.findAll();
      return res.status(200).json(findCategories);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findCategory = await Category.findByPk(id);

      if (!findCategory) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }

      findCategory = await Category.findByPk(id, {
        attributes: {
          exclude: ['password'],
        },
      });
      return res.status(200).json(findCategory);
    } catch {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      const { name } = req.body;

      const checkCategory = await Category.findByPk(id);
      if (!checkCategory) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
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
      return res.status(500).json({ "message": MESSAGE.ERROR.UPDATE_REGISTER });
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleteCategory = await Category.findByPk(id);
      if (!deleteCategory) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }
      await Category.destroy({
        where: {
          id_category: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.DELETE });
    }
  };
}

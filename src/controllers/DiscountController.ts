import { Request, Response } from 'express';
import { Discount } from '../models';
import MESSAGE from '../constants/messages';

export default class DiscountController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { name, value } = req.body;
      const newDiscount: Discount = await Discount.create({
        name,
        value,
      });
      return res.status(201).json(newDiscount);
    } catch {
      return res.status(400).json({ "message": MESSAGE.ERROR.REGISTER.DISCOUNT });
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findDiscounts = await Discount.findAll();
      return res.status(200).json(findDiscounts);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findDiscount = await Discount.findByPk(id);

      if (!findDiscount) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }

      findDiscount = await Discount.findByPk(id);
      return res.status(200).json(findDiscount);
    } catch {
      return res.status(500).json({ "message": MESSAGE.ERROR.SEARCH_DB });
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { name, value } = req.body;

      const checkDiscount = await Discount.findByPk(id);
      if (!checkDiscount) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }

      await Discount.update(
        {
          name,
          value,
        },
        {
          where: {
            id_discount: id,
          },
        }
      );

      const showDiscount = await Discount.findByPk(id);
      return res.status(200).json(showDiscount);
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.UPDATE_REGISTER });
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleteDiscount = await Discount.findByPk(id);
      if (!deleteDiscount) {
        return res.status(404).json({ "message": MESSAGE.ERROR.ID_NOT_FOUND });
      }
      await Discount.destroy({
        where: {
          id_discount: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ "message": MESSAGE.ERROR.DELETE });
    }
  };
}
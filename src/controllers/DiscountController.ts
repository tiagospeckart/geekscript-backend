import { Request, Response } from 'express';
import { Discount } from '../models';

export default class discountController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { coupon_name, discount_value } = req.body;
      const newDiscount: Discount = await Discount.create({
        coupon_name,
        discount_value,
      });
      return res.status(201).json(newDiscount);
    } catch {
      return res.status(400).json('Não foi possível realizar o cadastro');
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findDiscounts = await Discount.findAll();
      return res.status(200).json(findDiscounts);
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findDiscount = await Discount.findByPk(id);

      if (!findDiscount) {
        return res.status(404).json('Id não encontrado');
      }

      findDiscount = await Discount.findByPk(id);
      return res.status(200).json(findDiscount);
    } catch {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { coupon_name, discount_value } = req.body;

      const checkDiscount = await Discount.findByPk(id);
      if (!checkDiscount) {
        return res.status(404).json('Id não encontrado');
      }

      await Discount.update(
        {
          coupon_name,
          discount_value,
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
      return res.status(500).json('Não foi possível atualizar o cadastro');
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deleteDiscount = await Discount.findByPk(id);
      if (!deleteDiscount) {
        return res.status(404).json('Id não encontrado');
      }
      await Discount.destroy({
        where: {
          id_discount: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };
}

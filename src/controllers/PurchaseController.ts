import { Request, Response } from 'express';
import { Purchase, User } from '../models';

export default class purchaseController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { total, user_id } = req.body;
      const newOrder = await Purchase.create({
        total,
        user_id,
      });
      return res.status(201).json(newOrder);
    } catch {
      return res.status(400).json('Não foi possível realizar o cadastro');
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findPurchase = await Purchase.findAll({
        include: User,
      });

      return res.status(200).json(findPurchase);
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findPurchase = await Purchase.findByPk(id);

      if (!findPurchase) {
        return res.status(404).json('Id não encontrado');
      }

      findPurchase = await Purchase.findByPk(id, {
        include: User,
      });
      return res.status(200).json(findPurchase);
    } catch {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { total, user_id } = req.body;

      const checkPurchase = await Purchase.findByPk(id);
      if (!checkPurchase) {
        return res.status(404).json('Id não encontrado');
      }

      await Purchase.update(
        {
          total,
          user_id,
        },
        {
          where: {
            id_purchase: id,
          },
        }
      );

      const showPurchase = await Purchase.findByPk(id);
      return res.status(200).json(showPurchase);
    } catch (error) {
      return res.status(500).json('Não foi possível atualizar o cadastro');
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deletePurchase = await Purchase.findByPk(id);
      if (!deletePurchase) {
        return res.status(404).json('Id não encontrado');
      }
      await Purchase.destroy({
        where: {
          id_purchase: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json('Não foi possível realizar a ação');
    }
  };
}

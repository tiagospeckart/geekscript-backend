import { Request, Response } from 'express';
import { Purchase, User } from '../models';
import MESSAGE from '../constants/messages';

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
      return res.status(400).json(MESSAGE.ERROR.REGISTER.PURCHASE);
    }
  };

  static findAll = async (req: Request, res: Response): Promise<Response> => {
    try {
      const findPurchase = await Purchase.findAll({
        include: {
          model: User, 
          attributes: { 
            exclude: ['password','email', 'scope', 'createdAt', 'updatedAt']
          }},
      });

      return res.status(200).json(findPurchase);
    } catch (error) {
      return res.status(500).json(MESSAGE.ERROR.SEARCH_DB);
    }
  };

  static findOne = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;
      let findPurchase = await Purchase.findByPk(id);

      if (!findPurchase) {
        return res.status(404).json(MESSAGE.ERROR.ID_NOT_FOUND);
      }

      findPurchase = await Purchase.findByPk(id, {
        include: User,
        attributes: {
          exclude: ['password','email', 'scope', 'createdAt', 'updatedAt']
        }
      });
      return res.status(200).json(findPurchase);
    } catch {
      return res.status(500).json(MESSAGE.ERROR.SEARCH_DB);
    }
  };

  static update = async (req: Request, res: Response): Promise<Response> => {
    try {
      const id = req.params.id;

      const { total, user_id } = req.body;

      const checkPurchase = await Purchase.findByPk(id);
      if (!checkPurchase) {
        return res.status(404).json(MESSAGE.ERROR.ID_NOT_FOUND);
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
      return res.status(500).json(MESSAGE.ERROR.UPDATE_REGISTER);
    }
  };

  static delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { id } = req.params;

      let deletePurchase = await Purchase.findByPk(id);
      if (!deletePurchase) {
        return res.status(404).json(MESSAGE.ERROR.ID_NOT_FOUND);
      }
      await Purchase.destroy({
        where: {
          id_purchase: id,
        },
      });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json(MESSAGE.ERROR.DELETE);
    }
  };
}

import { Request, Response } from "express";
import { Purchase, PurchaseProduct } from '../models';
import jwt from 'jsonwebtoken';

export default class checkoutController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { purchaseIdList, total } = req.body;
      const authHeader: any = req.headers.authorization;
      const getToken = authHeader.split(' ')[1];
      const verifyToken: any = jwt.verify(getToken, process.env.SECRET as string);
      const user_id = verifyToken.id_user;

      const newPurchase: Purchase = await Purchase.create({
        user_id,
        total
      }).catch((error) => {
        console.error(error);
        throw new Error('Failed to create new purchase');
      });

      const checkoutArray = purchaseIdList.map((currElement:number) => PurchaseProduct.create({
        purchase_id: newPurchase.id_purchase,
        product_id: currElement,
      }))

      return res.status(201).json(checkoutArray);
    } catch {
      return res.status(400).json('Não foi possível realizar a compra');
    }
  }
}
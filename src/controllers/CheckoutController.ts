import { Request, Response } from "express";
import { Discount, Purchase, PurchaseProduct } from '../models';
import jwt from 'jsonwebtoken';
import MESSAGE from "../constants/messages";
import checkoutArray from '../helpers/createPurchaseProduct';

export default class checkoutController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { purchaseIdList, total, discountName } = req.body;
      const authHeader: any = req.headers.authorization;
      const getToken = authHeader.split(' ')[1];
      const verifyToken: any = jwt.verify(getToken, process.env.SECRET as string);
      const user_id = verifyToken.id_user;

      const checkDiscountName = await Discount.findOne({ where: { name: discountName } });
      
      if (checkDiscountName) {
        const catchDiscountId = checkDiscountName.id_discount
         const newPurchase = await Purchase.create({
          user_id,
          total,
          discount_id: catchDiscountId
        }).catch((error) => {
          console.error(error);
          throw new Error(MESSAGE.ERROR.CHECKOUT_REG);
        });
        checkoutArray(purchaseIdList, newPurchase)
      }

      const newPurchase: Purchase = await Purchase.create({
        user_id,
        total,
      }).catch((error) => {
        console.error(error);
        throw new Error(MESSAGE.ERROR.CHECKOUT_REG);
      });

      checkoutArray(purchaseIdList, newPurchase)
      /* const checkoutArray = purchaseIdList.map((currElement:number) => PurchaseProduct.create({
        purchase_id: newPurchase.id_purchase,
        product_id: currElement,
      })) */

      return res.status(201).json(checkoutArray);
    } catch {
      return res.status(400).json(MESSAGE.ERROR.CHECKOUT);
    }
  }
}
import { Request, Response } from "express";
import { Discount, Purchase, PurchaseProduct } from '../models';
import jwt from 'jsonwebtoken';
import MESSAGE from "../constants/messages";

export default class checkoutController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { purchaseIdList, discountName } = req.body;
      let { purchaseTotal } = req.body;
      const authHeader: any = req.headers.authorization;
      const getToken = authHeader.split(' ')[1];
      const verifyToken: any = jwt.verify(getToken, process.env.SECRET as string);
      const user_id = verifyToken.id_user;

      const discount =  await Discount.findOne({where: { name: discountName }})
      .catch((error) => {
        console.error(error);
        throw new Error('Failed to create new purchase');
      });

      if(discount){
        let discountValue = discount.value;
        purchaseTotal -= discountValue;
      };

      const newPurchase: Purchase = await Purchase.create({
        user_id,
        total: purchaseTotal,
        discount_id: discount?.id_discount
      }).catch((error) => {
        console.error(error);
        throw new Error(MESSAGE.ERROR.CHECKOUT_REG);
      });

      purchaseIdList.map((currElement:number) => PurchaseProduct.create({
        purchase_id: newPurchase.id_purchase,
        product_id: currElement,
      }));

      const finishedPurchase = await PurchaseProduct.findAll(
        { attributes: ['id_purchase_product','product_id', 'purchase_id', 'createdAt'],
          where: { 
            purchase_id: newPurchase.id_purchase - 1 // correção do valor
        }});

      return res.status(201).json(finishedPurchase);
    } catch {
      return res.status(400).json(MESSAGE.ERROR.CHECKOUT);
    }
  }
}
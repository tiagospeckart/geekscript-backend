import { Request, Response } from "express";
import { Discount, Product, Purchase, PurchaseProduct } from '../models';
import jwt from 'jsonwebtoken';
import { Model, where } from "sequelize";

export default class checkoutController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const { purchaseIdList, discountName } = req.body;
      let { purchaseTotal } = req.body;
      const authHeader: any = req.headers.authorization;
      const getToken = authHeader.split(' ')[1];
      const verifyToken: any = jwt.verify(getToken, process.env.SECRET as string);
      const user_id = verifyToken.id_user;
      
      console.log(purchaseIdList)
      console.log(discountName)
      console.log(purchaseTotal)

      const discount =  await Discount.findOne({where: { name: discountName }})
      .catch((error) => {
        console.error(error);
        throw new Error('Failed to create new purchase');
      });
      console.log(discount)

      if(discount){
        let discountValue = discount.value;
        purchaseTotal -= discountValue;
      }

      const newPurchase: Purchase = await Purchase.create({
        user_id,
        total: purchaseTotal,
        discount_id: discount?.id_discount
      }).catch((error) => {
        console.error(error);
        throw new Error('Failed to create new purchase');
      });

      purchaseIdList.map((currElement:number) => PurchaseProduct.create({
        purchase_id: newPurchase.id_purchase,
        product_id: currElement,
      }))

      console.log(newPurchase.id_purchase)

      const finishedPurchase = await PurchaseProduct.findAll(
        { 
          attributes: ['id_purchase_product','product_id', 'purchase_id', 'createdAt'],
          where: { 
          purchase_id: newPurchase.id_purchase - 1 // correção do valor
        }
      });

      return res.status(201).json(finishedPurchase);
    } catch {
      return res.status(400).json('Não foi possível realizar a compra');
    }
  }
}
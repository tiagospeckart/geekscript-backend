import { Request, Response } from "express";
import { Discount, Purchase, PurchaseProduct } from '../models';
import jwt from 'jsonwebtoken';
import MESSAGE from "../constants/messages";
import checkoutArray from '../helpers/createPurchaseProduct'

export default class checkoutController {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {

      // =================  VARIÁVEIS  ================= //

      const { purchaseIdList, discountName } = req.body;
      let { purchaseTotal } = req.body;
      const authHeader: any = req.headers.authorization;
      const getToken = authHeader.split(' ')[1];
      const verifyToken: any = jwt.verify(getToken, process.env.SECRET as string);
      const user_id = verifyToken.id_user;

      if(discountName){
        // =========  SE EXISTIR DESCONTO  ======== //
        console.log(discountName)
        const discount =  await Discount.findOne({where: { name: discountName }})
        .catch((error) => {
          console.error(error);
          throw new Error('Discount name not in DB');
        });

        console.log(discount)
        // ===  SE COM DESCONTO DESCONTO, PEGAR VALOR  === //
        
        // Discount não poderia ser nulo aqui
        // Arrumar um jeito de passar Discount se exisir

        if(discount){
          let discountValue = discount.value;
          purchaseTotal -= discountValue;
        };

        console.log(discount?.id_discount)

        // ===========  CRIAR NOVA COMPRA  =========== //

        const newPurchase: Purchase = await Purchase.create({
          user_id,
          total: purchaseTotal,
          discount_id: discount?.id_discount
        }).catch((error) => {
          throw new Error(MESSAGE.ERROR.CHECKOUT_REG);
        });

        // ====== POPULAR COMPRA COM PRODUTOS  ========== //

        checkoutArray(purchaseIdList, newPurchase);
        const finishedPurchase = await PurchaseProduct.findAll({ 
          attributes: ['id_purchase_product','product_id', 'purchase_id', 'createdAt'],
          where: { 
            purchase_id: newPurchase.id_purchase - 1 // correção do valor
          },
          include: {
            model: Purchase,
            attributes: ['user_id','discount_id', 'total']
          },
        });
        return res.status(201).json(finishedPurchase);
        } else {

        // ============  SE SEM DESCONTO ============  //

        // ===========  CRIAR NOVA COMPRA  =========== //
        const newPurchase: Purchase = await Purchase.create({
          user_id,
          total: purchaseTotal,
        }).catch((error) => {
          throw new Error(MESSAGE.ERROR.CHECKOUT_REG);
        });

        // ====== POPULAR COMPRA COM PRODUTOS  ========== //

        checkoutArray(purchaseIdList, newPurchase);

        // =======  RETORNAR JSON RESPOSTA  ============ //

        const finishedPurchase = await PurchaseProduct.findAll({ 
          attributes: ['id_purchase_product','product_id', 'purchase_id', 'createdAt'],
          where: { 
            purchase_id: newPurchase.id_purchase - 1 // correção do valor
          },
          include: {
            model: Purchase,
            attributes: ['user_id','discount_id', 'total']
          },
        });
        return res.status(201).json(finishedPurchase);
        }
    } catch {
      return res.status(400).json(MESSAGE.ERROR.CHECKOUT);
    }
  }
}
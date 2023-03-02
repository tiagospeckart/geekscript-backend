import { Request, Response } from "express";
import { Purchase, User, PurchaseProduct, Product } from '../models';
import jwt from 'jsonwebtoken';

const checkoutController = {
  static create = async (req: Request, res: Response): Promise<Response> => {
    try {

      // --- CONSTANTES --- //

      const { purchaseList, total } = req.body;

      // código decodificador pode virar uma função Helper na refatoração
      const authHeader:any = req.headers.authorization;
      const getToken = authHeader.split(' ').[1];
      const decode = jwt.decode(getToken);
      
      // BUGADO
      // para pegar o "id_user do objeto"
      const user_id = decode.userId

      // ---- FUNÇÕES --- //

      // criar a inserção da compra com o usuário

      const newPurchase = await Purchase.create({
        user_id: user_id,
        total: total,
      })

      const newPurchases = purchaseList.forEach(purchase => {
        PurchaseProduct.create({
          purchase_id: newPurchase.id_purchase,
          product_id: purchaseList.product_id,
        })
      });
      
      return res.status(201).json(newPurchases);
    } catch {
      return res.status(400).json('Não foi possível realizar a compra');
    }
  }
}

export default checkoutController;
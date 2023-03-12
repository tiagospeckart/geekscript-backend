import { Request, Response } from "express";
import { Discount, Purchase, PurchaseProduct } from '../models';
import jwt from 'jsonwebtoken';
import MESSAGE from "../constants/messages";

async function getDiscountId(discountName: string): Promise<number | undefined> {
  if (!discountName) {
    return undefined;
  }
  const discount = await Discount.findOne({ where: { name: discountName } });
  if (!discount) {
    return undefined;
  }
  return discount.id_discount;
}

async function getNewPurchaseTotal(purchaseTotal: number, discountId?: number): Promise<number> {
  if (!discountId) {
    return purchaseTotal;
  }
  const discount = await Discount.findByPk(discountId) as Discount;
  const newPurchaseTotal = purchaseTotal - discount.value;
  return newPurchaseTotal;
}

async function createNewPurchase(userId: number, purchaseTotal: Promise<number>, discountId?: number): Promise<Purchase> {
  const resolvedPurchaseTotal = await purchaseTotal;
  return Purchase.create({ user_id: userId, total: resolvedPurchaseTotal, discount_id: discountId });
}

async function addPurchaseProducts(purchaseId: number, purchaseIdList: number[]): Promise<PurchaseProduct[]> {
  const createPurchaseProduct = async (productId: number) => {
    return PurchaseProduct.create({
      purchase_id: purchaseId,
      product_id: productId,
    });
  };
  const promises = purchaseIdList.map(createPurchaseProduct);

  return Promise.all(promises);
}

export default class CheckoutController {
  static async create(req: Request, res: Response): Promise<Response> {
    try {
      const { purchaseIdList, discountName, purchaseTotal } = req.body;
      const authHeader = req.headers.authorization as string;
      const token = authHeader.split(' ')[1];
      const { id_user } = jwt.verify(token, process.env.SECRET as string) as { id_user: number };

      const discountId = await getDiscountId(discountName);
      const newPurchaseTotal = getNewPurchaseTotal(purchaseTotal, discountId)

      const newPurchase = await createNewPurchase(id_user, newPurchaseTotal, discountId);
      await addPurchaseProducts(newPurchase.id_purchase, purchaseIdList);
      const populatedPurchase = await PurchaseProduct.findAll({
        attributes: ['id_purchase_product', 'product_id', 'purchase_id', 'createdAt'],
        where: { purchase_id: newPurchase.id_purchase },
        include: {
          model: Purchase,
          attributes: ['user_id', 'discount_id', 'total'],
        },
      });

      return res.status(201).json(populatedPurchase);
    } catch (error) {
      console.error(error);
      return res.status(400).json({ "message": MESSAGE.ERROR.CHECKOUT });
    }
  }
}
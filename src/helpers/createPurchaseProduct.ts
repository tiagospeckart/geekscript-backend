import { Purchase } from '../models';
import PurchaseProduct from '../models/PurchaseProduct';

export default function checkoutArray(a: any, newPurchase: Purchase) {
  const checkoutArray = a.map((currElement: number) =>
    PurchaseProduct.create({
      purchase_id: newPurchase.id_purchase,
      product_id: currElement,
    })
  );
}

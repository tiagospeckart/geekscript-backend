import { Router } from 'express';
import checkoutController from '../controllers/CheckoutController';
import checkoutValidation from "../Validations/Checkout/create";

const router = Router();

router.post("/", checkoutValidation, checkoutController.create);

export default router;
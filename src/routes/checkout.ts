import { Router } from 'express';
import CheckoutController from '../controllers/CheckoutController';

const router = Router();

router.post("/", CheckoutController.create);

export default router;
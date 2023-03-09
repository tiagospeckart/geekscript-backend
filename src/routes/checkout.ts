import { Router } from 'express';
import checkoutController from '../controllers/CheckoutController';
import userAuthentication from "../Middlewares/authentication";

const router = Router();

router.post("/", checkoutController.create);

export default router;
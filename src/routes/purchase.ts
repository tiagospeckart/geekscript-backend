import { Router } from 'express';
import PurchaseController from '../controllers/PurchaseController';
import updateValidation from "../validations/User/update";
import adminVerification from '../middlewares/adminVerification';

const router = Router();

router.get('/admin', adminVerification, PurchaseController.findAll);
router.put('/admin/:id', adminVerification, updateValidation, PurchaseController.update);
router.delete('/admin/:id', adminVerification, PurchaseController.delete);

export default router;

import { Router } from "express";
import discountController from "../controllers/DiscountController";
import createValidation from "../Validations/Discount/create";
import updateValidation from "../Validations/Discount/update";

const router = Router();

router.post("/admin/", createValidation, discountController.create);
router.get("/admin/", discountController.findAll);
router.get("/admin/:id", discountController.findOne);
router.put("/admin/:id", updateValidation, discountController.update);
router.delete("/admin/:id", discountController.delete);

export default router;
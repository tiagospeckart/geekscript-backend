import { Router } from "express";
import DiscountController from "../controllers/DiscountController";
import createValidation from "../validations/Discount/create";
import updateValidation from "../validations/Discount/update";

const router = Router();

router.post("/admin/", createValidation, DiscountController.create);
router.get("/admin/", DiscountController.findAll);
router.get("/admin/:id", DiscountController.findOne);
router.put("/admin/:id", updateValidation, DiscountController.update);
router.delete("/admin/:id", DiscountController.delete);

export default router;
import { Router } from "express";
import productController from "../controllers/ProductController";
import createValidation from "../Validations/Product/create";
import updateValidation from "../Validations/Product/update";
import userAuthentication from "../Middlewares/authentication";
import adminVerification from "../Middlewares/adminVerification";

const router = Router();

router.post("/admin", userAuthentication, createValidation, adminVerification,productController.create);
router.get("/catalog", productController.findAll);
router.get("/:id", productController.findOne);
router.put("/admin/:id", userAuthentication, updateValidation, adminVerification, productController.update);
router.delete("/admin/:id", userAuthentication, adminVerification, productController.delete);

export default router;
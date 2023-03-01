import { Router } from "express";
import productController from "../controllers/ProductController";
import createValidation from "../Validations/Product/create";
import updateValidation from "../Validations/Product/update";
import userAuthentication from "../Middlewares/authentication";

const router = Router();

router.post("/admin", userAuthentication, createValidation, productController.create);
router.get("/catalog", productController.findAll);
router.get("/:id", productController.findOne);
router.put("/admin/:id", userAuthentication, updateValidation, productController.update);
router.delete("/admin/:id", userAuthentication, productController.delete);

export default router;
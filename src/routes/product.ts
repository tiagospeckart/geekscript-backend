import { Router } from "express";
import ProductController from "../controllers/ProductController";
import createValidation from "../validations/Product/create";
import updateValidation from "../validations/Product/update";
import userAuthentication from "../middlewares/authentication";
import adminVerification from "../middlewares/adminVerification";

const router = Router();

router.post("/admin", userAuthentication, adminVerification, createValidation, ProductController.create);
router.get("/catalog/", ProductController.findAll);
router.get("/:id", ProductController.findOne);
router.put("/admin/:id", userAuthentication, adminVerification, updateValidation, ProductController.update);
router.delete("/admin/:id", userAuthentication, adminVerification, ProductController.delete);

export default router;

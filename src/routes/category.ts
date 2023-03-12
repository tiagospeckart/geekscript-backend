import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
import createValidation from "../validations/Category/create";
import updateValidation from "../validations/Category/update";
import userAuthentication from "../middlewares/authentication";
import adminVerification from "../middlewares/adminVerification";

const router = Router();

router.post("/admin/", userAuthentication, createValidation, adminVerification, CategoryController.create);
router.get("/catalog", CategoryController.findAll);
router.get("/:id", CategoryController.findOne);
router.put("/admin/:id", userAuthentication, updateValidation, adminVerification, CategoryController.update);
router.delete("/admin/:id", userAuthentication, adminVerification, CategoryController.delete);

export default router;
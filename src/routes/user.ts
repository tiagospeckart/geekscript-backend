import { Router } from "express";
import UserController from "../controllers/UserController";
import createValidation from "../validations/User/create";
import updateValidation from "../validations/User/update";
import userAuthentication from "../middlewares/authentication";
import adminVerification from "../middlewares/adminVerification";
import PurchaseController from "../controllers/PurchaseController";

const router = Router();

router.post("/register", createValidation, UserController.create);
// client routes
router.get("/profile", userAuthentication, UserController.findMyUser);
router.get('/profile/purchases', PurchaseController.findAllUserPurchase);
router.put("/profile/edit", userAuthentication, UserController.updateMyUser);
router.delete("/profile/delete", userAuthentication, UserController.deleteMyUser);
// admin routes
router.get("/admin", userAuthentication, adminVerification, UserController.findAll);
router.get("/admin/:id", userAuthentication, adminVerification, UserController.findOne);
router.put("/admin/:id", userAuthentication, adminVerification, updateValidation, UserController.update);
router.delete("/admin/:id", userAuthentication, adminVerification, UserController.delete);

export default router;
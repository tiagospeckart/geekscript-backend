import { Router } from "express";
import controller from "./controller";
import createValidation from "../../Validations/Product/create";
import updateValidation from "../../Validations/Product/update";
import userAuthentication from "../../Middlewares/authentication";

const routes = Router();

routes.post("/product", userAuthentication, createValidation, controller.create);
routes.get("/product", controller.findAll);
routes.get("/product/:id", controller.findOne);
routes.put("/product/:id", userAuthentication, updateValidation, controller.update);
routes.delete("/product/:id", userAuthentication, controller.delete);

export default routes;
import { Router } from "express";
import controller from "./controller";
import createValidation from "../../Validations/Category/create";
import updateValidation from "../../Validations/Category/update";
import userAuthentication from "../../Middlewares/authentication";

const routes = Router();

routes.post("/category", userAuthentication, createValidation, controller.create);
routes.get("/category", controller.findAll);
routes.get("/category/:id", controller.findOne);
routes.put("/category/:id", userAuthentication, updateValidation, controller.update);
routes.delete("/category/:id", userAuthentication, controller.delete);

export default routes;
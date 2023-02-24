import { Router } from "express";
import controller from "./controller";
import createValidation from "../../Validations/User/create";
import updateValidation from "../../Validations/User/update";
import userAuthentication from "../../Middlewares/authentication";

const routes = Router();

routes.post("/user", createValidation, controller.create);
routes.get("/user", userAuthentication, controller.findAll);
routes.get("/user/:id", userAuthentication, controller.findOne);
routes.put("/user/:id", userAuthentication, updateValidation, controller.update);
routes.delete("/user/:id", userAuthentication, controller.delete);

export default routes;

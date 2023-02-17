import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/user", controller.create);
routes.get("/user", controller.findAll);
routes.get("/user/:id", controller.findOne);
routes.put("/user/:id", controller.update);
routes.delete("/user/:id", controller.delete);

export default routes;
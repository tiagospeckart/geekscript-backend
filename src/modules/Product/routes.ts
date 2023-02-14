import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/product", controller.create);
routes.get("/product", controller.findAll);
routes.get("/product/:id", controller.findOne);
routes.put("/product/:id", controller.update);
routes.delete("/product/:id", controller.delete);

export default routes;
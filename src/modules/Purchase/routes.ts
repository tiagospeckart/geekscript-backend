import { Router } from "express";
import controller from "./controller";

const routes = Router();

routes.post("/purchase", controller.create);
routes.get("/purchase", controller.findAll);
routes.get("/purchase/:id", controller.findOne);
routes.put("/purchase/:id", controller.update);
routes.delete("/purchase/:id", controller.delete);

export default routes;
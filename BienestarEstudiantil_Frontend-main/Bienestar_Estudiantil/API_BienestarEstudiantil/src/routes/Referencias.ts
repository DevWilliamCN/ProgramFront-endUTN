import { Router } from "express";
import ReferenciaController from "../controller/ReferenciaController";

const routes = Router();

routes.get("/getReferencia/:id", ReferenciaController.getReferencia);
routes.get("/getReferencias", ReferenciaController.getReferencias);
routes.post("/addReferencia", ReferenciaController.addReferencia);

routes.patch("/updateReferencia/:id", ReferenciaController.updateReferencia);
routes.delete("/deleteReferencia/:id", ReferenciaController.deleteReferencia);

export default routes;

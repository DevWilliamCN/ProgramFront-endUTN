import { Router } from "express";
import CitaController from "../controller/CitaController";

const routes = Router();
routes.get("/getCita/:id", CitaController.getCita);
routes.get("/getCitas", CitaController.getCitas);
routes.post("/addCita", CitaController.addCita);
routes.patch("/updateCita/:id", CitaController.updateCita);
routes.delete("/erraseCita/:id", CitaController.erraseCita);

export default routes;

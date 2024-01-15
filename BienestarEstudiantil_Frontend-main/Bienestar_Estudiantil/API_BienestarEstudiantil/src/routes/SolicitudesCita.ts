import { Router } from "express";
import SolicitudCitaController from "../controller/SolicitudCitaController";

const routes = Router();

routes.get("/getSolicitudes", SolicitudCitaController.getAllSolicitudes);

routes.get("/getSolicitud/:id", SolicitudCitaController.getSolicitudId);
routes.post("/addSolicitud", SolicitudCitaController.addSolicitud);

export default routes;

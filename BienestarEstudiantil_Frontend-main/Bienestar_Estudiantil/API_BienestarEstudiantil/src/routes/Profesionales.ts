import { Router } from "express";
import ProfesionalController from "../controller/ProfesionalController";

const routes = Router();

routes.get("/getProfesionales", ProfesionalController.getProfesionales);
routes.get("/getProfesional/:id", ProfesionalController.getProfesionaId);

routes.post("", ProfesionalController.addProfesional);

routes.patch("/updateProfesional/:id", ProfesionalController.updateProfesional);
routes.delete("/:cedula", ProfesionalController.deleteProfesional);
export default routes;

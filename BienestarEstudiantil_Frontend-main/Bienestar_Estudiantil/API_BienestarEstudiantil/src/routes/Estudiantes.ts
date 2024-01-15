import { Router } from "express";
import EstudianteController from "../controller/EstudianteController";

const routes = Router();

routes.get("/getEstudiante/:id", EstudianteController.getEstudiante);
routes.get("/getEstudiantes", EstudianteController.getEstudiantes);

routes.post("/addEstudiante", EstudianteController.addEstudiante);

routes.patch("/updateEstudiante/:id", EstudianteController.updateEstudiante);
routes.delete("/deleteEstudiante/:id", EstudianteController.deleteEstudiante);

export default routes;

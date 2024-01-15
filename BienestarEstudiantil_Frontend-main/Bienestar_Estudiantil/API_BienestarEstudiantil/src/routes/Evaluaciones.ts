import { Router } from "express";
import EvaluacionController from "../controller/EvaluacionController";

const routes = Router();

routes.get("/getEvaluacion/:id", EvaluacionController.getEvaluacion);
routes.get("/getEvaluaciones", EvaluacionController.getEvaluaciones);
routes.post("/addEvaluacion", EvaluacionController.addEvaluacion);
routes.patch("/updateEvaluacion/:id", EvaluacionController.updateEvaluacion);
routes.delete("/erraseEvaluacion/:id", EvaluacionController.erraseEvaluacion);

export default routes;

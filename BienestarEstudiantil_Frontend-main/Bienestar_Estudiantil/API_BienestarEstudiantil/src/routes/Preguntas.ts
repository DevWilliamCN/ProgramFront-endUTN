import { Router } from "express";
import PreguntaController from "../controller/PreguntaController";

const routes = Router();

routes.get("/getPreguntas", PreguntaController.getQuest);
routes.post("/addPregunta", PreguntaController.addQuest);
routes.patch("/updatePregunta/:id", PreguntaController.updateQuestion);
routes.delete("/deletePregunta/:id", PreguntaController.erraseQuestion);
export default routes;

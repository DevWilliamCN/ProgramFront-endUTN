import { Router } from "express";
import RespuestaController from "../controller/RespuestaController";

const routes = Router();

routes.get("/getRespuestas", RespuestaController.getAnsw);
routes.post("/addRespuestas", RespuestaController.addAnsw);
routes.patch("/updateRespuesta/:id", RespuestaController.updateAnsw);
routes.delete("/deleteRespuestas/:id", RespuestaController.deleteAnsw);

export default routes;

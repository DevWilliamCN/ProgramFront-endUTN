import { Router } from "express";
import ComentarioController from "../controller/ComentarioController";

const routes = Router();

routes.get("/getComents/:CitaId", ComentarioController.getComents);
routes.post("/addComent", ComentarioController.addComent);
routes.patch("/updateComent", ComentarioController.updateComent);
export default routes;

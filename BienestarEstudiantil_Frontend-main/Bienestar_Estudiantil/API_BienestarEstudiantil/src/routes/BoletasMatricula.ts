import { Router } from "express";
import BoletaMatriculaController from "../controller/BoletaMatriculaController";

const routes = Router();

routes.post("/addBoleta", BoletaMatriculaController.addBoleta);
routes.delete("/erraseBoleta/:id", BoletaMatriculaController.erraseBoleta);

export default routes;

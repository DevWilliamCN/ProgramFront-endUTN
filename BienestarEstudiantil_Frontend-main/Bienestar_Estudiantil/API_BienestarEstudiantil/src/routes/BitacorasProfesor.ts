import { Router } from "express";
import BitacoraProfesorController from "../controller/BitacoraProfesorController";

const routes = Router();
routes.get("/getByCourse/:id", BitacoraProfesorController.getBitacora);
routes.post("/addBitacora", BitacoraProfesorController.AddBitacora);
routes.patch("/modifyBitacora/:id", BitacoraProfesorController.ModifyBitacora);
routes.delete("/deleteBitacora/:id", BitacoraProfesorController.DeleteBitacora);
export default routes;

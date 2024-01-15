import { Router } from "express";
import Usuario_Controller from "../controller/UsuarioController";
const routes = Router();

routes.get("/", Usuario_Controller.getAll);
routes.get("/getById/:id", Usuario_Controller.getById);
routes.post("/create", Usuario_Controller.add);
routes.patch("/changeById/:id", Usuario_Controller.update);
routes.delete("/deleteById/:id", Usuario_Controller.delete);
export default routes;

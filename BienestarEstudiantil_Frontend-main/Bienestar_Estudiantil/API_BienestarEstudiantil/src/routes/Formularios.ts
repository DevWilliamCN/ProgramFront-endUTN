import { Router } from "express";
import FormularioController from "../controller/FormularioController";

const routes = Router();

routes.get("/getFormulario/:id", FormularioController.getForm);
routes.post("/addFormulario", FormularioController.addForm);
routes.patch("/updateFormulario/:id", FormularioController.updateForm);
routes.delete("/deleteFormulario/:id", FormularioController.deleteForm);
export default routes;

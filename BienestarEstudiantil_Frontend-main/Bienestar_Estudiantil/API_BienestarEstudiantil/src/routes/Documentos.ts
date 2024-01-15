import { Router } from 'express';
import DocumentoController from '../controller/DocumentoController';

const routes = Router();
routes.get('/getById/:id', DocumentoController.getDocumento);
export default routes;

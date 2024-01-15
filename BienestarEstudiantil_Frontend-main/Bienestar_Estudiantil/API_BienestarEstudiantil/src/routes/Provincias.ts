import { Router } from 'express';
import ProvinciaController from '../controller/ProvinciasController';

const routes = Router();
routes.get('/getProvincias', ProvinciaController.getProvincias);
export default routes;

import { Router } from 'express';
import DistritosController from '../controller/DistritosController';

const routes = Router();
routes.get('/getDistritos', DistritosController.getDistritos);
export default routes;

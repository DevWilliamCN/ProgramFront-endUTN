import { Router } from 'express';
import AreaController from '../controller/AreaController';

const routes = Router();
routes.get('/getAreas', AreaController.getAreas);
export default routes;

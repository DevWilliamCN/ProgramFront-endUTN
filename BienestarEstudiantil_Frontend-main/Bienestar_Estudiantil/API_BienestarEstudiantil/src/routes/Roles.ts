import { Router } from 'express';
import RolController from '../controller/RolController';

const routes = Router();
routes.get('/getRoles', RolController.getRol);
export default routes;

import { Router } from 'express';
import CantonesController from '../controller/CantonesController';

const routes = Router();
routes.get('/getCantones', CantonesController.getCantones);
export default routes;

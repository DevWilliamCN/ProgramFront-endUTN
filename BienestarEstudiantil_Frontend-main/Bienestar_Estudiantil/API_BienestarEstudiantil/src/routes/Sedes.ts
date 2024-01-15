import { Router } from 'express';
import SedeController from '../controller/SedeController';

const routes = Router();
routes.get('/getSedes', SedeController.getSedes);
routes.get('/getById/:id', SedeController.getSedes);
export default routes;

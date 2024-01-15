import { Request, Response } from 'express';
import { bienestarestudiantil_evaluaciones } from '../entity/Evaluacion'; // Asegúrate de proporcionar la ruta correcta hacia tu entidad de Evaluación
import { error } from 'console';
import { AppDataSource } from '../data-source';

class EvaluacionController {
  static getEvaluacion = async (req: Request, resp: Response) => {
    try {
      const CitaId = parseInt(req.params['id']);

      if (!CitaId) {
        return resp.status(404).json({
          mensaje:
            '¡ATENCION! USUARIO NO SE ENCUENTA EL ID DE LA EVALUACION EN LA BASE DE DATOS.',
        });
      }
      const evaluacionRepo = AppDataSource.getRepository(
        bienestarestudiantil_evaluaciones
      );

      const listaevaluaciones = await evaluacionRepo.find({
        where: { cita: { CitaId } },
        relations: { cita: true },
      });

      if (listaevaluaciones.length == 0) {
        return resp.status(404).json({
          mensaje:
            '¡ATENCION USUARIO! ese ID de la evaluacion no esta registrado en la base de datos ',
        });
      }
      return resp.status(200).json(listaevaluaciones);
    } catch (error) {}
    return resp.status(400).json({ mensaje: error });
  };
  static getEvaluaciones = async (req: Request, resp: Response) => {};
  static addEvaluacion = async (req: Request, resp: Response) => {};
  static updateEvaluacion = async (req: Request, resp: Response) => {};
  static erraseEvaluacion = async (req: Request, resp: Response) => {};
}

export default EvaluacionController;

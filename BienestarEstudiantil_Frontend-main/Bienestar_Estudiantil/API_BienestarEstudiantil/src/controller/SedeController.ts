import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_sedes } from '../entity/Sede';

class SedeController {
  static getSedes = async (req: Request, resp: Response) => {
    try {
      const SedesRepo = AppDataSource.getRepository(bienestarestudiantil_sedes);
      const listaSedes = await SedesRepo.find({
        where: { UniversalUniqueIdentifier: 'UUID' },
        relations: { distrito: true },
      });

      if (listaSedes.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaSedes);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  static getSede = async (req: Request, resp: Response) => {
    try {
      const DistritoId = parseInt(req.params['id']);

      if (!DistritoId) {
        return resp.status(404).json({
          mensaje:
            '¡ATENCION! USUARIO NO SE ENCUENTA EL ID DEl DISTRITO EN LA BASE DE DATOS.',
        });
      }
      const SedesRepo = AppDataSource.getRepository(bienestarestudiantil_sedes);

      const listaSedes = await SedesRepo.find({
        where: { distrito: { DistritoId } },
        relations: { distrito: true },
      });

      if (listaSedes.length == 0) {
        return resp.status(404).json({
          mensaje:
            '¡ATENCION USUARIO! ese ID de la evaluacion no esta registrado en la base de datos ',
        });
      }
      return resp.status(200).json(listaSedes);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default SedeController;

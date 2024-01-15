import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_areas } from '../entity/Area';

class AreaController {
  static getAreas = async (req: Request, resp: Response) => {
    try {
      const AreasRepo = AppDataSource.getRepository(bienestarestudiantil_areas);
      const listaAreas = await AreasRepo.find({
        where: { UniversalUniqueIdentifier: 'UUID' },
        relations: { profesional: true },
      });

      if (listaAreas.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaAreas);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default AreaController;

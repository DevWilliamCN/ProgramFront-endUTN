import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_distritos } from '../entity/Distrito';

class DistritosController {
  static getDistritos = async (req: Request, resp: Response) => {
    try {
      const DistritosRepo = AppDataSource.getRepository(
        bienestarestudiantil_distritos
      );
      const listaDistritos = await DistritosRepo.find({
        where: { UniversalUniqueIdentifier: 'UUID' },
      });

      if (listaDistritos.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaDistritos);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default DistritosController;

import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_cantones } from '../entity/Canton';

class CantonesController {
  static getCantones = async (req: Request, resp: Response) => {
    try {
      const CantonesRepo = AppDataSource.getRepository(
        bienestarestudiantil_cantones
      );
      const listaCantones = await CantonesRepo.find({
        where: { UniversalUniqueIdentifier: 'UUID' },
        relations: { distrito: true },
      });

      if (listaCantones.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaCantones);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default CantonesController;

import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_provincias } from '../entity/Provincia';

class ProvinciaController {
  static getProvincias = async (req: Request, resp: Response) => {
    try {
      const ProvinciasRepo = AppDataSource.getRepository(
        bienestarestudiantil_provincias
      );
      const ListaProvincias = await ProvinciasRepo.find({
        where: { UniversalUniqueIdentifier: 'UUID' },
        relations: { canton: true },
      });

      if (ListaProvincias.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(ListaProvincias);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default ProvinciaController;

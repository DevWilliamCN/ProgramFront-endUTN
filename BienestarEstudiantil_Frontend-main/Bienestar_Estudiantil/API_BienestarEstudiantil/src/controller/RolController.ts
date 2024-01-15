import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { bienestarestudiantil_roles } from '../entity/Rol';

class RolController {
  static getRol = async (req: Request, resp: Response) => {
    try {
      const RolRepo = AppDataSource.getRepository(bienestarestudiantil_roles);
      const listaRoles = await RolRepo.find({
        where: { UniversalUniqueIdentifier: 'UUID' },
      });

      if (listaRoles.length == 0) {
        return resp.status(404).json({
          mensaje: 'No se encontró resultado',
        });
      }

      return resp.status(200).json(listaRoles);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
}
export default RolController;

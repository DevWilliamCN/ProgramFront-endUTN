import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_cantones } from "../entity/Canton";

class CantonController {
  static getCantonesByProvincia = async (req: Request, res: Response) => {
    try {
      const ProvinciaId = Number(req.params.ProvinciaId);
      
      if (isNaN(ProvinciaId)) {
        return res.status(400).json({ error: 'ProvinciaId no es un número válido' });
      }

      const repository = AppDataSource.getRepository(bienestarestudiantil_cantones);

      const cantones = await repository
        .createQueryBuilder("canton")
        .where("canton.ProvinciaId = :ProvinciaId", { ProvinciaId })
        .getMany();

      if (cantones.length === 0) {
        return res.status(404).json({ mensaje: "No se encontraron cantones para la provincia indicada." });
      }

      return res.status(200).json(cantones);
    } catch (error) {
      return res.status(500).json({ error: "Ocurrió un error al obtener los cantones" });
    }
  };
}

export default CantonController;

import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_distritos } from "../entity/Distrito";

class DistritoController {
  static getDistritosByCanton = async (req: Request, res: Response) => {
    try {
      const CantonId = Number(req.params.CantonId);
      
      if (isNaN(CantonId)) {
        return res.status(400).json({ error: 'CantonId no es un número válido' });
      }

      const repository = AppDataSource.getRepository(bienestarestudiantil_distritos);

      const distritos = await repository
        .createQueryBuilder("distrito")
        .where("distrito.CantonId = :CantonId", { CantonId })
        .getMany();

      if (distritos.length === 0) {
        return res.status(404).json({ mensaje: "No se encontraron distritos para el cantón indicado." });
      }

      return res.status(200).json(distritos);
    } catch (error) {
      return res.status(500).json({ error: "No se pudieron obtener los distritos" });
    }
  };
}

export default DistritoController;

import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_comentarios } from "../entity/Comentario";
import { bienestarestudiantil_citas } from "../entity/Cita";

class ComentarioController {
  static getComents = async (req: Request, resp: Response) => {
    try {
      const CitaId = parseInt(req.params["CitaId"]);

      if (!CitaId) {
        return resp.status(404).json({ mensaje: "No se Indica el ID de Cita" });
      }

      const comentariosRepo = AppDataSource.getRepository(
        bienestarestudiantil_comentarios
      );
      const listaComentarios = await comentariosRepo.find({
        where: { CitaId: { CitaId } },
      });

      if (listaComentarios.length == 0) {
        return resp.status(404).json({
          mensaje: "No se encontró resultado",
        });
      }

      return resp.status(200).json(listaComentarios);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  static addComent = async (req: Request, resp: Response) => {
    /*********************** */
    //destructor
    try {
      const {
        ComentarioId,
        CitaId,
        Comentario,
        UniversalUniqueIdentifier,
        LastUser,
        LastUpdate,
      } = req.body;

      if (!CitaId) {
        return resp.status(404).json({
          mensaje: "Debe de indicar la cita ID",
        });
      }
      if (!Comentario) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar el porque de la cita" });
      }

      const comentarioEntidad = AppDataSource.getRepository(
        bienestarestudiantil_comentarios
      );
      const citaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_citas
      );
      let comentarios, citas;

      citas = await citaEntidad.findOne({
        where: { CitaId },
      });

      try {
        //Verficar si la marca existe
        citas = await citaEntidad.findOneOrFail({
          where: { CitaId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra ningun id",
        });
      }

      //Intanciar el objecto
      let newComentario = new bienestarestudiantil_comentarios();
      const fechaActual = new Date();
      newComentario.ComentarioId = ComentarioId; //asignar los datos
      newComentario.CitaId = CitaId;
      newComentario.Comentario = Comentario;
      newComentario.UniversalUniqueIdentifier = "UUID";
      newComentario.LastUser = LastUser;
      newComentario.LastUpdate = fechaActual;

      await comentarioEntidad.save(newComentario); //Guardar en la entidad vehiculo
      return resp
        .status(200)
        .json({ mensaje: "Comentario guardado exitosamente" });
    } catch (error) {
      return resp.status(400).json({ error });
    }

    /*********************** */
  };
  static updateComent = async (req: Request, resp: Response) => {
    /*********************** */
    //destructor
    try {
      const {
        ComentarioId,
        CitaId,
        Comentario,
        UniversalUniqueIdentifier,
        LastUser,
        LastUpdate,
      } = req.body;

      if (!CitaId) {
        return resp.status(404).json({
          mensaje: "Debe de indicar la cita ID",
        });
      }
      if (!Comentario) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar el porque de la cita" });
      }

      const comentarioEntidad = AppDataSource.getRepository(
        bienestarestudiantil_comentarios
      );
      const citaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_citas
      );
      let comentarios, citas;

      citas = await citaEntidad.findOne({
        where: { CitaId },
      });

      try {
        //Verficar si la marca existe
        citas = await citaEntidad.findOneOrFail({
          where: { CitaId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra ningun id",
        });
      }

      //Intanciar el objecto
      let newComentario = new bienestarestudiantil_comentarios();
      const fechaActual = new Date();
      newComentario.ComentarioId = ComentarioId; //asignar los datos
      newComentario.CitaId = CitaId;
      newComentario.Comentario = Comentario;
      newComentario.UniversalUniqueIdentifier = "UUID";
      newComentario.LastUser = LastUser;
      newComentario.LastUpdate = fechaActual;

      await comentarioEntidad.save(newComentario); //Guardar en la entidad comentario
      return resp
        .status(200)
        .json({ mensaje: "Comentario guardado exitosamente" });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
  static erraseComent = async (req: Request, resp: Response) => {};
}
export default ComentarioController;

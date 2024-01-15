import { Request, Response } from "express";
import { bienestarestudiantil_profesionales } from "../entity/Profesional";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_areas } from "../entity/Area";
import { bienestarestudiantil_sedes } from "../entity/Sede";
import { bienestarestudiantil_personas } from "../entity/Persona";

class ProfesionalController {
  static getProfesionales = async (req: Request, resp: Response) => {
    try {
      //Tomar repositorio
      const ProfesionalEntidad = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      //Validación logica si se encuentra el profesional disponible
      const profesionales = await ProfesionalEntidad.find({
        relations: {
          SedeId: true,
          AreaId: true,
        },
      });
      // Si se encontro algun elemento en el metodo anterio su longitud sera diferente a 0
      if (profesionales.length == 0) {
        return resp
          .status(404)
          .json({ mensaje: "No hay profesionales registrados" });
      }
      //Devuelve la lista de los profesionales encontrada
      return resp.status(200).json(profesionales);
    } catch (error) {
      console.log(error);
      return resp.status(400).json({ mensaje: "Error, vuelve a intentarlo" });
    }
  };

  static getProfesionaId = async (req: Request, resp: Response) => {
    try {
      const Identificacion = req.params["id"];
      if (!Identificacion) {
        return resp.status(404).json({
          mensaje: "Recuerde indicar la identificación del profesional",
        });
      }

      const profesionalEntidad = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );

      try {
        const profesional = await profesionalEntidad.findOneOrFail({
          where: { Identificacion },
          relations: {
            SedeId: true,
            AreaId: true,
          },
        });

        return resp.status(200).json({ profesional });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encontro ninguna solicitud con esa identificación",
        });
      }
    } catch (error) {
      return resp.status(400).json({ mensaje: "Error inesperado" });
    }
  };

  static addProfesional = async (req: Request, resp: Response) => {
    /******************************************************************* */
    //destructor
    try {
      const {
        ProfesionalId,
        Identificacion,
        Especialidad,
        SedeId,
        AreaId,
        UniversalUniqueIdentifier,
        LastUser,
        LastUpdate,
        Estado,
      } = req.body;
      //Validaciciónes de datos de entrada
      /* if (!ProfesionalId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar el ID del profesional" });
      }*/
      if (!Identificacion) {
        return resp.status(404).json({
          mensaje: "Debe de indicar la identificacion del profesional",
        });
      }
      if (!SedeId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar la sede en la cual trabaja " });
      }
      if (!AreaId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar la area del profesional" });
      }
      //Tomar repositorios, en este caso hay que tomar 4 repositorios
      //ya que dicha entidad cuenta con 3 llaves foranía de otras tablas
      //y se debe de validar la existencia de los atributos
      const profesionalEntidad = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      const sedeEntidad = AppDataSource.getRepository(
        bienestarestudiantil_sedes
      );
      const areaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_areas
      );
      const personaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_personas
      );
      let profesional, sedes, areas, identiPersona;

      //Validaciónes de regla de negocios
      profesional = await profesionalEntidad.findOne({
        where: { ProfesionalId },
      });
      identiPersona = await profesionalEntidad.findOne({
        where: { Identificacion },
      });

      /*sedes = await sedeEntidad.findOne({ where: { SedeId } });
        areas = await sedeArea.findOne({ where: { AreaId } });*/

      /* if (profesinal) {
        return resp
          .status(404)
          .json({ mensaje: "El profesional ya se encuentra registrado" });
      }*/

      if (identiPersona) {
        return resp.status(404).json({
          mensaje: "Ya hay un profesional registrado con la misma cedula",
        });
      }

      try {
        //verificar si el color existe
        sedes = await sedeEntidad.findOneOrFail({
          where: { SedeId },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontra ninguna sede con ese ID" });
      }

      try {
        //Verficar si la marca existe
        areas = await areaEntidad.findOneOrFail({
          where: { AreaId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra ningun area con ese ID",
        });
      }

      try {
        //Verficar si la marca existe
        profesional = await personaEntidad.findOneOrFail({
          where: { Identificacion },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra ninguna persona con ese ID",
        });
      }

      //Intanciar el objecto
      let newProfesional = new bienestarestudiantil_profesionales();
      const fechaActual = new Date();
      newProfesional.ProfesionalId = ProfesionalId; //asignar los datos
      newProfesional.Identificacion = Identificacion;
      newProfesional.Especialidad = Especialidad;
      newProfesional.SedeId = SedeId;
      newProfesional.AreaId = AreaId;
      newProfesional.UniversalUniqueIdentifier = "UUID";
      newProfesional.LastUser = LastUser;
      newProfesional.LastUpdate = fechaActual;
      newProfesional.Estado = "Activo";

      await profesionalEntidad.save(newProfesional); //Guardar en la entidad vehiculo
      return resp
        .status(200)
        .json({ mensaje: "El usuario ha sido guardo con exito" });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
  /******************************************************************* */

  static updateProfesional = async (req: Request, resp: Response) => {};

  static deleteProfesional = async (Request: Request, Response: Response) => {
    //Eliminado logico (cambiar el estado de la marca)
    try {
      const Identificacion = Request.params["cedula"]; //tomar parametro de la url y verificarlo
      if (!Identificacion) {
        return Response.status(404).json({
          mensaje: "No se indico la cedula",
        });
      }
      //Tomar repositorio
      const profesionalEntidad = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      let profesional;
      //validaciones de negocio
      try {
        profesional = await profesionalEntidad.findOneOrFail({
          where: { Identificacion, Estado: "Activo" }, //Verifica si se encuentra el id y si su estado es activo
        });
      } catch (error) {
        return Response.status(404).json({
          mensaje:
            "No se encontró ninguna marca registrada con esa identificación",
        });
      }
      profesional.Estado = "Inactivo"; //Cambia el estado para un eliminado logico

      try {
        await profesionalEntidad.save(profesional); //lo guarda en el repositorio
        return Response.status(200).json({
          mensaje: "Profesional eliminada con exito",
        });
      } catch (error) {
        return Response.status(400).json({
          mensaje: "Error inesperado, no se pudó eliminar el profesional",
        });
      }
    } catch (error) {
      return Response.status(404).json({ mensaje: error });
    }
  };
}
export default ProfesionalController;

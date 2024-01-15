import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import SolicitudCita, {
  bienestarestudiantil_solicitudescitas,
} from "../entity/SolicitudCita";
import { bienestarestudiantil_profesionales } from "../entity/Profesional";
import { bienestarestudiantil_formularios } from "../entity/Formulario";
import { bienestarestudiantil_estudiantes } from "../entity/Estudiante";

class SolicitudCitaController {
  /*-------------------------------------------------------------------------------------------------*/
  static getAllSolicitudes = async (req: Request, resp: Response) => {
    try {
      //Tomar repositorio
      const solicitudEntidad = AppDataSource.getRepository(
        bienestarestudiantil_solicitudescitas
      );
      //Validación logica si se encuentra la marca disponible
      const entidadSolicitud = await solicitudEntidad.find({
        relations: {
          profesional: true,
          formulario: true,
          estudiante: true,
        },
      });
      // Si se encontro algun elemento en el metodo anterio su longitud sera diferente a 0
      if (entidadSolicitud.length == 0) {
        return resp
          .status(404)
          .json({ mensaje: "No hay solicitudes registradas" });
      }
      //Devuelve la lista de las marcas encontrada
      return resp.status(200).json(entidadSolicitud);
    } catch (error) {
      return resp
        .status(400)
        .json({ mensaje: "Error inesperado, vuelve a intentarlo" });
    }
  };
  /*-------------------------------------------------------------------------------------------------*/

  static getSolicitudId = async (req: Request, resp: Response) => {
    try {
      const SolicitudId = parseInt(req.params["id"]);
      if (!SolicitudId) {
        return resp.status(404).json({
          mensaje: "Recuerde indicar la identificación de la solicitud",
        });
      }

      const solicitudEntidad = AppDataSource.getRepository(
        bienestarestudiantil_solicitudescitas
      );
      const profesionalEntidad = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      const formularioEntidad = AppDataSource.getRepository(
        bienestarestudiantil_formularios
      );
      const estudianteEntidad = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );

      try {
        const idSolicitudCitas = await solicitudEntidad.findOneOrFail({
          where: { SolicitudId },
          relations: {
            //nos devuelve las relaciones
            profesional: true,
            formulario: true,
            estudiante: true,
          },
        });

        return resp.status(200).json({ idSolicitudCitas });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encontro ninguna solicitud con esa identificación",
        });
      }
    } catch (error) {
      return resp.status(400).json({ mensaje: "Error inesperado" });
    }
  };

  /*-------------------------------------------------------------------------------------------------*/

  static addSolicitud = async (req: Request, resp: Response) => {
    //destructor
    try {
      const {
        SolicitudId,
        EstudianteId,
        FechaHora,
        Asunto,
        ProfesionalId,
        FormularioId,
        UniversalUniqueIdentifier,
        LastUser,
        LastUpdate,
      } = req.body;
      //Validaciciónes de datos de entrada
      if (!SolicitudId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar la identificación de la solicitud" });
      }
      if (!EstudianteId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar la identifación de estudiante" });
      }
      if (!Asunto) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar el asunto de la consulta" });
      }
      if (!ProfesionalId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar el id del profesional" });
      }

      if (!FormularioId) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de indicar la identicación del formulario" });
      }
      //Tomar repositorios, en este caso hay que tomar 4 repositorios
      //ya que dicha entidad cuenta con 3 llaves foranía de otras tablas
      //y se debe de validar la existencia de los atributos
      const solicitudEntidad = AppDataSource.getRepository(
        bienestarestudiantil_solicitudescitas
      );
      const profesionalEntidad = AppDataSource.getRepository(
        bienestarestudiantil_profesionales
      );
      const formularioEntidad = AppDataSource.getRepository(
        bienestarestudiantil_formularios
      );
      const estudianteEntidad = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );
      let solicitudes, profesionales, formularios, estudiantes;

      //Validaciónes de regla de negocios
      solicitudes = await solicitudEntidad.findOne({ where: { SolicitudId } });
      profesionales = await profesionalEntidad.findOne({
        where: { ProfesionalId },
      });
      formularios = await formularioEntidad.findOne({
        where: { FormularioId },
      });

      if (solicitudes) {
        return resp
          .status(404)
          .json({ mensaje: "Ya existe una solicitud con ese mismo ID" });
      }
      try {
        //verificar si el color existe
        profesionales = await profesionalEntidad.findOneOrFail({
          where: { ProfesionalId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje:
            "No se encuentra nigun profesional registrado con esa identificación",
        });
      }
      try {
        //Verficar si la marca existe
        formularios = await formularioEntidad.findOneOrFail({
          where: { FormularioId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje:
            "No se encuentra ningun tipo de formulario con esa identifación",
        });
      }
      try {
        //Verficar si la marca existe
        estudiantes = await estudianteEntidad.findOneOrFail({
          where: { EstudianteId },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje:
            "No se encuentra ningun tipo de estudiante con esa identificación",
        });
      }
      //Intanciar el objecto
      let newSolicitud = new bienestarestudiantil_solicitudescitas();
      const fechaActual = new Date();
      newSolicitud.SolicitudId = SolicitudId; //asignar los datos
      newSolicitud.EstudianteId = EstudianteId;
      newSolicitud.FechaHora = fechaActual;
      newSolicitud.Asunto = Asunto;
      newSolicitud.formulario = FormularioId;
      newSolicitud.profesional = ProfesionalId;
      newSolicitud.UniversalUniqueIdentifier = UniversalUniqueIdentifier;
      newSolicitud.LastUser = LastUser;
      newSolicitud.LastUpdate = LastUpdate;

      await solicitudEntidad.save(newSolicitud); //Guardar en la entidad vehiculo
      return resp
        .status(200)
        .json({ mensaje: "La solicitud ha sido agregada correctamente" });
    } catch (error) {
      return resp
        .status(400)
        .json({ mensaje: "Error inesperado, vuelve a intentarlo!" });
    }
  };
}

export default SolicitudCitaController;

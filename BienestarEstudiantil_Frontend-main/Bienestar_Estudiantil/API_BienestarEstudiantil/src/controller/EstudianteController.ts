import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { bienestarestudiantil_estudiantes } from "../entity/Estudiante";
import { bienestarestudiantil_personas } from "../entity/Persona";

class EstudianteController {
  static getEstudiante = async (req: Request, resp: Response) => {
    try {
      const EstudianteId = parseInt(req.params["id"]);
      if (!EstudianteId) {
        return resp
          .status(404)
          .json({ mensaje: "No se ingresó el Id de Estudiante!" });
      }
      const estudianteRepo = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );

      //Lista de estudiantes
      let estudiante;
      try {
        estudiante = await estudianteRepo.findOneOrFail({
          where: { EstudianteId, EstadoTrabajo: true },
          relations: { boleta: true, persona: true },
        });
      } catch (error) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontró un estudiante con dicho ID" });
      }
      //Devolver Resultados de lista de Estudiante
      return resp.status(201).json(estudiante);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  static getEstudiantes = async (req: Request, resp: Response) => {
    try {
      const estudianteRepo = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );

      //Lista de estudiantes
      const listEstudiante = await estudianteRepo.find({
        where: { EstadoTrabajo: true },
      });
      //Validar Resultados Existentes
      if (listEstudiante.length == 0) {
        return resp
          .status(404)
          .json({ mensaje: "No se encontraron resultados." });
      }
      //Devolver Resultados de lista de Estudiante
      return resp.status(201).json(listEstudiante);
    } catch (error) {
      return resp.status(400).json({ mensaje: error });
    }
  };
  static addEstudiante = async (req: Request, resp: Response) => {
    /*********************** */
    //destructor
    try {
      const {
        EstudianteId,
        Identificacion,
        AyudaFamiliar,
        FechaIngreso,
        EstadoTrabajo,
        UniversalUniqueIdentifier,
        LastUpdate,
        LastUser,
        HojaDeSalud,
        DatosAcademicos,
        TituloBachilleratoMedio,
      } = req.body;

      if (!Identificacion) {
        return resp.status(404).json({
          mensaje: "Debe de indicar la identificacion del estudiante",
        });
      }
      if (!AyudaFamiliar) {
        return resp.status(404).json({
          mensaje: "Debe de indicar que ayuda familia recibe el estudiante ",
        });
      }
      if (!FechaIngreso) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de la fecha de ingreso del estudiante" });
      }
      if (!EstadoTrabajo) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar si la persona trabaja o no" });
      }
      //Tomar repositorios, en este caso hay que tomar 4 repositorios
      //ya que dicha entidad cuenta con 3 llaves foranía de otras tablas
      //y se debe de validar la existencia de los atributos
      const estudianteEntidad = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );
      const personaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_personas
      );
      let estudiante, persona;

      if (estudiante) {
        return resp
          .status(404)
          .json({ mensaje: "El estudiante ya se encuentra registrado" });
      }

      //Validaciónes de regla de negocios
      estudiante = await estudianteEntidad.findOne({
        where: { Identificacion },
      });
      persona = await personaEntidad.findOne({
        where: { Identificacion },
      });

      try {
        //Verficar si la marca existe
        persona = await personaEntidad.findOneOrFail({
          where: { Identificacion },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra ninguna identicación",
        });
      }

      //Intanciar el objecto
      let newEstudiante = new bienestarestudiantil_estudiantes();
      const fechaActual = new Date();
      newEstudiante.Identificacion = Identificacion;
      newEstudiante.AyudaFamiliar = AyudaFamiliar;
      newEstudiante.FechaIngreso = FechaIngreso;
      newEstudiante.EstadoTrabajo = EstadoTrabajo;
      newEstudiante.UniversalUniqueIdentifier = "UUID";
      newEstudiante.HojaDeSalud = "d";
      newEstudiante.DatosAcademicos = "d";
      newEstudiante.TituloBachilleratoMedio = "d";

      newEstudiante.LastUser = LastUser;
      newEstudiante.LastUpdate = fechaActual;

      await estudianteEntidad.save(newEstudiante); //Guardar en la entidad vehiculo
      return resp
        .status(200)
        .json({ mensaje: "El estudiante fue guardado con exito" });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
  static updateEstudiante = async (req: Request, resp: Response) => {
    /*********************** */
    //destructor
    try {
      const {
        EstudianteId,
        Identificacion,
        AyudaFamiliar,
        FechaIngreso,
        EstadoTrabajo,
        UniversalUniqueIdentifier,
        LastUpdate,
        LastUser,
        HojaDeSalud,
        DatosAcademicos,
        TituloBachilleratoMedio,
      } = req.body;

      if (!Identificacion) {
        return resp.status(404).json({
          mensaje: "Debe de indicar la identificacion del estudiante",
        });
      }
      if (!AyudaFamiliar) {
        return resp.status(404).json({
          mensaje: "Debe de indicar que ayuda familia recibe el estudiante ",
        });
      }
      if (!FechaIngreso) {
        return resp
          .status(404)
          .json({ mensaje: "Debe de la fecha de ingreso del estudiante" });
      }
      if (EstadoTrabajo) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar si la persona trabaja o no" });
      }
      //Tomar repositorios, en este caso hay que tomar 4 repositorios
      //ya que dicha entidad cuenta con 3 llaves foranía de otras tablas
      //y se debe de validar la existencia de los atributos
      const estudianteEntidad = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );
      const personaEntidad = AppDataSource.getRepository(
        bienestarestudiantil_personas
      );
      let estudiante, persona;

      if (estudiante) {
        return resp
          .status(404)
          .json({ mensaje: "El estudiante ya se encuentra registrado" });
      }

      //Validaciónes de regla de negocios
      estudiante = await estudianteEntidad.findOne({
        where: { Identificacion },
      });
      persona = await personaEntidad.findOne({
        where: { Identificacion },
      });

      try {
        //Verficar si la marca existe
        persona = await personaEntidad.findOneOrFail({
          where: { Identificacion },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra ninguna identicación",
        });
      }

      //Intanciar el objecto
      let newEstudiante = new bienestarestudiantil_estudiantes();
      const fechaActual = new Date();
      newEstudiante.Identificacion = Identificacion;
      newEstudiante.AyudaFamiliar = AyudaFamiliar;
      newEstudiante.FechaIngreso = FechaIngreso;
      newEstudiante.EstadoTrabajo = EstadoTrabajo;
      newEstudiante.UniversalUniqueIdentifier = "UUID";
      newEstudiante.HojaDeSalud = "d";
      newEstudiante.DatosAcademicos = "d";
      newEstudiante.TituloBachilleratoMedio = "d";

      newEstudiante.LastUser = LastUser;
      newEstudiante.LastUpdate = fechaActual;

      await estudianteEntidad.save(newEstudiante); //Guardar en la entidad estudiante
      return resp
        .status(200)
        .json({ mensaje: "El estudiante fue guardado con exito" });
    } catch (error) {
      return resp.status(400).json({ error });
    }
  };
  static deleteEstudiante = async (req: Request, resp: Response) => {
    try {
      const Identificacion = req.params["id"];
      if (!Identificacion) {
        return resp
          .status(404)
          .json({ mensaje: "Debe indicar la Identificación" });
      }

      const estudRepo = AppDataSource.getRepository(
        bienestarestudiantil_estudiantes
      );
      let est: bienestarestudiantil_estudiantes;
      try {
        est = await estudRepo.findOneOrFail({
          where: { Identificacion, EstadoTrabajo: true },
        });
      } catch (error) {
        return resp.status(404).json({
          mensaje: "No se encuentra el estudiante con esa Identificación",
        });
      }

      est.EstadoTrabajo = false;
      try {
        await estudRepo.save(est);
        return resp.status(200).json({ mensaje: "Se eliminó correctamente" });
      } catch (error) {
        return resp.status(400).json({ mensaje: "No se pudo eliminar." });
      }
    } catch (error) {
      return resp.status(400).json({ mensaje: "No se pudo eliminar" });
    }
  };
}
export default EstudianteController;

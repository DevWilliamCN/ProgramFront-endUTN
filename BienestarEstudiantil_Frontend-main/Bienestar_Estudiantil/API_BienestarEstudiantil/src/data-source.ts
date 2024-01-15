import "reflect-metadata";
import { DataSource } from "typeorm";
import { bienestarestudiantil_areas } from "./entity/Area";
import { bienestarestudiantil_bitacoraprofesores } from "./entity/bitacoraProfesor";
import { bienestarestudiantil_boletasmatricula } from "./entity/BoletaMatricula";
import { bienestarestudiantil_cantones } from "./entity/Canton";
import { bienestarestudiantil_citas } from "./entity/Cita";
import { bienestarestudiantil_comentarios } from "./entity/Comentario";
import { bienestarestudiantil_distritos } from "./entity/Distrito";
import { bienestarestudiantil_documentos } from "./entity/Documento";
import { bienestarestudiantil_estudiantes } from "./entity/Estudiante";
import { bienestarestudiantil_evaluaciones } from "./entity/Evaluacion";
import { bienestarestudiantil_formularios } from "./entity/Formulario";
import { bienestarestudiantil_formulariospreguntas } from "./entity/FormulariosPregunta";
import { bienestarestudiantil_horarios } from "./entity/Horario";
import { bienestarestudiantil_personas } from "./entity/Persona";
import { bienestarestudiantil_preguntas } from "./entity/Pregunta";
import { bienestarestudiantil_profesionales } from "./entity/Profesional";
import { bienestarestudiantil_provincias } from "./entity/Provincia";
import { bienestarestudiantil_referencias } from "./entity/Referencia";
import { bienestarestudiantil_respuestas } from "./entity/Respuesta";
import { bienestarestudiantil_roles } from "./entity/Rol";
import { bienestarestudiantil_sedes } from "./entity/Sede";
import { bienestarestudiantil_solicitudescitas } from "./entity/SolicitudCita";
import { bienestarestudiantil_usuarios } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "8908",
  database: "bienestarestudiantil",
  synchronize: false,
  logging: false,
  entities: [
    bienestarestudiantil_areas,
    bienestarestudiantil_bitacoraprofesores,
    bienestarestudiantil_boletasmatricula,
    bienestarestudiantil_cantones,
    bienestarestudiantil_citas,
    bienestarestudiantil_comentarios,
    bienestarestudiantil_distritos,
    bienestarestudiantil_documentos,
    bienestarestudiantil_estudiantes,
    bienestarestudiantil_evaluaciones,
    bienestarestudiantil_formularios,
    bienestarestudiantil_formulariospreguntas,
    bienestarestudiantil_horarios,
    bienestarestudiantil_personas,
    bienestarestudiantil_preguntas,
    bienestarestudiantil_profesionales,
    bienestarestudiantil_provincias,
    bienestarestudiantil_referencias,
    bienestarestudiantil_respuestas,
    bienestarestudiantil_roles,
    bienestarestudiantil_sedes,
    bienestarestudiantil_solicitudescitas,
    bienestarestudiantil_usuarios,
  ],
  migrations: [],
  subscribers: [],
  dropSchema: false,
});

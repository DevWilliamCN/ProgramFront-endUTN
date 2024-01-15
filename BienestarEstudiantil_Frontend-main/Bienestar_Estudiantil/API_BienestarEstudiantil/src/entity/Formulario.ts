import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import SolicitudCita, {
  bienestarestudiantil_solicitudescitas,
} from "./SolicitudCita";
import formularioRespuesta, {
  bienestarestudiantil_respuestas,
} from "./Respuesta";
import { bienestarestudiantil_formulariospreguntas } from "./FormulariosPregunta";
import routes from "./Provincia";

@Entity()
export class bienestarestudiantil_formularios {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "el id de Formulario debe de ingresarse" })
  FormularioId: number;

  @Column()
  @IsNotEmpty({ message: "Nombre del Formulario requerido" })
  @IsString({ message: "Ingrese unicamente valores alfanumericos" })
  @Max(100, { message: "Ingrese un maximo de 100 caracteres" })
  NombreFormulario: string;

  @Column()
  @Max(36, { message: "El campo requiere un maximo de 36 caracteres" })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "Inserte Caracteres alfanumericos" })
  UniversalUniqueIdentifier: string;

  @Column()
  @Max(200, { message: "No debe de excederse de más de 200 caracteres" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  @IsString({ message: "No se acepta datos númericos" })
  LastUser: string;

  @Column()
  @IsDate({ message: "Formato de fecha incorrecto" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUpdate: Date;

  //Relations
  @OneToMany(
    () => bienestarestudiantil_solicitudescitas,
    (Solicitud) => Solicitud.formulario
  )
  Solicitud: bienestarestudiantil_solicitudescitas[];

  @OneToMany(
    () => bienestarestudiantil_respuestas,
    (respuesta) => respuesta.formulario
  )
  respuesta: bienestarestudiantil_respuestas[];

  @OneToMany(
    () => bienestarestudiantil_formulariospreguntas,
    (formPregunta) => formPregunta.formulario
  )
  formPregunta: bienestarestudiantil_formulariospreguntas[];
}

export default routes;

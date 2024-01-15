import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes, { bienestarestudiantil_formularios } from "./Formulario";
import { JoinAttribute } from "typeorm/query-builder/JoinAttribute";
import { bienestarestudiantil_preguntas } from "./Pregunta";

@Entity()
export class bienestarestudiantil_formulariospreguntas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsInt({ message: "Valor numerico Requerido" })
  idFormulariosPreguntas: number;

  @Column({ primary: true })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsInt({ message: "Valor numerico Requerido" })
  FormularioId: number;

  @Column({ primary: true })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsInt({ message: "Valor numerico Requerido" })
  PreguntaId: number;

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
  @ManyToOne(
    () => bienestarestudiantil_formularios,
    (formulario) => formulario.formPregunta
  )
  @JoinColumn({ name: "FormularioId", referencedColumnName: "FormularioId" })
  formulario: bienestarestudiantil_formularios;

  @ManyToOne(
    () => bienestarestudiantil_preguntas,
    (pregunta) => pregunta.formPregunta
  )
  @JoinColumn({ name: "PreguntaId", referencedColumnName: "PreguntaId" })
  pregunta: bienestarestudiantil_preguntas;
}

export default routes;

import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import FormulariosPregunta, {
  bienestarestudiantil_formulariospreguntas,
} from "./FormulariosPregunta";
import routes from "./FormulariosPregunta";

@Entity()
export class bienestarestudiantil_preguntas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Id Pregunta Requerido" })
  PreguntaId: number;

  @Column()
  @IsNotEmpty({ message: "enunciado Requerido" })
  @Max(200, {
    message: "El enunciado debe de contener un maximo de 200 caracteres",
  })
  @IsString({ message: "Inserte Caracteres alfanumericos" })
  Enunciado: string;

  @Column()
  @IsNotEmpty({ message: "Tip de Pregunta Requerido" })
  @Max(50, {
    message: "El enunciado debe de contener un maximo de 50 caracteres",
  })
  @IsString({ message: "Inserte Caracteres alfanumericos" })
  TipoPregunta: string;

  @Column()
  @Max(36, { message: "El campo requiere un maximo de 36 caracteres" })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "Inserte Caracteres alfanumericos" })
  UniversalUniqueIdentifier: string;

  @Column()
  @Max(200, { message: "No debe de excederse de más de 200 caracteres" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUser: string;

  @Column()
  @IsDate({ message: "Formato de fecha incorrecto" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUpdate: Date;

  //Relations
  @OneToMany(
    () => bienestarestudiantil_formulariospreguntas,
    (formPregunta) => formPregunta.pregunta
  )
  formPregunta: bienestarestudiantil_formulariospreguntas[];
}

export default routes;

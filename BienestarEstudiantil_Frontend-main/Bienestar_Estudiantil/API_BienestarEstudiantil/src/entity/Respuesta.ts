import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes, { bienestarestudiantil_formularios } from "./Formulario";

@Entity()
export class bienestarestudiantil_respuestas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Dene de ingresar un id de Respuesta" })
  RespuestaId: number;

  @Column({ nullable: false })
  @IsNotEmpty({ message: "Dene de ingresar una Respuesta" })
  @IsString({
    message: "Ingrese valores alfanumericos dentro de la respuesta!",
  })
  @Max(200, {
    message: "Ingrese un total de 200 caracteres dentro de la respuesta!",
  })
  Respuesta: string;

  @Column()
  @Max(1, { message: "El campo requiere un único caracter" })
  @IsNotEmpty({ message: "Campo Requerido" })
  UniversalUniqueIdentifier: number;

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
    (formulario) => formulario.respuesta
  )
  @JoinColumn({ name: "FormularioId", referencedColumnName: "FormularioId" })
  formulario: bienestarestudiantil_formularios;
}

export default routes;

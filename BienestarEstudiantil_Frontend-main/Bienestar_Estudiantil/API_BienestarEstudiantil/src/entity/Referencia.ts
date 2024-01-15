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
import Evaluacion, { bienestarestudiantil_evaluaciones } from "./Evaluacion";
import routes from "./Evaluacion";

@Entity()
export class bienestarestudiantil_referencias {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Ingrese un id de referencia" })
  ReferenciaId: number;

  @Column()
  @IsNotEmpty({ message: "Ingrese el nombre de una entidad!" })
  @IsString({
    message: "Debe de ingresar valores alfanumericos dentro del nombre",
  })
  @Max(50, { message: "Ingrese un maximo de 50 caracteres dentro del campo" })
  Entidad: string;

  @Column()
  @IsNotEmpty({ message: "Ingrese el nombre de un area referente!" })
  @IsString({
    message: "Debe de ingresar valores alfanumericos dentro del nombre",
  })
  @Max(50, { message: "Ingrese un maximo de 50 caracteres dentro del campo" })
  AreaReferente: string;

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
    () => bienestarestudiantil_evaluaciones,
    (evaluacion) => evaluacion.referencia
  )
  @JoinColumn({ name: "EvaluacionId", referencedColumnName: "EvaluacionId" })
  EvaluacionId: bienestarestudiantil_evaluaciones;
}

export default routes;

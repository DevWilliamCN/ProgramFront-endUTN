import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_estudiantes } from "./Estudiante";

@Entity()
export class bienestarestudiantil_boletasmatricula {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Id de boleta Requerido" })
  @IsInt({ message: "No se acepta datos númericos" })
  BoletasMatriculaId: number;

  @Column()
  @IsNotEmpty({ message: "No se colocó una boleta de matrícula" })
  @IsString({ message: "No se acepta datos númericos" })
  Boleta: string;

  @Column({ unique: true })
  @Max(30, { message: "Introduzca un total de 30 caracteres" })
  @IsNotEmpty({ message: "Periodo no ingresado" })
  @IsString({ message: "No se acepta datos númericos" })
  Periodo: string;

  @Column()
  @Max(36, { message: "El campo requiere un maximo de 36 caracteres" })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "No se acepta datos númericos" })
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

  //Relation
  @ManyToOne(
    () => bienestarestudiantil_estudiantes,
    (estudiante) => estudiante.boleta,
    {
      nullable: false,
    }
  )
  @JoinColumn({ name: "EstudianteId", referencedColumnName: "EstudianteId" })
  estudiante: bienestarestudiantil_estudiantes;
}
export default routes;

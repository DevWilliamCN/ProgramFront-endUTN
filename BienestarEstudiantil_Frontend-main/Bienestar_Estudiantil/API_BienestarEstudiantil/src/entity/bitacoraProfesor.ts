import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_boletasmatricula } from "./BoletaMatricula";

@Entity()
export class bienestarestudiantil_bitacoraprofesores {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "id de bitacora requerido" })
  @IsInt({ message: "No se acepta datos númericos" })
  BitacoraId: number;

  @Column()
  @IsNotEmpty({ message: "No se colocó una bitácora" })
  @IsString({ message: "No se acepta datos númericos" })
  Bitadora: string;

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

  //Relations
  @OneToOne(() => bienestarestudiantil_boletasmatricula)
  @JoinColumn({
    name: "BoletasMatriculaId",
    referencedColumnName: "BoletasMatriculaId",
  })
  boleta: bienestarestudiantil_boletasmatricula;
}
export default routes;

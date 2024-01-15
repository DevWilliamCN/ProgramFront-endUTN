import { IsDate, IsInt, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_profesionales } from "./Profesional";

@Entity()
export class bienestarestudiantil_areas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Id de Area requerido" })
  @IsInt({ message: "Inserte un número valido" })
  AreaId: number; //PK & FK

  @Column()
  @Max(40, { message: "Please insert 40 letters" })
  @IsNotEmpty({ message: "No se colocó nombre de area" })
  @IsString({ message: "Inserte un nombre correcto" })
  nombreDeArea: string;

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
  @OneToMany(
    () => bienestarestudiantil_profesionales,
    (profesional) => profesional.AreaId
  )
  profesional: bienestarestudiantil_profesionales[];
}
export default routes;

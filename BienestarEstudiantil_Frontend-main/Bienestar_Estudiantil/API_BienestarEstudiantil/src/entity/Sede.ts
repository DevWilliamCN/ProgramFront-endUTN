import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_profesionales } from "./Profesional";
import { bienestarestudiantil_distritos } from "./Distrito";

@Entity()
export class bienestarestudiantil_sedes {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Ingrese un id de Sede" })
  SedeId: string;

  @Column()
  @IsNotEmpty({ message: "No se colocó nombre de sede" })
  @IsString({ message: "Inserte un nombre valido para el nombre de la sede" })
  @Max(50, {
    message: "Ingrese un total de 50 caracteres para el nombre de la sede",
  })
  NombreSede: string;

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
    () => bienestarestudiantil_profesionales,
    (profesional) => profesional.SedeId
  )
  profesional: bienestarestudiantil_profesionales[];

  @OneToOne(() => bienestarestudiantil_distritos, {
    cascade: ["insert", "update"],
    nullable: false,
  })
  @JoinColumn({ name: "DistritoId", referencedColumnName: "DistritoId" })
  distrito: bienestarestudiantil_distritos;
}
export default routes;

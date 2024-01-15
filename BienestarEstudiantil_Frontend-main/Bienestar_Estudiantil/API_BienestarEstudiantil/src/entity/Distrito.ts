import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  isNotEmpty,
  isString,
  max,
} from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_cantones } from "./Canton";
import { bienestarestudiantil_personas } from "./Persona";

@Entity()
export class bienestarestudiantil_distritos {
  @PrimaryColumn()
  @IsInt({ message: "Inserte números unicamente" })
  @IsNotEmpty({ message: "campo requerido" })
  DistritoId: number;

  @Column()
  @IsNotEmpty({ message: "Campo requerido" })
  @IsString({ message: "Inserte Datos AlfaNumericos" })
  @Max(50, { message: "Inserte un maximo de 50 caracteres" })
  NombreDistrito: string;

  @Column({ primary: true, unique: true })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "Inserte Valores Alfanumericos" })
  CantonId: number;

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
  @IsString({ message: "No se acepta datos númericos" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUpdate: Date;

  //Relations
  @ManyToOne(() => bienestarestudiantil_cantones, (can) => can.distrito)
  @JoinColumn({ name: "CantonId", referencedColumnName: "CantonId" })
  can: bienestarestudiantil_cantones;

  @OneToMany(() => bienestarestudiantil_personas, (persona) => persona.distrito)
  persona: bienestarestudiantil_personas;
}
export default routes;

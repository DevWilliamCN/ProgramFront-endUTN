import {
  IsDate,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
} from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_provincias } from "./Provincia";
import { bienestarestudiantil_distritos } from "./Distrito";

@Entity()
export class bienestarestudiantil_cantones {
  @Column({ primary: true, unique: true })
  @IsNotEmpty({ message: "Id Requerido" })
  @IsInt({ message: "Campo solo acepta números" })
  CantonId: number;

  @Column()
  @Max(50, { message: "Inserte un total de 50 caracteres" })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  @IsString({ message: "Debe de insertar letras" })
  NombreCanton: string;

  @Column({ primary: true, unique: true })
  @IsNotEmpty({ message: "Id Provincia vació" })
  @IsInt({ message: "Dato debe ser númerico" })
  ProvinciaId: number;

  @Column()
  @Max(36, { message: "El campo requiere un maximo de 36 caracteres" })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "Tipo de dato no conicide" })
  UniversalUniqueIdentifier: string;

  @Column()
  @Max(200, { message: "No debe de excederse de más de 200 caracteres" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  @IsString({ message: "Inserte unicamente caracteres no alfanumerico" })
  LastUser: string;

  @Column()
  @IsDate({ message: "Formato de fecha incorrecto" })
  @IsString({ message: "No se acepta datos númericos" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUpdate: Date;

  //Relations
  @ManyToOne(
    () => bienestarestudiantil_provincias,
    (provincia) => provincia.canton,
    {
      nullable: false,
    }
  )
  @JoinColumn({ name: "ProvinciaId", referencedColumnName: "ProvinciaId" })
  provincia: bienestarestudiantil_provincias;

  @OneToMany(() => bienestarestudiantil_distritos, (distrito) => distrito.can)
  distrito: bienestarestudiantil_distritos[];
}
export default routes;

import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_usuarios } from "./User";

@Entity()
export class bienestarestudiantil_roles {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Ingrese un id de rol" })
  RolId: number;

  @Column({ unique: true })
  @IsNotEmpty({ message: "No se colocó nombre del rol" })
  @IsString({ message: "Ingrese valores alfanumericos" })
  @Max(60, { message: "Ingrese un total de 60 caracteres" })
  Rol: string;

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
  @OneToMany(() => bienestarestudiantil_usuarios, (usuario) => usuario.rol)
  usuario: bienestarestudiantil_usuarios[];
}
export default routes;

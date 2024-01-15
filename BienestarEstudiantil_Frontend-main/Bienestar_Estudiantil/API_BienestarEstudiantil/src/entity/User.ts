import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import * as bcrypt from "bcryptjs";
import routes from "../routes";
import { bienestarestudiantil_profesionales } from "./Profesional";
import { bienestarestudiantil_roles } from "./Rol";

@Entity()
export class bienestarestudiantil_usuarios {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Debe de ingresar un id de usuario" })
  UsuarioId: number;

  @Column()
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  @IsString({ message: "introduzca un nombre de usuario correcto" })
  @Max(30, {
    message: "El nombre de usuario no debe de exceder los 30 caracteres",
  })
  NombreDeUsuario: string;

  @Column()
  @IsNotEmpty({ message: "Contraseña no puede estar vacía" })
  @Max(150, { message: "La contraseña no debe de exceder los 150 caracteres" })
  Contrasenha: string;

  @Column({ unique: true })
  @IsNotEmpty({ message: "Indique quien es el usuario" })
  @Max(20, {
    message: "Id de profesional debe de contener un maximo de 20 caracteres",
  })
  ProfesionalId: number;

  // @Column({ nullable: true })
  // @IsNotEmpty({ message: "Debe de asignar un estado" })
  // estado: boolean;

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
    () => bienestarestudiantil_profesionales,
    (profesional) => profesional.usuario,
    {
      nullable: false,
    }
  )
  @JoinColumn({ name: "ProfesionalId", referencedColumnName: "ProfesionalId" })
  profesional: bienestarestudiantil_profesionales;

  @ManyToOne(() => bienestarestudiantil_roles, (rol) => rol.usuario, {
    nullable: false,
  })
  @JoinColumn({ name: "RolId", referencedColumnName: "RolId" })
  rol: bienestarestudiantil_roles;

  //Security
  hashPassword(): void {
    const salt = bcrypt.genSaltSync(10);
    this.Contrasenha = bcrypt.hashSync(this.Contrasenha, salt);
  }

  checkPassword(pass: string): boolean {
    return bcrypt.compareSync(pass, this.Contrasenha);
  }
}
export default routes;

import {
  IsDate,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
} from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_distritos } from "./Distrito";
import { bienestarestudiantil_estudiantes } from "./Estudiante";
import { bienestarestudiantil_profesionales } from "./Profesional";

@Entity()
export class bienestarestudiantil_personas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Id de Persona Requerido" })
  @IsInt({ message: "Inserte valores númericos unicamente" })
  PersonaId: number;

  @Column({ unique: true })
  @IsNotEmpty({ message: "Cedula de Persona Requerida" })
  @Max(20, {
    message: "Inserte un total de 20 caracteres como maximo para la cedula",
  })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  Identificacion: string;

  @Column()
  @IsNotEmpty({ message: "No se colocó nombre de la persona" })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  @Max(50, {
    message: "Inserte un total de 50 caracteres como maximo para la cedula",
  })
  Nombre: string;

  @Column()
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  @IsNotEmpty({ message: "Debe de ingresar el apellido  " })
  @Max(50, {
    message: "Inserte un total de 50 caracteres como maximo para la cedula",
  })
  Apellido1: string;

  @Column()
  @IsNotEmpty({ message: "Segundo apellido no puede estar vacío!" })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  @Max(50, {
    message: "Inserte un total de 50 caracteres como maximo para la cedula",
  })
  Apellido2: string;

  @Column()
  @IsNotEmpty({ message: "Genero Requerido" })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  Genero: string;

  @Column()
  @IsNotEmpty({ message: "No se insertó un correo Electronico" })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  @Max(250, {
    message: "Inserte un total de 250 caracteres como maximo para la cedula",
  })
  @IsEmail()
  CorreoElectronico: string;

  @Column()
  @IsNotEmpty({ message: "Fecha de Nacimiento Vacía" })
  @IsDate({ message: "Fecha no posee un formato adecuado" })
  FechaNacimiento: Date;

  @Column()
  @IsNotEmpty({ message: "Numero de telefono Vacío" })
  @IsInt({ message: "Inserte valores númericos unicamente" })
  NumeroTelefono: number;

  @Column()
  @IsNotEmpty({ message: "Dirección Requerida!" })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  @Max(250, {
    message: "Inserte un total de 250 caracteres como maximo para la cedula",
  })
  Direccion: string;

  @Column()
  @IsNotEmpty({ message: "Nacionalidad Vacía" })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  @Max(50, {
    message: "Inserte un total de 50 caracteres como maximo para la cedula",
  })
  Nacionalidad: string;

  @Column()
  @IsNotEmpty({ message: "Foto Vacía" })
  Foto: string;

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
    () => bienestarestudiantil_distritos,
    (distrito) => distrito.persona,
    {
      nullable: false,
    }
  )
  @JoinColumn({ name: "DistritoId", referencedColumnName: "DistritoId" })
  distrito: bienestarestudiantil_distritos[];

  @OneToOne(
    () => bienestarestudiantil_estudiantes,
    (estudiante) => estudiante.persona
  )
  identificacion: bienestarestudiantil_estudiantes;

  @OneToOne(
    () => bienestarestudiantil_profesionales,
    (profesional) => profesional.persona
  )
  profesional: bienestarestudiantil_profesionales;
}
export default routes;

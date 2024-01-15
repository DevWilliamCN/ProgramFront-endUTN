import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_personas } from "./Persona";
import { bienestarestudiantil_usuarios } from "./User";
import { bienestarestudiantil_horarios } from "./Horario";
import { bienestarestudiantil_sedes } from "./Sede";
import { bienestarestudiantil_areas } from "./Area";
import { bienestarestudiantil_solicitudescitas } from "./SolicitudCita";

@Entity()
export class bienestarestudiantil_profesionales {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Debe de insertar un id de profesional" })
  ProfesionalId: number;

  @Column({ unique: true })
  @IsNotEmpty({ message: "Debe de insertar una cedula para el profesional" })
  @Max(20, { message: "Ingrese un total de 20 caracteres para la cedula" })
  @IsString({ message: "Inserte valores alfanumericos dentro de la cedula" })
  Identificacion: string;

  @Column({ nullable: true })
  @IsNotEmpty({ message: "No se le colocó una especialidad al profesional" })
  @Max(40, { message: "Ingrese un total de 40 caracteres para la cedula" })
  @IsString({
    message: "Inserte valores alfanumericos dentro de la especialidad",
  })
  Especialidad: string;

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

  @Column()
  @IsNotEmpty({ message: "Campo Obligatorio" })
  @IsString({ message: "Debe de digitar el estado" })
  Estado: string;

  //Relations
  @ManyToOne(() => bienestarestudiantil_sedes, (sede) => sede.profesional, {
    nullable: false,
  })
  @JoinColumn({ name: "SedeId", referencedColumnName: "SedeId" })
  SedeId: bienestarestudiantil_sedes;

  @ManyToOne(() => bienestarestudiantil_areas, (area) => area.profesional, {
    nullable: false,
  })
  @JoinColumn({ name: "AreaId", referencedColumnName: "AreaId" })
  AreaId: bienestarestudiantil_areas;

  @OneToMany(
    () => bienestarestudiantil_solicitudescitas,
    (Solicitud) => Solicitud.profesional
  )
  Solicitud: bienestarestudiantil_solicitudescitas[];

  @OneToOne(() => bienestarestudiantil_personas)
  @JoinColumn({
    name: "Identificacion",
    referencedColumnName: "Identificacion",
  })
  persona: bienestarestudiantil_personas;

  @OneToMany(
    () => bienestarestudiantil_usuarios,
    (usuario) => usuario.profesional
  )
  usuario: bienestarestudiantil_usuarios[];

  @OneToMany(
    () => bienestarestudiantil_horarios,
    (horario) => horario.profesional
  )
  horario: bienestarestudiantil_horarios[];
}
export default routes;

import { IsDate, IsNotEmpty, IsString, Max, max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_profesionales } from "./Profesional";

@Entity()
export class bienestarestudiantil_horarios {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Id de horario Requerido" })
  HorarioId: number;

  @Column()
  @IsNotEmpty({ message: "No se colocaron los días laborales" })
  @Max(1, { message: "Dia de la semana contiene un maximo de 1 caracter" })
  @IsString({ message: "Dia de la semana no es un caracter aceptable" })
  DiaSemana: string;

  @Column()
  @IsNotEmpty({ message: "No se colocó una hora de Inicio" })
  HoraInicio: string;

  @Column()
  @IsNotEmpty({ message: "No se colocó una hora de Fin" })
  HoraFin: string;

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
    (profesional) => profesional.horario,
    {
      nullable: false,
    }
  )
  @JoinColumn({ name: "ProfesionalId", referencedColumnName: "ProfesionalId" })
  profesional: bienestarestudiantil_profesionales;
}
export default routes;

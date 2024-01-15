import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
} from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import SolicitudCita, {
  bienestarestudiantil_solicitudescitas,
} from "./SolicitudCita";
import { bienestarestudiantil_comentarios } from "./Comentario";
import { bienestarestudiantil_evaluaciones } from "./Evaluacion";
import routes from "./Provincia";

@Entity()
export class bienestarestudiantil_citas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Campo requerido" })
  @IsInt({ message: "Inserte un valor numerico" })
  CitaId: number;

  @Column()
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsDate({ message: "Dato ingresado no es una fecha" })
  FechaHora: Date;

  @Column()
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsInt({ message: "Campo reservado para números" })
  Duracion: number;

  @Column()
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsBoolean({ message: "Valor unico de Falso y Verdadero" })
  Estado: boolean;

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
  @OneToOne(() => bienestarestudiantil_solicitudescitas)
  @JoinColumn({
    name: "solicitudCitaId",
    referencedColumnName: "SolicitudId",
  })
  solicitudCitaId: bienestarestudiantil_solicitudescitas;

  @OneToMany(
    () => bienestarestudiantil_comentarios,
    (comentario) => comentario.CitaId
  )
  comentario: bienestarestudiantil_comentarios[];

  @OneToOne(
    () => bienestarestudiantil_evaluaciones,
    (evaluacion) => evaluacion.cita
  )
  evaluacion: bienestarestudiantil_evaluaciones;
}

export default routes;

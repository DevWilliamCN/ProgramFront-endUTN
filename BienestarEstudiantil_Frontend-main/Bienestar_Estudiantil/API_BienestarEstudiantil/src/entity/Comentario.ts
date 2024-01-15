import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import routes, { bienestarestudiantil_citas } from "./Cita";

@Entity()
export class bienestarestudiantil_comentarios {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Campo Requerido " })
  @IsString({ message: "Inserte valores alfanumericos unicamente" })
  ComentarioId: string;

  @Column()
  @IsNotEmpty()
  @Max(400, { message: "No se aceptan más de 400 caracteres" })
  @IsString({ message: "Inserte caracteres alfanumericos unicamente" })
  Comentario: string;

  @Column()
  @Max(36, { message: "El campo requiere un maximo de 36 caracteres" })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "Inserte caracteres no númericos" })
  UniversalUniqueIdentifier: string;

  @Column()
  @Max(200, { message: "No debe de excederse de más de 200 caracteres" })
  @IsString({ message: "Inserte caracteres no númericos" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUser: string;

  @Column()
  @IsDate({ message: "Formato de fecha incorrecto" })
  @IsNotEmpty({ message: "Campo Obligatorio" })
  LastUpdate: Date;

  //Relations
  @ManyToOne(() => bienestarestudiantil_citas, (cita) => cita.comentario)
  @JoinColumn({ name: "CitaId", referencedColumnName: "CitaId" })
  CitaId: bienestarestudiantil_citas;
}

export default routes;


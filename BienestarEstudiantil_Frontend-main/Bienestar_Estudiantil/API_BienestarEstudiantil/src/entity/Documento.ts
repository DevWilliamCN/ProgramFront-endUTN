import {
  Binary,
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import SolicitudCita, {
  bienestarestudiantil_solicitudescitas,
} from "./SolicitudCita";
import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";

@Entity()
export class bienestarestudiantil_documentos {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "ID Requerido" })
  DocumentoId: number;

  @Column()
  @Max(100, { message: "Ingrese un maximo de 100 caracteres" })
  @IsNotEmpty({ message: "Nombre Requerido" })
  @IsString({ message: "Inserte valores alfanumericos" })
  Nombre: string;

  @Column()
  @Max(100, { message: "Ingrese un maximo de 100 caracteres" })
  @IsNotEmpty({ message: "Tipo de Documento Requerido" })
  @IsString({ message: "Ingrese Caracteres Alafanumericos" })
  TipoDocumento: string;

  @Column()
  @IsNotEmpty({ message: "Documento Requerido" })
  Documento: string;

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
    () => bienestarestudiantil_solicitudescitas,
    (solicitud) => solicitud.documento
  )
  @JoinColumn({
    name: "SolicitudId",
    referencedColumnName: "SolicitudId",
  })
  solicitud: bienestarestudiantil_solicitudescitas;
}

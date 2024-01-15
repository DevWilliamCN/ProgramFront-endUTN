import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { bienestarestudiantil_estudiantes } from "./Estudiante";
import { bienestarestudiantil_profesionales } from "./Profesional";
import routes, { bienestarestudiantil_formularios } from "./Formulario";
import { bienestarestudiantil_citas } from "./Cita";
import { bienestarestudiantil_documentos } from "./Documento";

@Entity()
export class bienestarestudiantil_solicitudescitas {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Ingrese un id de Solicitud" })
  SolicitudId: number;

  @Column({ unique: true })
  @IsNotEmpty({ message: "No se ingreso un id de estudiante" })
  @Max(20, {
    message: "Id de estudiante debe de contener un maximo de 20 caracteres",
  })
  EstudianteId: string;

  @Column()
  @IsNotEmpty({ message: "No se asignó una fecha y hora de solicitud" })
  @IsDate({ message: "La fecha y hora no se encuentran en un formato valido" })
  FechaHora: Date;

  @Column()
  @IsNotEmpty({ message: "Ingrese un asunto" })
  @Max(200, { message: "Limite excedido sobre 200 caracteres" })
  @IsString({ message: "El asunto no debe de contener caracteres especiales" })
  Asunto: string;

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
    () => bienestarestudiantil_estudiantes,
    (estudiante) => estudiante.Solicitud
  )
  @JoinColumn({ name: "EstudianteId", referencedColumnName: "Identificacion" })
  estudiante: bienestarestudiantil_estudiantes;

  @ManyToOne(
    () => bienestarestudiantil_profesionales,
    (profesional) => profesional.Solicitud
  )
  @JoinColumn({ name: "ProfesionalId", referencedColumnName: "Identificacion" })
  profesional: bienestarestudiantil_profesionales;

  @ManyToOne(
    () => bienestarestudiantil_formularios,
    (formulario) => formulario.Solicitud
  )
  @JoinColumn({ name: "FormularioId", referencedColumnName: "FormularioId" })
  formulario: bienestarestudiantil_formularios;

  @OneToOne(() => bienestarestudiantil_citas, (cita) => cita.solicitudCitaId)
  cita: bienestarestudiantil_citas;

  @OneToMany(
    () => bienestarestudiantil_documentos,
    (documento) => documento.solicitud
  )
  documento: bienestarestudiantil_documentos[];
}

export default routes;

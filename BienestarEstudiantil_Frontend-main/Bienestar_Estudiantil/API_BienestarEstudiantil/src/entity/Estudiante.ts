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
import routes from "../routes";
import { bienestarestudiantil_personas } from "./Persona";
import { bienestarestudiantil_boletasmatricula } from "./BoletaMatricula";
import SolicitudCita, {
  bienestarestudiantil_solicitudescitas,
} from "./SolicitudCita";

@Entity()
export class bienestarestudiantil_estudiantes {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsInt({ message: "Inserte un valor númerico" })
  EstudianteId: number;

  @Column({ unique: true })
  @Max(20, { message: "Inserte un maximo de 20 caracteres" })
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({ message: "Inserte unicamente valores alfanumericos" })
  Identificacion: string;

  @Column({ nullable: false })
  @Max(50, { message: "Ingrese un máximo de 50 caracteres" })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  @IsString({ message: "Inserte valores alfanumericos" })
  AyudaFamiliar: string;

  @Column({ nullable: false })
  @IsDate({ message: "El dato no se reconoce como una fecha" })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  FechaIngreso: Date;

  @Column({ nullable: false })
  @IsBoolean({ message: "Debe de ingresar valores de verdadero o falso" })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  EstadoTrabajo: boolean;

  @Column({ nullable: false })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  HojaDeSalud: string;

  @Column({ nullable: false })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  DatosAcademicos: string;

  @Column({ nullable: false })
  @IsNotEmpty({ message: "No se colocó nombre de usuario" })
  TituloBachilleratoMedio: string;

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
  @OneToMany(
    () => bienestarestudiantil_solicitudescitas,
    (Solicitud) => Solicitud.estudiante
  )
  Solicitud: bienestarestudiantil_solicitudescitas[];

  @OneToMany(
    () => bienestarestudiantil_boletasmatricula,
    (boleta) => boleta.estudiante,
    {
      nullable: false,
    }
  )
  boleta: bienestarestudiantil_boletasmatricula[];

  @OneToOne(() => bienestarestudiantil_personas, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({
    name: "Identificacion",
    referencedColumnName: "Identificacion",
  })
  persona: bienestarestudiantil_personas;
}
export default routes;

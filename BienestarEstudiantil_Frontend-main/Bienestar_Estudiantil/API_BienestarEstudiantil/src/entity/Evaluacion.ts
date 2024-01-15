import { IsBoolean, IsDate, IsNotEmpty, IsString, Max } from "class-validator";
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
import routes, { bienestarestudiantil_citas } from "./Cita";
import { bienestarestudiantil_referencias } from "./Referencia";

@Entity()
export class bienestarestudiantil_evaluaciones {
  @PrimaryGeneratedColumn()
  @IsNotEmpty({ message: "Campo Requerido" })
  EvaluacionId: number;

  @Column()
  @IsNotEmpty({ message: "Campo Requerido" })
  @IsString({
    message: "El Tipo de Evaluación acepta únicamente valores alfanumericos",
  })
  @Max(50, { message: "Ingrese un maximo de 50 caracteres" })
  TipoEvaluacion: string;

  @Column()
  @IsNotEmpty({ message: "El campo de resultado no debe de estar vacío" })
  @Max(50, {
    message: "El resultado debe de poseer un maximo de 50 caracteres",
  })
  @IsString({ message: "El resultado no acepta caracteres especiales" })
  Resultado: string;

  @Column()
  @IsNotEmpty({ message: "El area referente no debe de estar vació" })
  @IsBoolean({
    message: "El Area debe de contener valores de verdadero o Falso",
  })
  AreaReferida: boolean;

  @Column()
  @IsNotEmpty({ message: "El area referente no debe de estar vació" })
  @IsBoolean({
    message: "El Area debe de contener valores de verdadero o Falso",
  })
  EntidadReferente: boolean;

  @Column()
  @IsNotEmpty({ message: "Los padecimientos no deben de estar vacios" })
  @Max(200, { message: "Debe de ingresar un máximo de 200 caracteres" })
  @IsString({ message: "Ingrese unicamente valores alfanumericos" })
  Padecimientos: string;

  @Column()
  @IsNotEmpty({ message: "Las adecuacions no deben de estar vacias" })
  @Max(200, { message: "Debe de ingresar un máximo de 200 caracteres" })
  @IsString({ message: "Ingrese unicamente valores alfanumericos" })
  Adecuaciones: string;

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
  @OneToOne(() => bienestarestudiantil_citas)
  @JoinColumn({ name: "CitaId", referencedColumnName: "CitaId" })
  cita: bienestarestudiantil_citas;

  @OneToMany(
    () => bienestarestudiantil_referencias,
    (referencia) => referencia.EvaluacionId
  )
  referencia: bienestarestudiantil_referencias[];
}

export default routes;

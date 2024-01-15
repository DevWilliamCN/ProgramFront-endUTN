import { IsDate, IsNotEmpty, IsString, Max } from "class-validator";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import routes from "../routes";
import { bienestarestudiantil_cantones } from "./Canton";

@Entity()
export class bienestarestudiantil_provincias {
  @PrimaryColumn({ unique: true, name: "ProvinciaId" })
  @IsNotEmpty({ message: "Ingrese un id de Provincia" })
  ProvinciaId: number;

  @Column()
  @IsNotEmpty({ message: "No se colocó nombre de la provincia" })
  @IsString({ message: "Inserte valores alfanumericos dentro del nombre" })
  @Max(20, {
    message:
      "Inserte un maximo de 20 caracteres dentro del nombre de la provincia",
  })
  NombreProvincia: string;

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
  @OneToMany(() => bienestarestudiantil_cantones, (canton) => canton.provincia)
  canton: bienestarestudiantil_cantones[];
}
export default routes;

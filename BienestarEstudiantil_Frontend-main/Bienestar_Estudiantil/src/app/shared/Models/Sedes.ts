import { Distritos } from './Distritos';

export interface Sedes {
  SedeId: number;
  NombreSede: string;
  UniversalUniqueIdentifier: string;
  LastUser: string;
  LastUpdate: Date;
  distrito: Distritos;
}

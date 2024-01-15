import { Evaluaciones } from './Evaluaciones';

export interface RefenciasInt {
  ReferenciaId: number;
  Entidad: string;
  AreaReferente: string;
  UniversalUniqueIdentifier: string;
  LastUser: string;
  LastUpdate: Date;
  Evaluacion: Evaluaciones;
}

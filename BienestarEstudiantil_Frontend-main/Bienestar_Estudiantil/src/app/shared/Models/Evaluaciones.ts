import { citas } from './Citas';

export interface Evaluaciones {
  EvaluacionId: number;
  TipoEvaluacion: string;
  Resultado: string;
  AreaReferida: boolean;
  EntidadReferente: boolean;
  Padecimientos: string;
  Adecuaciones: string;
  UniversalUniqueIdentifier: string;
  LastUser: string;
  LastUpdate: Date;
  cita: citas;
}

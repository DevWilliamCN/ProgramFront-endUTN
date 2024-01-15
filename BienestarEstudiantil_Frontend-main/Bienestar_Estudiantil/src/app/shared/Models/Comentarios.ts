import { citas } from './Citas';

export interface Comentarios {
  ComentarioId: number;
  Comentario: string;
  UniversalUniqueIdentifier: string;
  LastUser: string;
  LastUpdate: Date;
  Cita: citas;
}

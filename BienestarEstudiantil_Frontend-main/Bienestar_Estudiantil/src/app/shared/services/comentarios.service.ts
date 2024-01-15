import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Areas } from '../Models/Areas';
import { Comentarios } from '../Models/Comentarios';
@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Comentario[]> {
    return this.http
      .get<Comentario[]>('http://localhost:3000/comentario/getComents/:CitaId')
      .pipe(catchError(this.handlerError));
  }

  handlerError(error: HttpErrorResponse) {
    let mensaje = 'Error desconocido, reporte al adminstrador.';

    if (error?.error) {
      mensaje = error?.error?.mensaje;
    }

    return throwError(() => new Error(mensaje));
  }
}

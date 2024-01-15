import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Evaluaciones } from '../Models/Evaluaciones';
@Injectable({
  providedIn: 'root',
})
export class EvaluacionesService {
  constructor(private http: HttpClient) {}
  getEvaluacion(): Observable<Evaluaciones[]> {
    return this.http
      .get<Evaluaciones[]>('http://localhost:3000/evaluacion/getEvaluacion/11')
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

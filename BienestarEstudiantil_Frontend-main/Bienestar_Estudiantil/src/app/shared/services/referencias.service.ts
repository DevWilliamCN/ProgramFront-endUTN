import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RefenciasInt } from '../Models/Referencias';
@Injectable({
  providedIn: 'root',
})
export class ReferenciasService {
  constructor(private http: HttpClient) {}
  getReferencias(): Observable<RefenciasInt[]> {
    return this.http
      .get<RefenciasInt[]>('http://localhost:3000/referencia/getreferencias')
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

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProfesionalesService {
  constructor(private http: HttpClient) {}
  // getProfesional(): Observable<Profesionales[]> {
  //   return this.http
  //     .get<Profesionales[]>('http://localhost:3000/profesional/getProfesionales')
  //     .pipe(catchError(this.handlerError));
  // }

  handlerError(error: HttpErrorResponse) {
    let mensaje = 'Error desconocido, reporte al adminstrador.';

    if (error?.error) {
      mensaje = error?.error?.mensaje;
    }

    return throwError(() => new Error(mensaje));
  }
}

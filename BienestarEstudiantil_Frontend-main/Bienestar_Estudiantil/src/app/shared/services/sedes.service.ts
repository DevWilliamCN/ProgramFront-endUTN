import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Sedes } from '../Models/Sedes';
@Injectable({
  providedIn: 'root',
})
export class SedesService {
  constructor(private http: HttpClient) {}
  getSedes(): Observable<Sedes[]> {
    return this.http
      .get<Sedes[]>('http://localhost:3000/Sedes/getSedes')
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

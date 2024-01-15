import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { citas } from '../Models/Citas';
@Injectable({
  providedIn: 'root',
})
export class CitasService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<citas[]> {
    return this.http
      .get<citas[]>('http://localhost:3000/cita/getCitas')
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

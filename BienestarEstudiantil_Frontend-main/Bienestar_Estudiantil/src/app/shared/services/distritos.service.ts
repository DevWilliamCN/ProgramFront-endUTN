import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Distritos } from '../Models/Distritos';
@Injectable({
  providedIn: 'root',
})
export class DistritosService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Distritos[]> {
    return this.http
      .get<Distritos[]>('http://localhost:3000/Distritos/getDistritos')
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

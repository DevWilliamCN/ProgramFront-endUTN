import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Cantones } from '../Models/Cantones';
@Injectable({
  providedIn: 'root',
})
export class CantonesService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Cantones[]> {
    return this.http
      .get<Cantones[]>('http://localhost:3000/Cantones/getCantones')
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

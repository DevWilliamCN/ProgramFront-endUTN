import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Areas } from '../Models/Areas';
@Injectable({
  providedIn: 'root',
})
export class AreasService {
  constructor(private http: HttpClient) {}
  getAll(): Observable<Areas[]> {
    return this.http
      .get<Areas[]>('http://localhost:3000/areas/getAreas')
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

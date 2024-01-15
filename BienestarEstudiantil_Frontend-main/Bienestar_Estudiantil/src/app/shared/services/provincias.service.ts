import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Provincias } from '../Models/Provincias';
@Injectable({
  providedIn: 'root',
})
export class ProvinciasService {
  constructor(private http: HttpClient) {}
  getEvaluacion(): Observable<Provincias[]> {
    return this.http
      .get<Provincias[]>('http://localhost:3000/Provincias/getProvincias')
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

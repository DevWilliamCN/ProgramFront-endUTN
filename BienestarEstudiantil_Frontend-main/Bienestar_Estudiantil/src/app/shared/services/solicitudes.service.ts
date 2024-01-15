import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Solicitud } from 'src/app/pages/consultas/solicitudes/solicitudes.component';
import { Observable, catchError, throwError } from 'rxjs';
import { Solicitudes } from '../Models/Solicitudes';

@Injectable({
  providedIn: 'root',
})
export class SolicitudesService {
  constructor(private http: HttpClient) {}
  getSedes(): Observable<Solicitudes[]> {
    return this.http
      .get<Solicitudes[]>('http://localhost:3000/solicitud/getSolicitudes')
      .pipe(catchError(this.handlerError));
  }
  private baseUrl = 'http://localhost:3000/solicitud/getSolicitudes'; // Cambia esto a la URL de tu servidor

  constructor(private http: HttpClient) { }

  getAllSolicitudes(): Observable<Solicitud[]> {
    return this.http.get<Solicitud[]>(`${this.baseUrl}`); // Sustituye 'your-endpoint-for-get-all-solicitudes' con el endpoint correcto en tu API
  handlerError(error: HttpErrorResponse) {
    let mensaje = 'Error desconocido, reporte al adminstrador.';

    if (error?.error) {
      mensaje = error?.error?.mensaje;
    }

    return throwError(() => new Error(mensaje));
  }
}

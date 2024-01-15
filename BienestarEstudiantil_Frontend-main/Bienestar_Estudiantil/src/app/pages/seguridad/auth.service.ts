import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  private apiUrl = 'http://localhost:3005/auth/login';

  constructor(private http: HttpClient) {}

  get isAuthenticated() {
    return this._isAuthenticated.asObservable();
  }

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.apiUrl, { username, password });
}

  logout() {
    // Aquí puedes agregar el código para borrar el token del localStorage o manejar la lógica de cierre de sesión.
    localStorage.removeItem('authToken');
    this._isAuthenticated.next(false);
  }
}

interface AuthResponse {
  token: string;
  // Si hay otros campos que esperas del servidor, puedes agregarlos aquí.
}

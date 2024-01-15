import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { TokenStorageService } from 'src/app/token-storage.service';  // Asegúrate de ajustar la ruta de importación si es necesario

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService // Inyectamos el servicio TokenStorage aquí
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    console.log('Función onSubmit ejecutada');

    if (this.loginForm.invalid) {
        alert('Por favor, rellena todos los campos requeridos.');
        return;
    }
  
    const username = this.loginForm.get('username')?.value;
    console.log(username)
    const password = this.loginForm.get('password')?.value;
    console.log(password)
  
  
    this.authService.login(username, password).subscribe({
      next: response => {
          if (response.token) {
              console.log("Se llegó al token")
              // Guarda el token en el localStorage y navega a la página principal
              localStorage.setItem('authToken', response.token);
              this.router.navigate(['/']);
          } else {
              alert('Autenticación fallida. Inténtalo de nuevo.');
          }
      },
      error: error => {
          if (error.error && error.error.mensaje) {
              alert(error.error.mensaje);
          } else {
              alert('Hubo un error durante la autenticación. Por favor, intenta de nuevo más tarde.');
          }
          console.error('Error durante la autenticación:', error.message || error);
      }
  });
  }
  

  
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeguridadRoutingModule } from './seguridad-routing.module';
import { SeguridadComponent } from './seguridad.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/materialModule';

@NgModule({
  declarations: [SeguridadComponent, LoginComponent],
  imports: [
    CommonModule,
    SeguridadRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class SeguridadModule {}

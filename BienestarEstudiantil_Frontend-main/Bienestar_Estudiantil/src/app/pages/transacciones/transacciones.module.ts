import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransaccionesRoutingModule } from './transacciones-routing.module';
import { TransaccionesComponent } from './transacciones.component';
import { AgendamientoCitaComponent } from './agendamiento-cita/agendamiento-cita.component';
import { AtencionCitaComponent } from './atencion-cita/atencion-cita.component';
import { AddEstudianteComponent } from './add-estudiante/add-estudiante.component';
import { MaterialModule } from 'src/app/materialModule';
import { CombosComponent } from './combos/combos.component';
import { AdminCitaComponent } from './atencion-cita/admin-cita/admin-cita.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TransaccionesComponent,
    AgendamientoCitaComponent,
    AtencionCitaComponent,
    AddEstudianteComponent,
    CombosComponent,
    AdminCitaComponent,
  ],
  imports: [
    CommonModule,
    TransaccionesRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
})
export class TransaccionesModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionesComponent } from './transacciones.component';
import { AtencionCitaComponent } from './atencion-cita/atencion-cita.component';
import { AgendamientoCitaComponent } from './agendamiento-cita/agendamiento-cita.component';
import { AddEstudianteComponent } from './add-estudiante/add-estudiante.component';

const routes: Routes = [
  { path: '', component: TransaccionesComponent },
  { path: 'AtencionCita', component: AtencionCitaComponent },
  { path: 'agendamiento_Cita', component: AgendamientoCitaComponent },
  { path: 'add_Estudiante', component: AddEstudianteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransaccionesRoutingModule {}

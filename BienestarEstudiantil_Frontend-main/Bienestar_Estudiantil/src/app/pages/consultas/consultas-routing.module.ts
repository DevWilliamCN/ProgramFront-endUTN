import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasComponent } from './consultas.component';
import { BitacoraProfesorComponent } from './bitacora-profesor/bitacora-profesor.component';
import { VisualizacionRapidaComponent } from './visualizacion-rapida/visualizacion-rapida.component';

const routes: Routes = [
  { path: '', component: ConsultasComponent },
  { path: 'bitacora_Profesor', component: BitacoraProfesorComponent },
  { path: 'visualizacion_Rapida', component: VisualizacionRapidaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultasRoutingModule {}

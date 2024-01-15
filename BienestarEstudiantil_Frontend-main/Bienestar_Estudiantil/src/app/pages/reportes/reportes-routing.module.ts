import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportesComponent } from './reportes.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [
  { path: '', component: ReportesComponent },
  { path: 'Formularios', component: FormulariosComponent },
  { path: 'Lista_Estudiantes', component: ListaEstudiantesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportesRoutingModule {}

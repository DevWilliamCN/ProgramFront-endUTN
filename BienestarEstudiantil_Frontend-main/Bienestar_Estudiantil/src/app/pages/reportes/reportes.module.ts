import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ReportesRoutingModule } from './reportes-routing.module';
import { ReportesComponent } from './reportes.component';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { MaterialModule } from 'src/app/materialModule';

@NgModule({
  declarations: [
    ReportesComponent,
    ListaEstudiantesComponent,
    FormulariosComponent,
  ],
  imports: [CommonModule, ReportesRoutingModule, MaterialModule],
})
export class ReportesModule {}

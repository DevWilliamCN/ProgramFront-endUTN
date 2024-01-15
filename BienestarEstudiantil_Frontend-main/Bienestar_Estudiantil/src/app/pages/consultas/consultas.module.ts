import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './consultas.component';
import { VisualizacionRapidaComponent } from './visualizacion-rapida/visualizacion-rapida.component';
import { BitacoraProfesorComponent } from './bitacora-profesor/bitacora-profesor.component';
import { MaterialModule } from 'src/app/materialModule';
import { SolicitudesComponent } from './solicitudes/solicitudes.component';

@NgModule({
  declarations: [
    ConsultasComponent,
    VisualizacionRapidaComponent,
    BitacoraProfesorComponent,
    SolicitudesComponent,
  ],
  imports: [CommonModule, ConsultasRoutingModule, MaterialModule],
})
export class ConsultasModule {}

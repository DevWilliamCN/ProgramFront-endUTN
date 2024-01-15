import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantenimientosRoutingModule } from './mantenimientos-routing.module';
import { MantenimientosComponent } from './mantenimientos.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { BoletasMatriculaComponent } from './boletas-matricula/boletas-matricula.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { RecuperarContrasenhaComponent } from './recuperar-contrasenha/recuperar-contrasenha.component';
import { PaginaInformativaPsicologiaComponent } from './pagina-informativa-psicologia/pagina-informativa-psicologia.component';
import { PaginaInformativaPsicopedagogiaComponent } from './pagina-informativa-psicopedagogia/pagina-informativa-psicopedagogia.component';
import { PaginaInformativaOrientacionEstudiantilComponent } from './pagina-informativa-orientacion-estudiantil/pagina-informativa-orientacion-estudiantil.component';
import { AreasAtencionComponent } from './areas-atencion/areas-atencion.component';
import { MaterialModule } from 'src/app/materialModule';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MantenimientosComponent,
    ProfesionalesComponent,
    BoletasMatriculaComponent,
    PaginaPrincipalComponent,
    RecuperarContrasenhaComponent,
    PaginaInformativaPsicologiaComponent,
    PaginaInformativaPsicopedagogiaComponent,
    PaginaInformativaOrientacionEstudiantilComponent,
    AreasAtencionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MantenimientosRoutingModule,
    MaterialModule,
  ],
})
export class MantenimientosModule {}

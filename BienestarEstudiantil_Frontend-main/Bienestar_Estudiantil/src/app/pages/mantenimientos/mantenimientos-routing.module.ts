import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenimientosComponent } from './mantenimientos.component';
import { ProfesionalesComponent } from './profesionales/profesionales.component';
import { BoletasMatriculaComponent } from './boletas-matricula/boletas-matricula.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AreasAtencionComponent } from './areas-atencion/areas-atencion.component';
import { PaginaInformativaOrientacionEstudiantilComponent } from './pagina-informativa-orientacion-estudiantil/pagina-informativa-orientacion-estudiantil.component';
import { PaginaInformativaPsicologiaComponent } from './pagina-informativa-psicologia/pagina-informativa-psicologia.component';
import { PaginaInformativaPsicopedagogiaComponent } from './pagina-informativa-psicopedagogia/pagina-informativa-psicopedagogia.component';
import { RecuperarContrasenhaComponent } from './recuperar-contrasenha/recuperar-contrasenha.component';

const routes: Routes = [
  { path: 'profesionales', component: ProfesionalesComponent },
  { path: 'boletas', component: BoletasMatriculaComponent },
  { path: '', component: PaginaPrincipalComponent },
  { path: 'areas', component: AreasAtencionComponent },
  { path: 'boletas', component: BoletasMatriculaComponent },
  {
    path: 'Info_Orientacion',
    component: PaginaInformativaOrientacionEstudiantilComponent,
  },
  { path: 'Info_Psicologia', component: PaginaInformativaPsicologiaComponent },
  {
    path: 'Info_Psicopedagía',
    component: PaginaInformativaPsicopedagogiaComponent,
  },
  { path: 'recuperarContrasenha', component: RecuperarContrasenhaComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MantenimientosRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/mantenimientos/mantenimientos.module').then(
        (m) => m.MantenimientosModule
      ),
  },
  {
    path: 'seguridad',
    loadChildren: () =>
      import('./pages/seguridad/seguridad.module').then(
        (m) => m.SeguridadModule
      ),
  },
  {
    path: 'transacciones',
    loadChildren: () =>
      import('./pages/transacciones/transacciones.module').then(
        (m) => m.TransaccionesModule
      ),
  },
  {
    path: 'consultas',
    loadChildren: () =>
      import('./pages/consultas/consultas.module').then(
        (m) => m.ConsultasModule
      ),
  },
  {
    path: 'reportes',
    loadChildren: () =>
      import('./pages/reportes/reportes.module').then((m) => m.ReportesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

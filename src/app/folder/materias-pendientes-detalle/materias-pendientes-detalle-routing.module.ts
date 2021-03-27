import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasPendientesDetallePage } from './materias-pendientes-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MateriasPendientesDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriasPendientesDetallePageRoutingModule {}

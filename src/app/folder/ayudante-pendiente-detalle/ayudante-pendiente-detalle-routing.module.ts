import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudantePendienteDetallePage } from './ayudante-pendiente-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: AyudantePendienteDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudantePendienteDetallePageRoutingModule {}

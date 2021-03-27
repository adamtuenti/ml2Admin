import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioPendienteDetallePage } from './usuario-pendiente-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioPendienteDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioPendienteDetallePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosDetallePage } from './usuarios-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosDetallePageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalDetallePage } from './local-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: LocalDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalDetallePageRoutingModule {}

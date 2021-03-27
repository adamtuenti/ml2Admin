import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComentarioDetallePage } from './comentario-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ComentarioDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComentarioDetallePageRoutingModule {}

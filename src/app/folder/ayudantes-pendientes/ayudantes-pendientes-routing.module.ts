import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudantesPendientesPage } from './ayudantes-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: AyudantesPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudantesPendientesPageRoutingModule {}

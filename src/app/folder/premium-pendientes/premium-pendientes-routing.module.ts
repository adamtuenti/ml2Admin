import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PremiumPendientesPage } from './premium-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: PremiumPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PremiumPendientesPageRoutingModule {}

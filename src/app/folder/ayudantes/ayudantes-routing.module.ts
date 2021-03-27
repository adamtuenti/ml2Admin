import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AyudantesPage } from './ayudantes.page';

const routes: Routes = [
  {
    path: '',
    component: AyudantesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AyudantesPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MateriasPendientesPage } from './materias-pendientes.page';

const routes: Routes = [
  {
    path: '',
    component: MateriasPendientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MateriasPendientesPageRoutingModule {}

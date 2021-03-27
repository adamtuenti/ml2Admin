import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocalesRegistradosPage } from './locales-registrados.page';

const routes: Routes = [
  {
    path: '',
    component: LocalesRegistradosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesRegistradosPageRoutingModule {}

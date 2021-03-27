import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MateriasPendientesPageRoutingModule } from './materias-pendientes-routing.module';

import { MateriasPendientesPage } from './materias-pendientes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MateriasPendientesPageRoutingModule
  ],
  declarations: [MateriasPendientesPage]
})
export class MateriasPendientesPageModule {}

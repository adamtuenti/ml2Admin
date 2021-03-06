import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudantesPendientesPageRoutingModule } from './ayudantes-pendientes-routing.module';

import { AyudantesPendientesPage } from './ayudantes-pendientes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    AyudantesPendientesPageRoutingModule
  ],
  declarations: [AyudantesPendientesPage]
})
export class AyudantesPendientesPageModule {}

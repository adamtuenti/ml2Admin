import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudantesPageRoutingModule } from './ayudantes-routing.module';

import { AyudantesPage } from './ayudantes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PipesModule,
    IonicModule,
    AyudantesPageRoutingModule
  ],
  declarations: [AyudantesPage]
})
export class AyudantesPageModule {}

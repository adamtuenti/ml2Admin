import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumPendientesPageRoutingModule } from './premium-pendientes-routing.module';

import { PremiumPendientesPage } from './premium-pendientes.page';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumPendientesPageRoutingModule
  ],
  declarations: [PremiumPendientesPage]
})
export class PremiumPendientesPageModule {}

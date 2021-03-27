import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumPendientesDetallePageRoutingModule } from './premium-pendientes-detalle-routing.module';

import { PremiumPendientesDetallePage } from './premium-pendientes-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumPendientesDetallePageRoutingModule
  ],
  declarations: [PremiumPendientesDetallePage]
})
export class PremiumPendientesDetallePageModule {}

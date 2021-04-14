import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PremiumPendientesDetallePageRoutingModule } from './premium-pendientes-detalle-routing.module';

import { PremiumPendientesDetallePage } from './premium-pendientes-detalle.page';

import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PremiumPendientesDetallePageRoutingModule
  ],
  declarations: [PremiumPendientesDetallePage],
  providers: [EmailComposer],
})
export class PremiumPendientesDetallePageModule {}

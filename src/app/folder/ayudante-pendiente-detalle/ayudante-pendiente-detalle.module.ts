import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AyudantePendienteDetallePageRoutingModule } from './ayudante-pendiente-detalle-routing.module';

import { AyudantePendienteDetallePage } from './ayudante-pendiente-detalle.page';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AyudantePendienteDetallePageRoutingModule
  ],
  declarations: [AyudantePendienteDetallePage],
  providers: [EmailComposer],
})
export class AyudantePendienteDetallePageModule {}

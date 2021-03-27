import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalDetallePageRoutingModule } from './local-detalle-routing.module';

import { LocalDetallePage } from './local-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalDetallePageRoutingModule
  ],
  declarations: [LocalDetallePage]
})
export class LocalDetallePageModule {}

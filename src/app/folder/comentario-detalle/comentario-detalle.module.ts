import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComentarioDetallePageRoutingModule } from './comentario-detalle-routing.module';

import { ComentarioDetallePage } from './comentario-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComentarioDetallePageRoutingModule
  ],
  declarations: [ComentarioDetallePage]
})
export class ComentarioDetallePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuariosDetallePageRoutingModule } from './usuarios-detalle-routing.module';

import { UsuariosDetallePage } from './usuarios-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuariosDetallePageRoutingModule
  ],
  declarations: [UsuariosDetallePage]
})
export class UsuariosDetallePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocalesRegistradosPageRoutingModule } from './locales-registrados-routing.module';

import { LocalesRegistradosPage } from './locales-registrados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocalesRegistradosPageRoutingModule
  ],
  declarations: [LocalesRegistradosPage]
})
export class LocalesRegistradosPageModule {}

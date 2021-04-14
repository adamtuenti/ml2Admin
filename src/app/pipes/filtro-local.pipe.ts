import { Pipe, PipeTransform } from '@angular/core';

import { Locales } from '../models/locales';
@Pipe({
  name: 'filtroLocal'
})
export class FiltroLocalPipe implements PipeTransform {

  transform(locales: Locales[], texto: string): Locales[] {
    if(texto.length === 0){return locales}
      texto=texto.toLocaleLowerCase()
      return locales.filter(locales => {
        return locales.Nombre.toLocaleLowerCase().includes(texto) ||
        locales.Descripcion.toLocaleLowerCase().includes(texto) 
      });
  }

} 
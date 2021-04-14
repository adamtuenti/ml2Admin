import { Pipe, PipeTransform } from '@angular/core';

import { Productos } from '../models/productos';

@Pipe({
  name: 'filtroProductos'
})
export class FiltroProductosPipe implements PipeTransform {

  transform(productos: Productos[], texto: string): Productos[] {
    if(texto.length === 0){return productos}
      texto=texto.toLocaleLowerCase()
      return productos.filter(producto => {
        return producto.Descripcion.toLocaleLowerCase().includes(texto) ||
               producto.Titulo.toLocaleLowerCase().includes(texto) 
      });
  }

}

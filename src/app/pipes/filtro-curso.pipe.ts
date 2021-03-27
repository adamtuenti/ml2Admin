import { Pipe, PipeTransform } from '@angular/core';
import { cursosPendientes } from '../models/cursosPendientes';

@Pipe({
  name: 'filtroCurso'
})
export class FiltroCursoPipe implements PipeTransform {

  transform(cursos: cursosPendientes[], texto: string): cursosPendientes[] {
    if(texto.length ===0){return cursos}
    texto=texto.toLocaleLowerCase()
    return cursos.filter(curso => {
      return curso.NombreMateria.toLocaleLowerCase().includes(texto);
    });
  }

}

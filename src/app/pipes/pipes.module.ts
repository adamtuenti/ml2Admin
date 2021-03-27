import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroCursoPipe } from './filtro-curso.pipe';



@NgModule({
  declarations: [FiltroUsuarioPipe, FiltroCursoPipe],
  exports:[FiltroUsuarioPipe, FiltroCursoPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

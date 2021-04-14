import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltroUsuarioPipe } from './filtro-usuario.pipe';
import { FiltroCursoPipe } from './filtro-curso.pipe'; 
import { FiltroProductosPipe } from './filtro-productos.pipe';
import { FiltroLocalPipe } from './filtro-local.pipe';

@NgModule({
  declarations: [FiltroUsuarioPipe, FiltroCursoPipe, FiltroProductosPipe, FiltroLocalPipe],
  exports:[FiltroUsuarioPipe, FiltroCursoPipe, FiltroProductosPipe, FiltroLocalPipe],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

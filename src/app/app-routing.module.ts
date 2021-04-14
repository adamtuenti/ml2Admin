import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {NoLoginGuard} from './guards/no-login.guard';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'usuarios-pendientes',
    loadChildren: () => import('./folder/usuarios-pendientes/usuarios-pendientes.module').then( m => m.UsuariosPendientesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'ayudantes-pendientes',
    loadChildren: () => import('./folder/ayudantes-pendientes/ayudantes-pendientes.module').then( m => m.AyudantesPendientesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'materias-pendientes',
    loadChildren: () => import('./folder/materias-pendientes/materias-pendientes.module').then( m => m.MateriasPendientesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'usuario-pendiente-detalle/:id',
    loadChildren: () => import('./folder/usuario-pendiente-detalle/usuario-pendiente-detalle.module').then( m => m.UsuarioPendienteDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'ayudante-pendiente-detalle/:id',
    loadChildren: () => import('./folder/ayudante-pendiente-detalle/ayudante-pendiente-detalle.module').then( m => m.AyudantePendienteDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'materias-pendientes-detalle/:id/:usuarioId',
    loadChildren: () => import('./folder/materias-pendientes-detalle/materias-pendientes-detalle.module').then( m => m.MateriasPendientesDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'comentarios',
    loadChildren: () => import('./folder/comentarios/comentarios.module').then( m => m.ComentariosPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'pago',
    loadChildren: () => import('./folder/pago/pago.module').then( m => m.PagoPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'comentario-detalle/:id',
    loadChildren: () => import('./folder/comentario-detalle/comentario-detalle.module').then( m => m.ComentarioDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'premium-pendientes',
    loadChildren: () => import('./folder/premium-pendientes/premium-pendientes.module').then( m => m.PremiumPendientesPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'premium-pendientes-detalle/:id',
    loadChildren: () => import('./folder/premium-pendientes-detalle/premium-pendientes-detalle.module').then( m => m.PremiumPendientesDetallePageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./folder/login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoLoginGuard]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./folder/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'usuarios-detalle/:id',
    loadChildren: () => import('./folder/usuarios-detalle/usuarios-detalle.module').then( m => m.UsuariosDetallePageModule)
  },
  {
    path: 'ayudantes',
    loadChildren: () => import('./folder/ayudantes/ayudantes.module').then( m => m.AyudantesPageModule)
  },
  {
    path: 'materias',
    loadChildren: () => import('./folder/materias/materias.module').then( m => m.MateriasPageModule)
  },
  {
    path: 'locales-registrados',
    loadChildren: () => import('./folder/locales-registrados/locales-registrados.module').then( m => m.LocalesRegistradosPageModule)
  },
  {
    path: 'local-detalle/:id',
    loadChildren: () => import('./folder/local-detalle/local-detalle.module').then( m => m.LocalDetallePageModule)
  },  {
    path: 'productos',
    loadChildren: () => import('./folder/productos/productos.module').then( m => m.ProductosPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./folder/servicios/servicios.module').then( m => m.ServiciosPageModule)
  }






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

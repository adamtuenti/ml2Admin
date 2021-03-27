import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-comentario-detalle',
  templateUrl: './comentario-detalle.page.html',
  styleUrls: ['./comentario-detalle.page.scss'],
})
export class ComentarioDetallePage implements OnInit {
 
  public comentario: Comentarios = new Comentarios();
  usuario:Usuarios = new Usuarios();

  id;
  constructor(private comentarioService: ComentariosService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private usuarioService: UsuarioService
              ) { }

  ngOnInit() {
    
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id = id;
      
      this.comentarioService.getComentario(id).subscribe(res => {this.comentario =res;this.usuarioService.getUsuario(res.Usuario).subscribe(res1 => this.usuario = res1);});
    });

  }

  invisible(){
    this.comentario.Visibilidad = false;
     this.comentarioService.updatetComentario(this.id,this.comentario).then(
       res => {this.router.navigate(['/comentarios'])}
     )
  }


}

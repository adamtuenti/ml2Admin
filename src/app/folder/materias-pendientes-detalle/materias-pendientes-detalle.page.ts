import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-materias-pendientes-detalle',
  templateUrl: './materias-pendientes-detalle.page.html',
  styleUrls: ['./materias-pendientes-detalle.page.scss'],
})
export class MateriasPendientesDetallePage implements OnInit {
  id: string;
  comentarios:Comentarios[] = [];
  public user: Usuarios=new Usuarios();
  public comentario: Comentarios = new Comentarios();

  constructor(private comentariosService: ComentariosService,
              private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private emailComposer: EmailComposer) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      const usuarioId = paramMap.get('usuarioId');
      this.id= id;
      this.comentariosService.getComentario(id).subscribe(res => {this.comentario =res});
      
      this.usuarioService.getUsuario(usuarioId).subscribe(res => {this.user =res});
    });
    this.comentariosService.getComentarios().subscribe(res => {this.comentarios =res}); 
  }

  aceptar(correoUsuario:string,materia:string){
    this.comentario.Visibilidad = false;
   
    this.comentariosService.updatetComentario(this.id,this.comentario).then(
      res => this.router.navigateByUrl("/materias-pendientes")
    )
    .catch(
      err => console.log("error")
    )

    let email = {
    to: correoUsuario,
    attachments: [
      // 'file://img/logo.png',
      // 'res://icon.png',
      // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      // 'file://README.pdf'
    ],
    subject: 'Categoría agregada',
    body: 'Acabamos de añadir la categoria que solicitaste ('+materia+')',
    isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);
    }

}

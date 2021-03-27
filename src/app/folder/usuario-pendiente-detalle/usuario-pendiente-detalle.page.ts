import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-usuario-pendiente-detalle',
  templateUrl: './usuario-pendiente-detalle.page.html',
  styleUrls: ['./usuario-pendiente-detalle.page.scss'],
})
export class UsuarioPendienteDetallePage implements OnInit {

  public user: Usuarios=new Usuarios();
  id: string;
  constructor(private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private emailComposer: EmailComposer
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id= id;
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res; console.log(res); console.log('aqui')});
    });
  }

  aceptar(){
    // this.user.Estado = 'A';
    
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/usuarios-pendientes")
    )
    .catch(
      err => console.log("error")
    )

    let email = {
    to: this.user.Correo,
    attachments: [
      // 'file://img/logo.png',
      // 'res://icon.png',
      // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      // 'file://README.pdf'
    ],
    subject: 'Ya eres parte de Tasky!',
    body: 'Acabamos de verificar tus datos y aceptamos tu cuenta en Tasky! :)',
    isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);

  }

  aceptarTemporal(){
    // this.user.Estado = 'A';
    this.user.Premium = true;
    
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/usuarios-pendientes")
    )
    .catch(
      err => console.log("error")
    )

    let email = {
    to: this.user.Correo,
    attachments: [

    ],
    subject: 'Ya tienes tu cuenta de vendedor!',
    body: 'Acabamos de verificar tus datos y aceptamos tu cuenta en Tasky! :)',
    isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);
  }

}

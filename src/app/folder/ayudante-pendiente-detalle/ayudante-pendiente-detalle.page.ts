import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


import { Pagos } from 'src/app/models/pagos';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { PagoService } from 'src/app/services/pago.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-ayudante-pendiente-detalle',
  templateUrl: './ayudante-pendiente-detalle.page.html',
  styleUrls: ['./ayudante-pendiente-detalle.page.scss'],
})
export class AyudantePendienteDetallePage implements OnInit {
 
  public user: Usuarios=new Usuarios();
  public pago: Pagos=new Pagos();
  id;
  constructor(private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private router: Router,
              private pagoService: PagoService,
              private emailComposer: EmailComposer
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id = id;
      
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res;});
      this.pagoService.getPago("XfwGUVknnGmJOGxMIuZA").subscribe(res =>{this.pago = res})
    });
  }

  aceptar(){
    // this.user.AyudantiaAceptada = true;
    this.user.Verificacion = false;

    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/ayudantes-pendientes")
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
    subject: 'Ya tienes tu cuenta de vendedor activa!',
    body: 'En caso de haber tenido productos o locales publicados anteriormente, ahora volverán a estar visibles. :)',
    isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);

  }

}

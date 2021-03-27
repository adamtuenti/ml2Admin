import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-premium-pendientes-detalle',
  templateUrl: './premium-pendientes-detalle.page.html',
  styleUrls: ['./premium-pendientes-detalle.page.scss'],
})
export class PremiumPendientesDetallePage implements OnInit {

  public user: Usuarios=new Usuarios();
  id;
  constructor(private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private emailComposer: EmailComposer,
              private router: Router,
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id = id;
      
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res;});
    });
  }

  aceptar(){

    let email = {
    to: this.user.Correo,
    attachments: [
      // 'file://img/logo.png',
      // 'res://icon.png',
      // 'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      // 'file://README.pdf'
    ],
    subject: 'Listo! Ya tienes la cuenta premium',
    body: 'Acabamos de cambiar el estado de tu cuenta a premium!',
    isHtml: true
    }

    // Send a text message using default options
    this.emailComposer.open(email);

    this.user.EsperaPremium = false;
    this.user.Premium = true;
    this.usuarioService.updateUsuario(this.id,this.user).then(
      res => this.router.navigateByUrl("/premium-pendientes")
    )
    .catch(
      err => console.log("error")
    )
  }

}

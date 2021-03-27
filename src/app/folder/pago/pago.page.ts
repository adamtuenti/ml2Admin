import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';



import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';



import { Ayudantes } from 'src/app/models/ayudantes';
import { AyudantesService } from 'src/app/services/ayudantes.service';

import { Calificaciones } from 'src/app/models/calificaciones';
import { CalificacionesService } from 'src/app/services/calificaciones.service';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

   usuarios:Usuarios[] = [];
   idUsuarios =[]
   ayudantes:Ayudantes[] = [];
   calificaciones: Calificaciones[]=[];
 
  constructor(private activateRoute: ActivatedRoute,
    private alertCtrt: AlertController,
    private usuarioService: UsuarioService,
    private router: Router,
    private calificacionesService: CalificacionesService,
    private ayudantesService: AyudantesService,
    ) { }

  ngOnInit() {

    this.usuarioService.getUsuarios().subscribe(res => {this.usuarios = res;});
    this.ayudantesService.getAyudantes().subscribe(res => {this.ayudantes = res;});
    this.calificacionesService.getCalificaciones().subscribe(res => {this.calificaciones = res})


 
  }



  // PremiumTemporal(){
  //   for(let index =0;index < this.usuarios.length; index ++){
  //     if(this.usuarios[index].Estado == 'A'){
  //     this.usuarios[index].Rol = 'Ayudante';
  //     this.usuarios[index].Premium = true;

  //     this.usuarioService.updateUsuario(this.usuarios[index].id,this.usuarios[index])
  //     }
  //   }
  // }

  // actualizar(){
  //   for(let index =0;index < this.usuarios.length; index ++){
  //     this.usuarios[index].Anuncio = true;
  //     this.usuarioService.updateUsuario(this.usuarios[index].id,this.usuarios[index])
  //   }
  // }

  actualizarRol(){


    for(let index =0;index < this.usuarios.length; index ++){
      this.usuarios[index].Vendedor = false;
      this.usuarios[index].Premium = false;
      this.usuarioService.updateUsuario(this.usuarios[index].id,this.usuarios[index])
    }
  }


  async alert() {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Esponja enloqueciste?",
     message:"Ocultar todas las publicaciones, locales y productos, setear vendedor = false.",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elminar',
          handler: (data) => {
            this.actualizarRol()                
          }
        }
      ]
    });
    await alert.present();
  }

}

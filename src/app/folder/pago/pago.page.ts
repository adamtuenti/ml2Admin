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

import { Variables } from 'src/app/models/variables';
import { VariablesService } from 'src/app/services/variables.service';

import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';

import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';


import { Servicios } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicios.service';


import { LoadingController } from '@ionic/angular';

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
   variables : Variables = new Variables();
   locales: Locales[] = [];
   productos: Productos[] = [];
   loading: HTMLIonLoadingElement;
   servicios : Servicios[] = [];
 
  constructor(private activateRoute: ActivatedRoute,
    private alertCtrt: AlertController,
    private usuarioService: UsuarioService,
    private router: Router,
    private calificacionesService: CalificacionesService,
    private ayudantesService: AyudantesService,
    private variablesService: VariablesService,
    private localesService: LocalesService,
    private productosService: ProductosService,
    public loadingController: LoadingController,
    private servicioService: ServiciosService,
    ) { }

  ngOnInit() {
    this.variablesService.getVariable('wCIVneApMUwcOvDwIneJ').subscribe(res=> {this.variables = res;});
    this.usuarioService.getUsuarios().subscribe(res => {this.usuarios = res;});
    this.ayudantesService.getAyudantes().subscribe(res => {this.ayudantes = res;});
    this.calificacionesService.getCalificaciones().subscribe(res => {this.calificaciones = res});
    this.localesService.getLocales().subscribe(res => this.locales = res);
    this.productosService.getProductos().subscribe(res=> {this.productos = res;});
    this.servicioService.getServicios().subscribe(res=> {this.servicios = res;});


 
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

  async alertVendedores() {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Esponja enloqueciste?",
     message:"Cambiar rol todos a Usuarios: vendedor:false y premium:false",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Actualizar',
          handler: (data) => {
            this.actualizarVendedores()                
          }
        }
      ]
    });
    await alert.present();
  }

  async presentLoading(mensaje: string) {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: mensaje,
      //duration: 2000
    });
    return this.loading.present();
  }


  actualizarVendedores(){

    // this.presentLoading("Actualizando rol de vendedores...");
    for(let index =0;index < this.usuarios.length; index ++){

      this.usuarios[index].Vendedor = false;
      this.usuarios[index].Premium = false;

      this.usuarioService.updateUsuario(this.usuarios[index].id,this.usuarios[index])

    }
    // this.loading.dismiss();

  }

  async alertLocales(){
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Esponja enloqueciste?",
     message:"Ocultar los locales, los productos y los servicios?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Actualizar',
          handler: (data) => {
            this.actualizarLocales();                
          }
        }
      ]
    });
    await alert.present();

  }

  actualizarLocales(){

    // this.presentLoading("Ocultando los locales...");
    for(let index =0;index < this.locales.length; index ++){

      this.locales[index].Visibilidad = false;

      this.localesService.updateLocal(this.locales[index].id,this.locales[index])

    }
    // this.loading.dismiss();
    this.actualizarProductos();

  }

  actualizarProductos(){

    // this.presentLoading("Ocultando los productos...");

    for(let index =0;index < this.productos.length; index ++){

      this.productos[index].Visibilidad = false;

      this.productosService.updateProducto(this.productos[index].id,this.productos[index])

    }
    this.actualizarServicios();
    // this.loading.dismiss();

  }

  actualizarServicios(){
    for(let index =0;index < this.servicios.length; index ++){

      this.servicios[index].Visibilidad = false;

      this.servicioService.updateServicio(this.servicios[index].id,this.servicios[index])

    }
    
  }

}

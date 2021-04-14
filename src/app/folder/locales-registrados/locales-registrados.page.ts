import { Component, OnInit } from '@angular/core';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-locales-registrados',
  templateUrl: './locales-registrados.page.html',
  styleUrls: ['./locales-registrados.page.scss'],
})
export class LocalesRegistradosPage implements OnInit {
  
  locales: Locales[] = [];
  textoBuscar = '';

  constructor(private localesService: LocalesService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.localesService.getLocales().subscribe(res => this.locales = res);
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar este local?",
    buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            //console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Elminar',
          handler: (data) => {
            this.remove(id)                  
          }
        }
      ]
    });
    await alert.present();
  }
  remove(local){
    local.Visibilidad = false;
    this.localesService.updateLocal(local.id,local);
  }

}

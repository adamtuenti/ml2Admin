import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Productos[] = [];
  textoBuscar = '';

  constructor(private productosService: ProductosService,
              private alertCtrt: AlertController) { }

  ngOnInit() {
    this.productosService.getProductos().subscribe(res=> {this.productos = res;});
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }


  async alert(id) {
    const alert = await this.alertCtrt.create({
     cssClass: 'my-custom-class',
     header: "¿Desea eliminar este producto?",
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
  remove(producto){
    producto.Visibilidad = false;
    this.productosService.updateProducto(producto.id,producto);
  }

}

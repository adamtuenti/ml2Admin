import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Productos } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-ayudantes',
  templateUrl: './ayudantes.page.html',
  styleUrls: ['./ayudantes.page.scss'],
})
export class AyudantesPage implements OnInit {

  textoBuscar = '';
  usuarios:Usuarios[] = [];
  constructor(private usuarioService: UsuarioService,
              private productosService: ProductosService,) { }
  ayudantes: Usuarios[] = [];
  productos: Productos[] = [];
  vendedores: Usuarios[] = [];

  ngOnInit() {
    
    this.productosService.getProductos().subscribe(res=> {this.productos = res;this.obtenerUsuarios();});
  }

  obtenerUsuarios(){
    this.usuarioService.getUsuarios().subscribe(res => {this.usuarios = res;this.obtenerVendedores()});
  }

  contarRepetidos(elemento, arreglo){

    var numero = 0;
    for(var i=0;i<arreglo.length;i++){
      if(elemento == arreglo[i]){
        numero = numero + 1
      }

    }
    return numero
  }

  obtenerVendedores(){
    var array = [];
    var todos = []
    for(var i=0;i<this.productos.length;i++){
      var user = this.productos[i].Vendedor;
      if(array.includes(user)){
        todos.push(user)

      }else{
        array.push(user)
        todos.push(user)
      }

    }

    for(var i=0;i<this.usuarios.length;i++){
      if(array.includes(this.usuarios[i].id)){
        var numero = this.contarRepetidos(this.usuarios[i].id, todos)
        this.usuarios[i].Cantidad = numero
        this.vendedores.push(this.usuarios[i])
      }

    }
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

  // listaAyudantes(){
  //   for(var i=0;i<this.usuarios.length;i++){
  //     if(this.usuarios[i].Rol == 'Ayudante'){
  //       if(this.ayudantes.includes(this.usuarios[i])){

  //       }else{
  //         this.ayudantes.push(this.usuarios[i]);
  //       }
        
  //     }
  //   }
  // }

}

import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ayudantes',
  templateUrl: './ayudantes.page.html',
  styleUrls: ['./ayudantes.page.scss'],
})
export class AyudantesPage implements OnInit {

  textoBuscar = '';
  usuarios:Usuarios[] = [];
  constructor(private usuarioService: UsuarioService) { }
  ayudantes:Usuarios[] = [];

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res => {this.usuarios = res;});
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

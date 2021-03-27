import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-pendientes',
  templateUrl: './usuarios-pendientes.page.html',
  styleUrls: ['./usuarios-pendientes.page.scss'],
})
export class UsuariosPendientesPage implements OnInit {
  usuarios:Usuarios[] = [];
  textoBuscar = '';
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
  }
  
  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}

import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-ayudantes-pendientes',
  templateUrl: './ayudantes-pendientes.page.html',
  styleUrls: ['./ayudantes-pendientes.page.scss'],
})
export class AyudantesPendientesPage implements OnInit {
  textoBuscar = '';
  usuarios:Usuarios[] = [];
  constructor(private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe(res => this.usuarios = res);
  }

  buscar(event){
    const texto = event.target.value
    this.textoBuscar=texto;
  }

}

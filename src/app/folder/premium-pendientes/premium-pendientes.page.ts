import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-premium-pendientes',
  templateUrl: './premium-pendientes.page.html',
  styleUrls: ['./premium-pendientes.page.scss'],
})
export class PremiumPendientesPage implements OnInit {
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


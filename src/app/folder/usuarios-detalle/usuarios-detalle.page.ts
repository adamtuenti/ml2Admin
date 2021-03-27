import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios-detalle',
  templateUrl: './usuarios-detalle.page.html',
  styleUrls: ['./usuarios-detalle.page.scss'],
})
export class UsuariosDetallePage implements OnInit {

  public user: Usuarios=new Usuarios();
  id: string;
  constructor(private usuarioService: UsuarioService,
    private activateRoute: ActivatedRoute,
    private router: Router
              ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id= id;
      this.usuarioService.getUsuario(id).subscribe(res => {this.user =res;});
    });
  }

  


}
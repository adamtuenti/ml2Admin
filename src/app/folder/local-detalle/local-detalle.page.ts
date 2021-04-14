import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-local-detalle',
  templateUrl: './local-detalle.page.html',
  styleUrls: ['./local-detalle.page.scss'],
})
export class LocalDetallePage implements OnInit {

  public user: Usuarios = new Usuarios();
  public local: Locales = new Locales();
  idUser;
  id: string;

  constructor(private usuarioService: UsuarioService,
              private activateRoute: ActivatedRoute,
              private localesService: LocalesService,
              private router: Router
                        ) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {  
      const id = paramMap.get('id');
      this.id= id;
      this.localesService.getLocal(id).subscribe(res => {this.local = res;this.usuarioService.getUsuario(res.Usuario).subscribe(res1 => {this.user =res1;this.idUser = res.Usuario;});});
    });
  }

}

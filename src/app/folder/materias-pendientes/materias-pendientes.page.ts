import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';


@Component({
  selector: 'app-materias-pendientes',
  templateUrl: './materias-pendientes.page.html',
  styleUrls: ['./materias-pendientes.page.scss'],
})
export class MateriasPendientesPage implements OnInit {
  comentarios:Comentarios[] = [];
  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosService.getComentarios().subscribe(res => {this.comentarios = res;console.log(this.comentarios)});
  }
}

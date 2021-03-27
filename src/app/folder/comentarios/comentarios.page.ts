import { Component, OnInit } from '@angular/core';
import { Comentarios } from 'src/app/models/comentarios';
import { ComentariosService } from 'src/app/services/comentarios.service';

@Component({
  selector: 'comentarios',
  templateUrl: './comentarios.page.html',
  styleUrls: ['./comentarios.page.scss'],
})
export class ComentariosPage implements OnInit {

  comentarios:Comentarios[] = [];
  constructor(private comentariosService: ComentariosService) { }

  ngOnInit() {
    this.comentariosService.getComentarios().subscribe(res => {this.comentarios = res;console.log(this.comentarios)});
  }

}
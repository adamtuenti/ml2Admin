import { Component, OnInit } from '@angular/core';

import { Servicios } from 'src/app/models/servicios';
import { ServiciosService } from 'src/app/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.page.html',
  styleUrls: ['./servicios.page.scss'],
})
export class ServiciosPage implements OnInit {

  servicios : Servicios[] = [];

  constructor(private servicioService: ServiciosService,) { }

  ngOnInit() {
    this.servicioService.getServicios().subscribe(res=> {this.servicios = res;});
  }

}

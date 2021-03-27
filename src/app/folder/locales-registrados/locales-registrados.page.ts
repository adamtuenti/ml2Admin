import { Component, OnInit } from '@angular/core';
import { Locales } from 'src/app/models/locales';
import { LocalesService } from 'src/app/services/locales.service';

@Component({
  selector: 'app-locales-registrados',
  templateUrl: './locales-registrados.page.html',
  styleUrls: ['./locales-registrados.page.scss'],
})
export class LocalesRegistradosPage implements OnInit {
  
  locales: Locales[] = [];

  constructor(private localesService: LocalesService) { }

  ngOnInit() {
    this.localesService.getLocales().subscribe(res => this.locales = res);
  }

}

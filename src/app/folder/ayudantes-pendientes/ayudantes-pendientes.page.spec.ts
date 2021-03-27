import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyudantesPendientesPage } from './ayudantes-pendientes.page';

describe('AyudantesPendientesPage', () => {
  let component: AyudantesPendientesPage;
  let fixture: ComponentFixture<AyudantesPendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudantesPendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyudantesPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

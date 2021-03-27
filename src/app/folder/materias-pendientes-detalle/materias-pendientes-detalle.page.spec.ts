import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriasPendientesDetallePage } from './materias-pendientes-detalle.page';

describe('MateriasPendientesDetallePage', () => {
  let component: MateriasPendientesDetallePage;
  let fixture: ComponentFixture<MateriasPendientesDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasPendientesDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriasPendientesDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

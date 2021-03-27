import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyudantePendienteDetallePage } from './ayudante-pendiente-detalle.page';

describe('AyudantePendienteDetallePage', () => {
  let component: AyudantePendienteDetallePage;
  let fixture: ComponentFixture<AyudantePendienteDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudantePendienteDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyudantePendienteDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

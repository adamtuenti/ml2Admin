import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsuarioPendienteDetallePage } from './usuario-pendiente-detalle.page';

describe('UsuarioPendienteDetallePage', () => {
  let component: UsuarioPendienteDetallePage;
  let fixture: ComponentFixture<UsuarioPendienteDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioPendienteDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioPendienteDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

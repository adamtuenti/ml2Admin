import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MateriasPendientesPage } from './materias-pendientes.page';

describe('MateriasPendientesPage', () => {
  let component: MateriasPendientesPage;
  let fixture: ComponentFixture<MateriasPendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MateriasPendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MateriasPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

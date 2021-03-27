import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AyudantesPage } from './ayudantes.page';

describe('AyudantesPage', () => {
  let component: AyudantesPage;
  let fixture: ComponentFixture<AyudantesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AyudantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AyudantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

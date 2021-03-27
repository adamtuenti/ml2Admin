import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalDetallePage } from './local-detalle.page';

describe('LocalDetallePage', () => {
  let component: LocalDetallePage;
  let fixture: ComponentFixture<LocalDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

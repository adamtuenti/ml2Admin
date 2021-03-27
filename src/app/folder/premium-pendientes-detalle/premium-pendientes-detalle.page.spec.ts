import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremiumPendientesDetallePage } from './premium-pendientes-detalle.page';

describe('PremiumPendientesDetallePage', () => {
  let component: PremiumPendientesDetallePage;
  let fixture: ComponentFixture<PremiumPendientesDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumPendientesDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumPendientesDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

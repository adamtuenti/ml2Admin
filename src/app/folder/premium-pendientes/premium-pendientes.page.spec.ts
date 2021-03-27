import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PremiumPendientesPage } from './premium-pendientes.page';

describe('PremiumPendientesPage', () => {
  let component: PremiumPendientesPage;
  let fixture: ComponentFixture<PremiumPendientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremiumPendientesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PremiumPendientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

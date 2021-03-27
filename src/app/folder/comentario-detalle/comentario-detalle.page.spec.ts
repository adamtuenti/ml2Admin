import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ComentarioDetallePage } from './comentario-detalle.page';

describe('ComentarioDetallePage', () => {
  let component: ComentarioDetallePage;
  let fixture: ComponentFixture<ComentarioDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentarioDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ComentarioDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalesRegistradosPage } from './locales-registrados.page';

describe('LocalesRegistradosPage', () => {
  let component: LocalesRegistradosPage;
  let fixture: ComponentFixture<LocalesRegistradosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalesRegistradosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalesRegistradosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

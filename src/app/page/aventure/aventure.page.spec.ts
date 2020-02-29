import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AventurePage } from './aventure.page';

describe('AventurePage', () => {
  let component: AventurePage;
  let fixture: ComponentFixture<AventurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AventurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AventurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

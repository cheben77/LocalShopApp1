import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GeoAventurePage } from './geo-aventure.page';

describe('GeoAventurePage', () => {
  let component: GeoAventurePage;
  let fixture: ComponentFixture<GeoAventurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoAventurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeoAventurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

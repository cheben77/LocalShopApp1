import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PartenairesMapsPage } from './partenaires-maps.page';

describe('PartenairesMapsPage', () => {
  let component: PartenairesMapsPage;
  let fixture: ComponentFixture<PartenairesMapsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenairesMapsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PartenairesMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

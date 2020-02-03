import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { GeoCatchingPage } from './geoCatching.page';


describe('GeoCatchingPage', () => {
  let component: GeoCatchingPage;
  let fixture: ComponentFixture<GeoCatchingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GeoCatchingPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GeoCatchingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

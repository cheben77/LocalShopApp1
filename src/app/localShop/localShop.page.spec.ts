import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LocalShopPage } from './localShop.page';

describe('LocalShopPage', () => {
  let component: LocalShopPage;
  let fixture: ComponentFixture<LocalShopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LocalShopPage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LocalShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

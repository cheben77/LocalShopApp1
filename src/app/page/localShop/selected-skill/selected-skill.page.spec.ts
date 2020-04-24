import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSkillPage } from './selected-skill.page';

describe('SelectedSkillPage', () => {
  let component: SelectedSkillPage;
  let fixture: ComponentFixture<SelectedSkillPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedSkillPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSkillPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

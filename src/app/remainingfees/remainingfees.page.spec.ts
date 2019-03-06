import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingfeesPage } from './remainingfees.page';

describe('RemainingfeesPage', () => {
  let component: RemainingfeesPage;
  let fixture: ComponentFixture<RemainingfeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingfeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingfeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

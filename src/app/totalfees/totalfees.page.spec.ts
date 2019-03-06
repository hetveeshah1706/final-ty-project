import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfeesPage } from './totalfees.page';

describe('TotalfeesPage', () => {
  let component: TotalfeesPage;
  let fixture: ComponentFixture<TotalfeesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalfeesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalfeesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

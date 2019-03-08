import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfOpenPage } from './pdf-open.page';

describe('PdfOpenPage', () => {
  let component: PdfOpenPage;
  let fixture: ComponentFixture<PdfOpenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfOpenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfOpenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamresultPage } from './examresult.page';

describe('ExamresultPage', () => {
  let component: ExamresultPage;
  let fixture: ComponentFixture<ExamresultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamresultPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamresultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

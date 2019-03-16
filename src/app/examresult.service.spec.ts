import { TestBed } from '@angular/core/testing';

import { ExamresultService } from './examresult.service';

describe('ExamresultService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamresultService = TestBed.get(ExamresultService);
    expect(service).toBeTruthy();
  });
});

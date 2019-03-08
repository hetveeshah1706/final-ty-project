import { TestBed } from '@angular/core/testing';

import { DailyworkService } from './dailywork.service';

describe('DailyworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DailyworkService = TestBed.get(DailyworkService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ForgetpassService } from './forgetpass.service';

describe('ForgetpassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ForgetpassService = TestBed.get(ForgetpassService);
    expect(service).toBeTruthy();
  });
});

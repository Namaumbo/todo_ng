import { TestBed } from '@angular/core/testing';

import { PracService } from './prac.service';

describe('PracService', () => {
  let service: PracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { UfoService } from './ufo.service';

describe('UfoService', () => {
  let service: UfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

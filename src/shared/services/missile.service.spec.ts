import { TestBed } from '@angular/core/testing';

import { MissileService } from './missile.service';

describe('MissileService', () => {
  let service: MissileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

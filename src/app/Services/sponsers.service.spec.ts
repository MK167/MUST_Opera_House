import { TestBed } from '@angular/core/testing';

import { SponsersService } from './sponsers.service';

describe('SponsersService', () => {
  let service: SponsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SponsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

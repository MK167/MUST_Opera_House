import { TestBed } from '@angular/core/testing';

import { WorkshopFormService } from './workshop-form.service';

describe('WorkshopFormService', () => {
  let service: WorkshopFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkshopFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

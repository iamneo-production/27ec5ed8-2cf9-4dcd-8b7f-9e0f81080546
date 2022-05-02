import { TestBed } from '@angular/core/testing';

import { CustomerApplicationService } from './customer-application.service';

describe('CustomerApplicationService', () => {
  let service: CustomerApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

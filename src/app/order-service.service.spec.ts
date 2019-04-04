import { TestBed, inject } from '@angular/core/testing';

import { OrderServiceService } from './order-service.service';

describe('OrderServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderServiceService]
    });
  });

  it('should be created', inject([OrderServiceService], (service: OrderServiceService) => {
    expect(service).toBeTruthy();
  }));
});

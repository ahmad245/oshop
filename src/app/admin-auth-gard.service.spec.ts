import { TestBed, inject } from '@angular/core/testing';

import { AdminAuthGardService } from './admin-auth-gard.service';

describe('AdminAuthGardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAuthGardService]
    });
  });

  it('should be created', inject([AdminAuthGardService], (service: AdminAuthGardService) => {
    expect(service).toBeTruthy();
  }));
});

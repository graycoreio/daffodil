import { TestBed, inject } from '@angular/core/testing';

import { MockService } from './mock.service';
import { ProductTestingService } from '@core/product/testing/services/product.testing.service';
import { ProductTestingModule } from '@core/product/testing/product-testing.module';

describe('MockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule
      ],
      providers: [
        MockService
      ]
    });
  });

  it('should be created', inject([MockService], (service: MockService) => {
    expect(service).toBeTruthy();
  }));
});

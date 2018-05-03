import { TestBed, inject } from '@angular/core/testing';

import { MockService } from './mock.service';
import { ProductTestingService } from '../../product/testing/services/product.testing.service';
import { ProductTestingModule } from '../../product/testing/product-testing.module';
import { CartTestingModule } from '../../cart/testing/cart-testing.module';

describe('MockService', () => {

  let service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ProductTestingModule,
        CartTestingModule
      ],
      providers: [
        MockService
      ]
    });

    service = TestBed.get(MockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

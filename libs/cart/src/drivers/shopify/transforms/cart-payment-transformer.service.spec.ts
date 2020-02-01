import { TestBed } from '@angular/core/testing';

import { DaffShopifyCartPaymentTransformerService } from './cart-payment-transformer.service';

describe('DaffShopifyCartPaymentTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffShopifyCartPaymentTransformerService
      ]
    })
  });

  it('should be created', () => {
    const service: DaffShopifyCartPaymentTransformerService = TestBed.get(DaffShopifyCartPaymentTransformerService);
    expect(service).toBeTruthy();
  });
});

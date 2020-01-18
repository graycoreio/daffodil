import { TestBed } from '@angular/core/testing';

import { DaffMagentoCartPaymentTransformerService } from './cart-payment-transformer.service';

describe('DaffMagentoCartPaymentTransformerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartPaymentTransformerService
      ]
    })
  });

  it('should be created', () => {
    const service: DaffMagentoCartPaymentTransformerService = TestBed.get(DaffMagentoCartPaymentTransformerService);
    expect(service).toBeTruthy();
  });
});

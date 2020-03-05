import { TestBed } from '@angular/core/testing';

import {
  DaffCartPaymentFactory
} from '@daffodil/cart/testing';

import { DaffMagentoPaymentMethodInputTransformer } from './payment-method.service';

describe('Driver | Magento | Cart | Transformer | MagentoPaymentMethodInput', () => {
  let service: DaffMagentoPaymentMethodInputTransformer;

  let daffPaymentFactory: DaffCartPaymentFactory;

  let mockDaffPayment;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoPaymentMethodInputTransformer
      ]
    });

    service = TestBed.get(DaffMagentoPaymentMethodInputTransformer);

    daffPaymentFactory = TestBed.get(DaffCartPaymentFactory);

    mockDaffPayment = daffPaymentFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a payment method input', () => {
    let transformedPaymentMethod;
    let method;

    beforeEach(() => {
      method = 'method';

      mockDaffPayment.method = method;

      transformedPaymentMethod = service.transform(mockDaffPayment);
    });

    it('should return an object with the correct values', () => {
      expect(transformedPaymentMethod.code).toEqual(method);
    });
  });
});

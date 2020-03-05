import { TestBed } from '@angular/core/testing';

import {
  MagentoCartPaymentMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartPayment', () => {
  let service: DaffMagentoCartPaymentTransformer;

  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;

  let mockMagentoPaymentMethod;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartPaymentTransformer,
      ]
    });

    service = TestBed.get(DaffMagentoCartPaymentTransformer);

    magentoPaymentMethodFactory = TestBed.get(MagentoCartPaymentMethodFactory);

    mockMagentoPaymentMethod = magentoPaymentMethodFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart payment method', () => {
    let transformedCartPayment;
    let method;

    beforeEach(() => {
      method = 'method';

      mockMagentoPaymentMethod.code = method;

      transformedCartPayment = service.transform(mockMagentoPaymentMethod);
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartPayment.method).toEqual(method);
    });

    it('should set magento_payment_method', () => {
      expect(transformedCartPayment.magento_payment_method).toEqual(mockMagentoPaymentMethod);
    })
  });
});

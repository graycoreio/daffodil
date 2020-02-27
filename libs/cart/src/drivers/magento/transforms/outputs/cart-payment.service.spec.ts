import { TestBed } from '@angular/core/testing';

import { DaffCartPaymentMethod } from '@daffodil/cart';
import {
  DaffCartPaymentFactory,
  MagentoCartPaymentMethodFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';
import { MagentoCartPaymentMethod } from '../../models/outputs/cart-payment-method';

describe('Driver | Magento | Cart | Transformer | MagentoCartPayment', () => {
  let service: DaffMagentoCartPaymentTransformer;

  let daffCartPaymentFactory: DaffCartPaymentFactory;
  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;

  let mockDaffCartPayment: DaffCartPaymentMethod;
  let mockMagentoPaymentMethod: MagentoCartPaymentMethod;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartPaymentTransformer,
      ]
    });

    service = TestBed.get(DaffMagentoCartPaymentTransformer);

    daffCartPaymentFactory = TestBed.get(DaffCartPaymentFactory);
    magentoPaymentMethodFactory = TestBed.get(MagentoCartPaymentMethodFactory);

    mockDaffCartPayment = daffCartPaymentFactory.create();
    mockMagentoPaymentMethod = magentoPaymentMethodFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart payment method', () => {
    let transformedCartPayment;
    let method;
    let passThrough;

    beforeEach(() => {
      method = 'method';
      passThrough = 'passThrough';

      mockMagentoPaymentMethod.code = method;

      transformedCartPayment = service.transform({
        ...mockMagentoPaymentMethod,
        passThrough
      });
    });

    it('should return an object with the correct values', () => {
      expect(transformedCartPayment.method).toEqual(method);
    });

    it('should pass through values not touched by the transformer', () => {
      expect(transformedCartPayment.passThrough).toEqual(passThrough);
    })
  });
});

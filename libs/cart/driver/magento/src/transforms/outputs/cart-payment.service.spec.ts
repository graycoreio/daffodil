import { TestBed } from '@angular/core/testing';

import { MagentoCartPaymentMethodFactory } from '@daffodil/cart/driver/magento/testing';

import { DaffMagentoCartPaymentTransformer } from './cart-payment.service';

describe('Driver | Magento | Cart | Transformer | MagentoCartPayment', () => {
  let service: DaffMagentoCartPaymentTransformer;

  let magentoPaymentMethodFactory: MagentoCartPaymentMethodFactory;

  let mockMagentoPaymentMethod;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartPaymentTransformer,
      ],
    });

    service = TestBed.inject(DaffMagentoCartPaymentTransformer);

    magentoPaymentMethodFactory = TestBed.inject(MagentoCartPaymentMethodFactory);

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

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCartPayment = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCartPayment).toBeNull();
      });
    });
  });
});

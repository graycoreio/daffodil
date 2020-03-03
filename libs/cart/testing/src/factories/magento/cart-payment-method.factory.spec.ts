import { TestBed } from '@angular/core/testing';

import { MagentoCartPaymentMethodFactory } from './cart-payment-method.factory';
import { MagentoCartPaymentMethod } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartPaymentMethodFactory', () => {
  let factory: MagentoCartPaymentMethodFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartPaymentMethodFactory]
    });

    factory = TestBed.get(MagentoCartPaymentMethodFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCartPaymentMethod;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a CartPaymentMethod with all required fields defined', () => {
      expect(result.code).toBeDefined();
      expect(result.title).toBeDefined();
      expect(result.purchase_order_number).toBeDefined();
    });
  });
});

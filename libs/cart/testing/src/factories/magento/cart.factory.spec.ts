import { TestBed } from '@angular/core/testing';

import { MagentoCartFactory } from './cart.factory';
import { MagentoCart } from '@daffodil/cart';

describe('Cart | Testing | Factories | CartFactory', () => {
  let factory: MagentoCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MagentoCartFactory]
    });

    factory = TestBed.get(MagentoCartFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {
    let result: MagentoCart;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Cart with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.applied_coupons).toBeDefined();
      expect(result.items).toBeDefined();
      expect(result.billing_address).toBeDefined();
      expect(result.shipping_addresses).toBeDefined();
      expect(result.available_payment_methods).toBeDefined();
      expect(result.selected_payment_method).toBeDefined();
      expect(result.prices.subtotal_excluding_tax).toBeDefined();
      expect(result.prices.grand_total).toBeDefined();
      expect(result.prices.subtotal_including_tax).toBeDefined();
      expect(result.prices.subtotal_with_discount_excluding_tax).toBeDefined();
      expect(result.prices.applied_taxes).toBeDefined();
      expect(result.prices.discounts).toBeDefined();
      expect(result.email).toBeDefined();
    });
  });
});

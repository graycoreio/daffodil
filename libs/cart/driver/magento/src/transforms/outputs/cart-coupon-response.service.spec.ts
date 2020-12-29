import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
} from '@daffodil/cart';
import {
  MagentoCartItem,
  MagentoCart,
  MagentoCartCoupon
} from '@daffodil/cart/driver/magento';
import {
  MagentoCartFactory,
  MagentoCartItemFactory,
  MagentoCartCouponFactory
} from '@daffodil/cart/driver/magento/testing';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffMagentoCartTransformer } from './cart.service';

describe('Driver | Magento | Cart | Transformer | CartCouponResponse', () => {
  let service: DaffMagentoCartTransformer;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;
  let magentoCouponFactory: MagentoCartCouponFactory;

  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCoupon: MagentoCartCoupon;
  let mockCartItem: MagentoCartItem;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartTransformer
      ]
    });

    service = TestBed.inject(DaffMagentoCartTransformer);

    daffCartFactory = TestBed.inject(DaffCartFactory);
    magentoCartFactory = TestBed.inject(MagentoCartFactory);
    magentoCartItemFactory = TestBed.inject(MagentoCartItemFactory);
    magentoCouponFactory = TestBed.inject(MagentoCartCouponFactory);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockCartItem = magentoCartItemFactory.create();
    mockMagentoCoupon = magentoCouponFactory.create();
    mockMagentoCart.items = [mockCartItem];
    mockMagentoCart.applied_coupons = [mockMagentoCoupon];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform | transforming a cart coupon response', () => {
    let transformedCart;

    describe('when the cart has all its fields defined', () => {
      let id;
      let subtotal;
      let grand_total;

      beforeEach(() => {
        id = 5;
        subtotal = 20;
        grand_total = 20.20;

        mockMagentoCart.id = id;
        mockMagentoCart.prices.subtotal_excluding_tax.value = subtotal;
        mockMagentoCart.prices.grand_total.value = grand_total;

        transformedCart = service.transform(mockMagentoCart);
      });

      it('should return an object with the correct values', () => {
        expect(String(transformedCart.id)).toEqual(String(id));
        expect(transformedCart.subtotal).toEqual(subtotal);
        expect(transformedCart.grand_total).toEqual(grand_total);
      });
    });

    describe('when the argument is null', () => {
      beforeEach(() => {
        transformedCart = service.transform(null);
      });

      it('should return null and not throw an error', () => {
        expect(transformedCart).toBeNull();
      });
    });
  });
});

import { TestBed } from '@angular/core/testing';

import {
  DaffCart,
  MagentoCart,
  MagentoCartCoupon
} from '@daffodil/cart';
import {
  MagentoCartFactory,
  DaffCartFactory,
  MagentoCartItemFactory,
  MagentoCartCouponFactory
} from '@daffodil/cart/testing';

import { DaffMagentoCartTransformer } from './cart.service';
import { DaffMagentoCartItemTransformer } from './cart-item.service';
import { MagentoCartItem } from '../../models/outputs/cart-item';

describe('Driver | Magento | Cart | Transformer | MagentoCart', () => {
  let service: DaffMagentoCartTransformer;

  let daffCartFactory: DaffCartFactory;
  let magentoCartFactory: MagentoCartFactory;
  let magentoCartItemFactory: MagentoCartItemFactory;
  let magentoCouponFactory: MagentoCartCouponFactory;

  let mockDaffCart: DaffCart;
  let mockMagentoCart: MagentoCart;
  let mockMagentoCoupon: MagentoCartCoupon;
  let mockCartItem: MagentoCartItem;

  let cartItemTransformerSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCartTransformer,
        {
          provide: DaffMagentoCartItemTransformer,
          useValue: jasmine.createSpyObj('DaffMagentoCartItemTransformer', ['transform'])
        }
      ]
    });

    service = TestBed.get(DaffMagentoCartTransformer);

    daffCartFactory = TestBed.get(DaffCartFactory);
    magentoCartFactory = TestBed.get(MagentoCartFactory);
    magentoCartItemFactory = TestBed.get(MagentoCartItemFactory);
    magentoCouponFactory = TestBed.get(MagentoCartCouponFactory);

    cartItemTransformerSpy = TestBed.get(DaffMagentoCartItemTransformer);

    mockDaffCart = daffCartFactory.create();
    mockMagentoCart = magentoCartFactory.create();
    mockCartItem = magentoCartItemFactory.create();
    mockMagentoCoupon = magentoCouponFactory.create();
    mockMagentoCart.items = [mockCartItem];
    mockMagentoCart.applied_coupons = [mockMagentoCoupon];

    cartItemTransformerSpy.transform.withArgs(mockCartItem).and.returnValue(mockDaffCart.items[0]);
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

      it('should call the cart item transformer with the cart item', () => {
        expect(cartItemTransformerSpy.transform).toHaveBeenCalledWith(mockCartItem);
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

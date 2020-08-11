import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartFactory,
  DaffCartItemFactory,
  DaffCartAddressFactory,
  DaffCartPaymentFactory,
  DaffCartShippingRateFactory
} from '@daffodil/cart/testing';

import { DaffCartLoadSuccess, DaffCartPlaceOrderSuccess, DaffResolveCartSuccess } from '../../actions/public_api';
import { daffCartReducers, DaffCartReducersState } from '../../reducers/public_api';
import { getCartSelectors } from './cart.selector';
import { DaffCartErrorType } from '../../reducers/errors/cart-error-type.enum';
import { DaffCartErrors } from '../../reducers/errors/cart-errors.type';

describe('Cart | Selector | Cart', () => {
  let store: Store<DaffCartReducersState>;

	let cartFactory: DaffCartFactory;
	let cartItemFactory: DaffCartItemFactory;
  let cartAddressFactory: DaffCartAddressFactory;
  let paymentFactory: DaffCartPaymentFactory;
  let shippingMethodFactory: DaffCartShippingRateFactory;

  let orderId: string;
  let cart: DaffCart;
  let loading: boolean;
	let errors: DaffCartErrors;
	const {
		selectCartLoading,
		selectCartResolved,
    selectCartValue,

		selectCartErrorsObject,
		selectCartErrors,
		selectItemErrors,
		selectBillingAddressErrors,
		selectShippingAddressErrors,
		selectShippingInformationErrors,
		selectShippingMethodsErrors,
		selectPaymentErrors,
    selectPaymentMethodsErrors,
    selectCouponErrors,

		selectCartId,
		selectCartSubtotal,
		selectCartGrandTotal,
		selectCartCoupons,
		selectCartItems,
		selectCartBillingAddress,
		selectCartShippingAddress,
		selectCartPayment,
		selectCartTotals,
		selectCartShippingInformation,
		selectCartAvailableShippingMethods,
    selectCartAvailablePaymentMethods,

		selectIsCartEmpty,
    selectCartItemDiscountedRowTotal,
    selectIsBillingSameAsShipping,

    selectHasBillingAddress,
    selectHasShippingAddress,
    selectHasShippingMethod,
    selectHasPaymentMethod,
    selectCanPlaceOrder
	} = getCartSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
      ]
    });

    store = TestBed.get(Store);

    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    cartAddressFactory = TestBed.get(DaffCartAddressFactory);
    paymentFactory = TestBed.get(DaffCartPaymentFactory);
    shippingMethodFactory = TestBed.get(DaffCartShippingRateFactory);

    orderId = 'id';
    cart = cartFactory.create({
      items: cartItemFactory.createMany(2),
      shipping_address: cartAddressFactory.create(),
      billing_address: cartAddressFactory.create(),
      payment: paymentFactory.create(),
      shipping_information: shippingMethodFactory.create()
    });
    loading = false;
    errors = {
      [DaffCartErrorType.Cart]: [],
      [DaffCartErrorType.Item]: [],
      [DaffCartErrorType.ShippingAddress]: [],
      [DaffCartErrorType.BillingAddress]: [],
      [DaffCartErrorType.ShippingInformation]: [],
      [DaffCartErrorType.ShippingMethods]: [],
      [DaffCartErrorType.Payment]: [],
      [DaffCartErrorType.PaymentMethods]: [],
      [DaffCartErrorType.Coupon]: [],
    };

    store.dispatch(new DaffCartLoadSuccess(cart));
    store.dispatch(new DaffCartPlaceOrderSuccess({
      orderId,
      cartId: cart.id,
    }));
  });

  describe('selectCartValue', () => {
    it('returns cart state', () => {
      const selector = store.pipe(select(selectCartValue));
      const expected = cold('a', {a: cart});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartLoading', () => {
    it('returns loading state', () => {
      const selector = store.pipe(select(selectCartLoading));
      const expected = cold('a', {a: loading});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartResolved', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', {a: false});

      expect(selector).toBeObservable(expected);
    })

    it('it should be true after cart resolution success', () => {
      const selector = store.pipe(select(selectCartResolved));
      const expected = cold('a', {a: true});
      store.dispatch(new DaffResolveCartSuccess(cart));

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrorsObject', () => {
    it('returns cart errors object state', () => {
      const selector = store.pipe(select(selectCartErrorsObject));
      const expected = cold('a', {a: errors});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrors', () => {
    it('returns cart errors state', () => {
      const selector = store.pipe(select(selectCartErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Cart]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectItemErrors', () => {
    it('returns item errors state', () => {
      const selector = store.pipe(select(selectItemErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Item]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectBillingAddressErrors', () => {
    it('returns billing address errors state', () => {
      const selector = store.pipe(select(selectBillingAddressErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.BillingAddress]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingAddressErrors', () => {
    it('returns shipping address errors state', () => {
      const selector = store.pipe(select(selectShippingAddressErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.ShippingAddress]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingInformationErrors', () => {
    it('returns shipping information errors state', () => {
      const selector = store.pipe(select(selectShippingInformationErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.ShippingInformation]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingMethodsErrors', () => {
    it('returns shipping methods errors state', () => {
      const selector = store.pipe(select(selectShippingMethodsErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.ShippingMethods]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentErrors', () => {
    it('returns payment errors state', () => {
      const selector = store.pipe(select(selectPaymentErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Payment]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentMethodsErrors', () => {
    it('returns payment methods errors state', () => {
      const selector = store.pipe(select(selectPaymentMethodsErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.PaymentMethods]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCouponErrors', () => {
    it('returns coupon errors state', () => {
      const selector = store.pipe(select(selectCouponErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Coupon]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartId', () => {
    it('returns cart ID', () => {
      const selector = store.pipe(select(selectCartId));
      const expected = cold('a', {a: cart.id});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotal', () => {
    it('returns cart subtotal', () => {
      const selector = store.pipe(select(selectCartSubtotal));
      const expected = cold('a', {a: cart.subtotal});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartGrandTotal', () => {
    it('returns cart grand total', () => {
      const selector = store.pipe(select(selectCartGrandTotal));
      const expected = cold('a', {a: cart.grand_total});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartCoupons', () => {
    it('returns cart coupons', () => {
      const selector = store.pipe(select(selectCartCoupons));
      const expected = cold('a', {a: cart.coupons});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItems', () => {
    it('returns cart items', () => {
      const selector = store.pipe(select(selectCartItems));
      const expected = cold('a', {a: cart.items});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartBillingAddress', () => {
    it('returns cart billing address', () => {
      const selector = store.pipe(select(selectCartBillingAddress));
      const expected = cold('a', {a: cart.billing_address});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingAddress', () => {
    it('returns cart shipping address', () => {
      const selector = store.pipe(select(selectCartShippingAddress));
      const expected = cold('a', {a: cart.shipping_address});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartPayment', () => {
    it('returns cart payment', () => {
      const selector = store.pipe(select(selectCartPayment));
      const expected = cold('a', {a: cart.payment});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartTotals', () => {
    it('returns cart totals', () => {
      const selector = store.pipe(select(selectCartTotals));
      const expected = cold('a', {a: cart.totals});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingInformation', () => {
    it('returns cart shipping information', () => {
      const selector = store.pipe(select(selectCartShippingInformation));
      const expected = cold('a', {a: cart.shipping_information});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartAvailableShippingMethods', () => {
    it('returns cart available shipping methods', () => {
      const selector = store.pipe(select(selectCartAvailableShippingMethods));
      const expected = cold('a', {a: cart.available_shipping_methods});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartAvailablePaymentMethods', () => {
    it('returns cart available payment methods', () => {
      const selector = store.pipe(select(selectCartAvailablePaymentMethods));
      const expected = cold('a', {a: cart.available_payment_methods});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCartEmpty', () => {
    it('selects whether the cart is empty', () => {
      const selector = store.pipe(select(selectIsCartEmpty));
      const expected = cold('a', {a: cart.items.length === 0});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItemDiscountedRowTotal', () => {
    it('selects the discounted total of the given cart item id', () => {
      const rowTotal = 118.54;
      const discount = 15.10000034;
      const cartItemId = cart.items[0].item_id;
      cart.items[0].row_total = rowTotal;
      cart.items[0].total_discount = discount;
			const selector = store.pipe(select(selectCartItemDiscountedRowTotal, { id: cartItemId }));
      const expected = cold('a', {a: 103.43999966});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsBillingSameAsShipping | selects whether the cart\'s billing and shipping address are the same', () => {
    describe('when the cart has a billing and shipping address', () => {
      describe('and the shipping and billing address are the same', () => {
        beforeEach(() => {
          cart.shipping_address = cart.billing_address;
          store.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return true', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          const expected = cold('a', {a: true});

          expect(selector).toBeObservable(expected);
        });
      });

      describe('and the shipping and billing address are not the same', () => {
        beforeEach(() => {
          cart.shipping_address.street = `${cart.shipping_address.street} ${cart.billing_address.street}`;
          store.dispatch(new DaffCartLoadSuccess(cart));
        });

        it('should return false', () => {
          const selector = store.pipe(select(selectIsBillingSameAsShipping));
          const expected = cold('a', {a: false});

          expect(selector).toBeObservable(expected);
        });
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        cart.shipping_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectIsBillingSameAsShipping));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        cart.billing_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectIsBillingSameAsShipping));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasBillingAddress | selects whether the cart has a billing address', () => {
    describe('when the cart has a billing address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a billing address', () => {
      beforeEach(() => {
        cart.billing_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasBillingAddress));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasShippingAddress | selects whether the cart has a shipping address', () => {
    describe('when the cart has a shipping address', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a shipping address', () => {
      beforeEach(() => {
        cart.shipping_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasShippingAddress));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasShippingMethod | selects whether the cart has a selected shipping method', () => {
    describe('when the cart has a selected shipping method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have a selected shipping method', () => {
      beforeEach(() => {
        cart.shipping_information = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasShippingMethod));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasPaymentMethod | selects whether the cart has a selected payment method', () => {
    describe('when the cart has a selected payment method', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart has a null selected payment method', () => {
      beforeEach(() => {
        cart.payment = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart has a empty string selected payment method', () => {
      beforeEach(() => {
        cart.payment = {method: ''};
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectHasPaymentMethod));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCanPlaceOrder | selects whether the cart has all the required fields for placing an order', () => {
    describe('when the cart has all the required fields for placing an order', () => {
      it('should return true', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when the cart does not have all the required fields for placing an order', () => {
      beforeEach(() => {
        cart.billing_address = null;
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectCanPlaceOrder));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });
});

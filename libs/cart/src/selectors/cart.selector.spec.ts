import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartLoadSuccess } from '../actions';
import { daffCartReducers, DaffCartReducersState } from '../reducers';
import {
  selectCartValue,
  selectCartLoading,
  selectCartErrors,
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
  selectCartAvailablePaymentMethods
} from './cart.selector';


describe('Cart | Selector | Cart', () => {
  let store: Store<DaffCartReducersState>;

  let cartFactory: DaffCartFactory;

  let cart: DaffCart;
  let loading: boolean;
  let errors: string[];

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

    cart = cartFactory.create();
    loading = false;
    errors = [];

    store.dispatch(new DaffCartLoadSuccess(cart));
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

  describe('selectCartErrors', () => {
    it('returns errors state', () => {
      const selector = store.pipe(select(selectCartErrors));
      const expected = cold('a', {a: errors});

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
});

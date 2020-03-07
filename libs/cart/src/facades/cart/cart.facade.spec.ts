import { TestBed } from '@angular/core/testing';

import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffCartCreateSuccess,
  DaffCartItemListSuccess,
  DaffCartBillingAddressLoadSuccess,
  DaffCartShippingAddressLoadSuccess,
  DaffCartPaymentLoadSuccess,
  DaffCartShippingInformationLoadSuccess,
  DaffCartShippingMethodsLoadSuccess,
  DaffCartPaymentMethodsLoadSuccess
} from '@daffodil/cart';

import { DaffCartFacade } from './cart.facade';
import { State, reducers, initialState } from '../../reducers';
import { DaffCartFactory } from '@daffodil/cart/testing';

describe('DaffCartFacade', () => {
  let store: MockStore<{ product: Partial<State> }>;
  let facade: DaffCartFacade;
  let cartFactory: DaffCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(reducers),
        })
      ],
      providers: [
        DaffCartFacade,
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffCartFacade);
    cartFactory = TestBed.get(DaffCartFactory);
  });

  it('should be created', () => {
    const service: DaffCartFacade = TestBed.get(DaffCartFacade);
    expect(service).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the cart is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the cart is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCartLoad());
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('cart$', () => {
    it('should initially be cart with no defined properties', () => {
      const expected = cold('a', { a: initialState.cart});
      expect(facade.cart$).toBeObservable(expected);
    });

    it('should be the cart upon a successful load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.cart$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('cartId$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartId$).toBeObservable(expected);
    });

    it('should be the cart id upon a successful cart creation', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.id});
      store.dispatch(new DaffCartCreateSuccess(cart));
      expect(facade.cartId$).toBeObservable(expected);
    });
  });

  describe('cartSubtotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartSubtotal$).toBeObservable(expected);
    });

    it('should be the cart subtotal upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.subtotal});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.cartSubtotal$).toBeObservable(expected);
    });
  });

  describe('cartGrandTotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartGrandTotal$).toBeObservable(expected);
    });

    it('should be the cart grand total upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.grand_total});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.cartGrandTotal$).toBeObservable(expected);
    });
  });

  describe('cartCoupons$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartCoupons$).toBeObservable(expected);
    });

    it('should be the cart coupons upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.coupons});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.cartCoupons$).toBeObservable(expected);
    });
  });

  describe('cartItems$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartItems$).toBeObservable(expected);
    });

    it('should be the cart items upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.items});
      store.dispatch(new DaffCartItemListSuccess(cart.items));
      expect(facade.cartItems$).toBeObservable(expected);
    });
  });

  describe('cartBillingAddress$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartBillingAddress$).toBeObservable(expected);
    });

    it('should be the cart billing address upon a successful cart billing address load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.billing_address});
      store.dispatch(new DaffCartBillingAddressLoadSuccess(cart.billing_address));
      expect(facade.cartBillingAddress$).toBeObservable(expected);
    });
  });

  describe('cartShippingAddress$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartShippingAddress$).toBeObservable(expected);
    });

    it('should be the cart shipping address upon a successful cart shipping address load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.shipping_address});
      store.dispatch(new DaffCartShippingAddressLoadSuccess(cart.shipping_address));
      expect(facade.cartShippingAddress$).toBeObservable(expected);
    });
  });

  describe('cartPayment$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartPayment$).toBeObservable(expected);
    });

    it('should be the cart payment upon a successful cart payment load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.payment});
      store.dispatch(new DaffCartPaymentLoadSuccess(cart.payment));
      expect(facade.cartPayment$).toBeObservable(expected);
    });
  });

  describe('cartTotals$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartTotals$).toBeObservable(expected);
    });

    it('should be the cart totals upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.cartTotals$).toBeObservable(expected);
    });
  });

  describe('cartShippingInformation$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.cartShippingInformation$).toBeObservable(expected);
    });

    it('should be the cart shipping information upon a successful cart shipping information load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: {
        ...cart.shipping_information,
        address_id: null
      }});
      store.dispatch(new DaffCartShippingInformationLoadSuccess(cart.shipping_information));
      expect(facade.cartShippingInformation$).toBeObservable(expected);
    });
  });

  describe('cartAvailableShippingMethods$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartAvailableShippingMethods$).toBeObservable(expected);
    });

    it('should be the cart available shipping methods upon a successful available shipping methods load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.available_shipping_methods});
      store.dispatch(new DaffCartShippingMethodsLoadSuccess(cart.available_shipping_methods));
      expect(facade.cartAvailableShippingMethods$).toBeObservable(expected);
    });
  });

  describe('cartAvailablePaymentMethods$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartAvailablePaymentMethods$).toBeObservable(expected);
    });

    it('should be the cart available payment methods upon a successful available payment methods load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.available_payment_methods});
      store.dispatch(new DaffCartPaymentMethodsLoadSuccess(cart.available_payment_methods));
      expect(facade.cartAvailablePaymentMethods$).toBeObservable(expected);
    });
  });
});

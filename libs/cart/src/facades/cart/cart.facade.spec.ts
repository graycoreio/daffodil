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
  DaffCartPaymentMethodsLoadSuccess,
  DaffCartItemLoadFailure,
  DaffCartBillingAddressLoadFailure,
  DaffCartShippingAddressLoadFailure,
  DaffCartShippingInformationLoadFailure,
  DaffCartShippingMethodsLoadFailure,
  DaffCartPaymentLoadFailure,
  DaffCartPaymentMethodsLoadFailure
} from '@daffodil/cart';

import { DaffCartFacade } from './cart.facade';
import { DaffCartReducersState, daffCartReducers, initialState } from '../../reducers/public_api';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffCartErrors } from '../../reducers/cart-errors.type';
import { DaffCartErrorType } from '../../reducers/cart-error-type.enum';

describe('DaffCartFacade', () => {
  let store: MockStore<{ product: Partial<DaffCartReducersState> }>;
  let facade: DaffCartFacade;
  let cartFactory: DaffCartFactory;

  let errors: DaffCartErrors;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
      ],
      providers: [
        DaffCartFacade,
      ]
    })

    store = TestBed.get(Store);
    facade = TestBed.get(DaffCartFacade);
    cartFactory = TestBed.get(DaffCartFactory);

    errors = {
      [DaffCartErrorType.Cart]: [],
      [DaffCartErrorType.Item]: [],
      [DaffCartErrorType.ShippingAddress]: [],
      [DaffCartErrorType.BillingAddress]: [],
      [DaffCartErrorType.ShippingInformation]: [],
      [DaffCartErrorType.ShippingMethods]: [],
      [DaffCartErrorType.Payment]: [],
      [DaffCartErrorType.PaymentMethods]: [],
    };
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
    it('should initially be an empty errors object', () => {
      const expected = cold('a', { a: errors});
      expect(facade.errors$).toBeObservable(expected);
    });
  });

  describe('cartErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.cartErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed cart load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartLoadFailure(error));
      expect(facade.cartErrors$).toBeObservable(expected);
    });
  });

  describe('itemErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.itemErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed item load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartItemLoadFailure(error));
      expect(facade.itemErrors$).toBeObservable(expected);
    });
  });

  describe('billingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.billingAddressErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed billing address load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartBillingAddressLoadFailure(error));
      expect(facade.billingAddressErrors$).toBeObservable(expected);
    });
  });

  describe('shippingAddressErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.shippingAddressErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping address load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartShippingAddressLoadFailure(error));
      expect(facade.shippingAddressErrors$).toBeObservable(expected);
    });
  });

  describe('shippingInformationErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.shippingInformationErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping information load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartShippingInformationLoadFailure(error));
      expect(facade.shippingInformationErrors$).toBeObservable(expected);
    });
  });

  describe('shippingMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.shippingMethodsErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed shipping methods load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartShippingMethodsLoadFailure(error));
      expect(facade.shippingMethodsErrors$).toBeObservable(expected);
    });
  });

  describe('paymentErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.paymentErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed payment load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartPaymentLoadFailure(error));
      expect(facade.paymentErrors$).toBeObservable(expected);
    });
  });

  describe('paymentMethodsErrors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.paymentMethodsErrors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed payment methods load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error]});
      store.dispatch(new DaffCartPaymentMethodsLoadFailure(error));
      expect(facade.paymentMethodsErrors$).toBeObservable(expected);
    });
  });

  describe('id$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.id$).toBeObservable(expected);
    });

    it('should be the cart id upon a successful cart creation', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.id});
      store.dispatch(new DaffCartCreateSuccess(cart));
      expect(facade.id$).toBeObservable(expected);
    });
  });

  describe('subtotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.subtotal$).toBeObservable(expected);
    });

    it('should be the cart subtotal upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.subtotal});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.subtotal$).toBeObservable(expected);
    });
  });

  describe('grandTotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.grandTotal$).toBeObservable(expected);
    });

    it('should be the cart grand total upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.grand_total});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.grandTotal$).toBeObservable(expected);
    });
  });

  describe('coupons$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.coupons$).toBeObservable(expected);
    });

    it('should be the cart coupons upon a successful cart load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.coupons});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.coupons$).toBeObservable(expected);
    });
  });

  describe('items$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.items$).toBeObservable(expected);
    });

    it('should be the cart items upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.items});
      store.dispatch(new DaffCartItemListSuccess(cart.items));
      expect(facade.items$).toBeObservable(expected);
    });
  });

  describe('billingAddress$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.billingAddress$).toBeObservable(expected);
    });

    it('should be the cart billing address upon a successful cart billing address load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.billing_address});
      store.dispatch(new DaffCartBillingAddressLoadSuccess(cart.billing_address));
      expect(facade.billingAddress$).toBeObservable(expected);
    });
  });

  describe('shippingAddress$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.shippingAddress$).toBeObservable(expected);
    });

    it('should be the cart shipping address upon a successful cart shipping address load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.shipping_address});
      store.dispatch(new DaffCartShippingAddressLoadSuccess(cart.shipping_address));
      expect(facade.shippingAddress$).toBeObservable(expected);
    });
  });

  describe('payment$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.payment$).toBeObservable(expected);
    });

    it('should be the cart payment upon a successful cart payment load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.payment});
      store.dispatch(new DaffCartPaymentLoadSuccess(cart.payment));
      expect(facade.payment$).toBeObservable(expected);
    });
  });

  describe('totals$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.totals$).toBeObservable(expected);
    });

    it('should be the cart totals upon a successful cart item list', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.totals});
      store.dispatch(new DaffCartLoadSuccess(cart));
      expect(facade.totals$).toBeObservable(expected);
    });
  });

  describe('shippingInformation$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null});
      expect(facade.shippingInformation$).toBeObservable(expected);
    });

    it('should be the cart shipping information upon a successful cart shipping information load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: {
        ...cart.shipping_information,
        address_id: null
      }});
      store.dispatch(new DaffCartShippingInformationLoadSuccess(cart.shipping_information));
      expect(facade.shippingInformation$).toBeObservable(expected);
    });
  });

  describe('availableShippingMethods$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.availableShippingMethods$).toBeObservable(expected);
    });

    it('should be the cart available shipping methods upon a successful available shipping methods load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.available_shipping_methods});
      store.dispatch(new DaffCartShippingMethodsLoadSuccess(cart.available_shipping_methods));
      expect(facade.availableShippingMethods$).toBeObservable(expected);
    });
  });

  describe('availablePaymentMethods$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: []});
      expect(facade.availablePaymentMethods$).toBeObservable(expected);
    });

    it('should be the cart available payment methods upon a successful available payment methods load', () => {
      const cart = cartFactory.create();
      const expected = cold('a', { a: cart.available_payment_methods});
      store.dispatch(new DaffCartPaymentMethodsLoadSuccess(cart.available_payment_methods));
      expect(facade.availablePaymentMethods$).toBeObservable(expected);
    });
  });
});

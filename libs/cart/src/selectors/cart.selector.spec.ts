import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartLoadSuccess } from '../actions/public_api';
import { daffCartReducers, DaffCartReducersState } from '../reducers/public_api';
import { getDaffCartSelectors } from './cart.selector';
import { DaffCartErrorType } from '../reducers/cart-error-type.enum';
import { DaffCartErrors } from '../reducers/cart-errors.type';

describe('Cart | Selector | Cart', () => {
  let store: Store<DaffCartReducersState<DaffCart>>;

  let cartFactory: DaffCartFactory;

  let cart: DaffCart;
  let loading: boolean;
  let errors: DaffCartErrors;

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

    store.dispatch(new DaffCartLoadSuccess(cart));
  });

  describe('selectCartValue', () => {
    it('returns cart state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartValue));
      const expected = cold('a', {a: cart});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartLoading', () => {
    it('returns loading state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartLoading));
      const expected = cold('a', {a: loading});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrorsObject', () => {
    it('returns cart errors object state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartErrorsObject));
      const expected = cold('a', {a: errors});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartErrors', () => {
    it('returns cart errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Cart]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectItemErrors', () => {
    it('returns item errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectItemErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Item]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectBillingAddressErrors', () => {
    it('returns billing address errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectBillingAddressErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.BillingAddress]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingAddressErrors', () => {
    it('returns shipping address errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectShippingAddressErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.ShippingAddress]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingInformationErrors', () => {
    it('returns shipping information errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectShippingInformationErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.ShippingInformation]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingMethodsErrors', () => {
    it('returns shipping methods errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectShippingMethodsErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.ShippingMethods]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentErrors', () => {
    it('returns payment errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectPaymentErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.Payment]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPaymentMethodsErrors', () => {
    it('returns payment methods errors state', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectPaymentMethodsErrors));
      const expected = cold('a', {a: errors[DaffCartErrorType.PaymentMethods]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartId', () => {
    it('returns cart ID', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartId));
      const expected = cold('a', {a: cart.id});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartSubtotal', () => {
    it('returns cart subtotal', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartSubtotal));
      const expected = cold('a', {a: cart.subtotal});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartGrandTotal', () => {
    it('returns cart grand total', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartGrandTotal));
      const expected = cold('a', {a: cart.grand_total});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartCoupons', () => {
    it('returns cart coupons', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartCoupons));
      const expected = cold('a', {a: cart.coupons});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartItems', () => {
    it('returns cart items', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartItems));
      const expected = cold('a', {a: cart.items});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartBillingAddress', () => {
    it('returns cart billing address', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartBillingAddress));
      const expected = cold('a', {a: cart.billing_address});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingAddress', () => {
    it('returns cart shipping address', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartShippingAddress));
      const expected = cold('a', {a: cart.shipping_address});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartPayment', () => {
    it('returns cart payment', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartPayment));
      const expected = cold('a', {a: cart.payment});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartTotals', () => {
    it('returns cart totals', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartTotals));
      const expected = cold('a', {a: cart.totals});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartShippingInformation', () => {
    it('returns cart shipping information', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartShippingInformation));
      const expected = cold('a', {a: cart.shipping_information});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartAvailableShippingMethods', () => {
    it('returns cart available shipping methods', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartAvailableShippingMethods));
      const expected = cold('a', {a: cart.available_shipping_methods});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartAvailablePaymentMethods', () => {
    it('returns cart available payment methods', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectCartAvailablePaymentMethods));
      const expected = cold('a', {a: cart.available_payment_methods});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsCartEmpty', () => {
    it('selects whether the cart is empty', () => {
      const selector = store.pipe(select(getDaffCartSelectors<DaffCart>().selectIsCartEmpty));
      const expected = cold('a', {a: cart.items.length === 0});

      expect(selector).toBeObservable(expected);
    });
  });
});

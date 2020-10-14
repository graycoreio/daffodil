import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart, DaffCartPlaceOrder } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartLoadSuccess, DaffCartPlaceOrderSuccess } from '../../actions/public_api';
import { daffCartReducers, DaffCartReducersState, DaffCartOrderReducerState } from '../../reducers/public_api';
import { getCartOrderSelectors } from './cart-order.selector';
import { DaffLoadingState } from '@daffodil/core/state';

describe('Cart | Selector | CartOrder', () => {
  let store: Store<DaffCartReducersState>;

  let cartFactory: DaffCartFactory;

  let orderId: string;
  let cart: DaffCart;
  let loading: boolean;
	const {
    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderMutating,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId,
    selectCartOrderCartId,
    selectHasOrderResult
	} = getCartOrderSelectors();

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

    orderId = 'id';
    cart = cartFactory.create();
    loading = false;

    store.dispatch(new DaffCartLoadSuccess(cart));
    store.dispatch(new DaffCartPlaceOrderSuccess({
      orderId,
      cartId: cart.id,
    }));
  });

  describe('selectCartOrderState', () => {
    it('selects whether the place order operation is in progress', () => {
			const expectedOrderState: DaffCartOrderReducerState = {
				cartOrderResult: {
          orderId,
          cartId: cart.id,
        },
				loading: DaffLoadingState.Complete,
				errors: []
			};
      const selector = store.pipe(select(selectCartOrderState));
      const expected = cold('a', {a: expectedOrderState});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderLoading', () => {
    describe('when there is a cart order operation in progress', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrder());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartOrderLoading));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when there is not a cart order operation in progress', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartOrderLoading));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartOrderMutating', () => {
    describe('when there is a place order operation in progress', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrder());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartOrderMutating));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when there is not a place order operation in progress', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartOrderMutating));
        const expected = cold('a', {a: false});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectCartOrderErrors', () => {
    it('selects the errors associated with place order', () => {
      const selector = store.pipe(select(selectCartOrderErrors));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderValue', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectCartOrderValue));
      const expected = cold('a', {a: jasmine.objectContaining({
        orderId,
        cartId: cart.id,
      })});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderId', () => {
    it('selects the ID of the order object', () => {
      const selector = store.pipe(select(selectCartOrderId));
      const expected = cold('a', {a: orderId});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderCartId', () => {
    it('selects the cart ID of the order object', () => {
      const selector = store.pipe(select(selectCartOrderCartId));
      const expected = cold('a', {a: cart.id});
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectHasOrderResult', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectHasOrderResult));
      const expected = cold('a', {a: true});
      expect(selector).toBeObservable(expected);
    });
  });
});

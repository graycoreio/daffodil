import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCart } from '@daffodil/cart';
import {
  DaffCartStateRootSlice,
  daffCartReducers,
  DaffCartLoadSuccess,
  DaffCartPlaceOrderSuccess,
  DaffCartOrderReducerState,
  DaffCartPlaceOrder,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffState,
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { getCartOrderSelectors } from './cart-order.selector';

describe('@daffodil/cart/state | getCartOrderSelectors', () => {
  let store: Store<DaffCartStateRootSlice>;

  let cartFactory: DaffCartFactory;

  let orderId: string;
  let cart: DaffCart;
  let loading: boolean;
  let scheduler: TestScheduler;
  const {
    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderMutating,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId,
    selectCartOrderCartId,
    selectHasOrderResult,
  } = getCartOrderSelectors();

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: daffComposeReducers<DaffCartReducersState>([
            combineReducers(daffCartReducers),
            combineReducers({
              cart: daffCartRetrievalActionsReducerFactory(daffCartRetrivalActions),
              cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(daffCartRetrivalActions),
              order: daffIdentityReducer,
            }),
          ]),
        }),
      ],
    });

    store = TestBed.inject(Store);

    cartFactory = TestBed.inject(DaffCartFactory);

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
        loading: DaffState.Stable,
        errors: [],
      };
      const selector = store.pipe(select(selectCartOrderState));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: expectedOrderState });
      });
    });
  });

  describe('selectCartOrderLoading', () => {
    describe('when there is a cart order operation in progress', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrder());
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectCartOrderLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when there is not a cart order operation in progress', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartOrderLoading));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
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
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when there is not a place order operation in progress', () => {
      it('should return false', () => {
        const selector = store.pipe(select(selectCartOrderMutating));
        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectCartOrderErrors', () => {
    it('selects the errors associated with place order', () => {
      const selector = store.pipe(select(selectCartOrderErrors));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: []});
      });
    });
  });

  describe('selectCartOrderValue', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectCartOrderValue));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: jasmine.objectContaining({
          orderId,
          cartId: cart.id,
        }) });
      });
    });
  });

  describe('selectCartOrderId', () => {
    it('selects the ID of the order object', () => {
      const selector = store.pipe(select(selectCartOrderId));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: orderId });
      });
    });
  });

  describe('selectCartOrderCartId', () => {
    it('selects the cart ID of the order object', () => {
      const selector = store.pipe(select(selectCartOrderCartId));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: cart.id });
      });
    });
  });

  describe('selectHasOrderResult', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectHasOrderResult));
      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: true });
      });
    });
  });
});

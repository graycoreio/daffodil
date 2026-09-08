import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  combineReducers,
  StoreModule,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DAFF_CART_STORE_FEATURE_KEY,
  daffCartReducers,
  DaffCartPlaceOrderSuccess,
} from '@daffodil/cart/state';
import { DaffCheckoutStateRootSlice } from '@daffodil/checkout/state';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  DaffOrderListSuccess,
  daffOrderReducers,
  DAFF_ORDER_STORE_FEATURE_KEY,
} from '@daffodil/order/state';
import {
  DaffOrderCollectionFactory,
  DaffOrderFactory,
} from '@daffodil/order/testing';

import { getCheckoutPlacedOrderSelectors } from './placed-order.selector';

describe('@daffodil/checkout/state | getCheckoutPlacedOrderSelectors', () => {
  let store: Store<DaffCheckoutStateRootSlice>;

  let orderFactory: DaffOrderFactory;
  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrder: DaffOrder;
  let mockOrderCollection: DaffOrderCollection;

  let scheduler: TestScheduler;

  const {
    selectPlacedOrder,
    selectHasPlacedOrder,
  } = getCheckoutPlacedOrderSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    orderFactory = TestBed.inject(DaffOrderFactory);
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
    mockOrder = mockOrderCollection.data[mockOrderCollection.metadata.ids[0]];

    store.dispatch(new DaffOrderListSuccess(mockOrderCollection));

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectPlacedOrder', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectPlacedOrder));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been placed and loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({ orderId: mockOrder.id, cartId: 'cartId' }));
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the most recently placed order', () => {
        const selector = store.pipe(select(selectPlacedOrder));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: mockOrder });
        });
      });
    });
  });

  describe('selectHasPlacedOrder', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectHasPlacedOrder));

      scheduler.run(({ expectObservable }) => {
        expectObservable(selector).toBe('a', { a: false });
      });
    });

    describe('when an order has been placed and loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({ orderId: mockOrder.id, cartId: 'cartId' }));
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select if the most recently placed order exists', () => {
        const selector = store.pipe(select(selectHasPlacedOrder));

        scheduler.run(({ expectObservable }) => {
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });
  });
});

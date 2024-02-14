import { TestBed } from '@angular/core/testing';
import {
  Store,
  select,
  combineReducers,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

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
  });

  describe('selectPlacedOrder', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectPlacedOrder));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been placed and loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({ orderId: mockOrder.id, cartId: 'cartId' }));
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the most recently placed order', () => {
        const selector = store.pipe(select(selectPlacedOrder));
        const expected = cold('a', { a: mockOrder });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasPlacedOrder', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectHasPlacedOrder));
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been placed and loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({ orderId: mockOrder.id, cartId: 'cartId' }));
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select if the most recently placed order exists', () => {
        const selector = store.pipe(select(selectHasPlacedOrder));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});

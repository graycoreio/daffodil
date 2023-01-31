import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { daffIdentifiableArrayToDict } from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
} from '@daffodil/order';
import {
  daffOrderReducers,
  DaffOrderStateRootSlice,
  DAFF_ORDER_STORE_FEATURE_KEY,
  DaffOrderListSuccess,
} from '@daffodil/order/state';
import {
  DaffOrderCollectionFactory,
  DaffOrderFactory,
} from '@daffodil/order/testing';

import { getOrderSelectors } from './order.selector';

describe('Order | Selector | Order', () => {
  let store: Store<DaffOrderStateRootSlice>;

  let orderFactory: DaffOrderFactory;
  let orderCollectionFactory: DaffOrderCollectionFactory;

  let loading: boolean;
  let errors: string[];
  let mockOrder: DaffOrder;
  let mockOrderCollection: DaffOrderCollection;

  const {
    selectOrderLoading,
    selectOrderErrors,
    selectOrders,
  } = getOrderSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    orderFactory = TestBed.inject(DaffOrderFactory);
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
    mockOrder = Object.values(mockOrderCollection)[0];
    loading = false;
    errors = [];

    store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
  });

  describe('selectOrderLoading', () => {
    it('should select the loading property of the order state', () => {
      const selector = store.pipe(select(selectOrderLoading));
      const expected = cold('a', { a: loading });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectOrderErrors', () => {
    it('should select the error property of the order state', () => {
      const selector = store.pipe(select(selectOrderErrors));
      const expected = cold('a', { a: errors });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectOrders', () => {
    it('should select the orders from the collection', () => {
      const selector = store.pipe(select(selectOrders));
      const expected = cold('a', { a: jasmine.arrayContaining(Object.values(mockOrderCollection.data)) });

      expect(selector).toBeObservable(expected);
    });
  });
});

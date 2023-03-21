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

  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrderCollection: DaffOrderCollection;

  const {
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
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();

    store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
  });

  describe('selectOrders', () => {
    it('should select the orders from the collection', () => {
      const selector = store.pipe(select(selectOrders));
      const expected = cold('a', { a: jasmine.arrayContaining(Object.values(mockOrderCollection.data)) });

      expect(selector).toBeObservable(expected);
    });
  });
});

import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffOrderCollection } from '@daffodil/order';
import {
  daffOrderReducers,
  DaffOrderStateRootSlice,
  DAFF_ORDER_STORE_FEATURE_KEY,
  DaffOrderListSuccess,
} from '@daffodil/order/state';
import { DaffOrderCollectionFactory } from '@daffodil/order/testing';

import { getOrderSelectors } from './order.selector';

describe('Order | Selector | Order', () => {
  let store: Store<DaffOrderStateRootSlice>;

  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrderCollection: DaffOrderCollection;

  let scheduler: TestScheduler;

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

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectOrders', () => {
    it('should select the orders from the collection', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrders));
        expectObservable(selector).toBe('a', { a: jasmine.arrayContaining(Object.values(mockOrderCollection.data)) });
      });
    });
  });
});

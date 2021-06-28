import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffOrder } from '@daffodil/order';
import {
  daffOrderReducers,
  DaffOrderStateRootSlice,
  DAFF_ORDER_STORE_FEATURE_KEY,
  DaffOrderListSuccess,
} from '@daffodil/order/state';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { getOrderSelectors } from './order.selector';

describe('Order | Selector | Order', () => {
  let store: Store<DaffOrderStateRootSlice>;

  let orderFactory: DaffOrderFactory;

  let loading: boolean;
  let errors: string[];
  let mockOrder: DaffOrder;

  const {
    selectOrderLoading,
    selectOrderErrors,
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

    mockOrder = orderFactory.create();
    loading = false;
    errors = [];

    store.dispatch(new DaffOrderListSuccess([mockOrder]));
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
});

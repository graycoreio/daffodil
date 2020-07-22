import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, select, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffOrder } from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';
import { daffCartReducers } from '@daffodil/cart';

import {
  DaffOrderEntityState,
  daffOrderReducers,
  DAFF_ORDER_STORE_FEATURE_KEY
} from '../reducers/public_api';
import {
  getDaffOrderEntitySelectors,
} from './order-entities.selector';
import { DaffOrderListSuccess } from '../actions/order.actions';

describe('Order | Selector | OrderEntities', () => {
  let store: Store<DaffOrderEntityState>;

  let orderFactory: DaffOrderFactory

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];

  const {
    selectAllOrders,
    selectOrderEntities,
    selectOrderIds,
    selectOrderTotal,
    selectPlacedOrder,
    selectHasPlacedOrder
  } = getDaffOrderEntitySelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers)
        })
      ]
    });

    store = TestBed.get(Store);
    orderFactory = TestBed.get(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;

    store.dispatch(new DaffOrderListSuccess([mockOrder]));
  });

  describe('selectAllOrders', () => {
    it('should select all of the orders', () => {
      const selector = store.pipe(select(selectAllOrders));
      const expected = cold('a', {a: [mockOrder]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectOrderEntities', () => {
    it('should select all of the orders', () => {
      const selector = store.pipe(select(selectOrderEntities));
      const expected = cold('a', {a: {[orderId]: mockOrder}});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectOrderIds', () => {
    it('should select all of the order IDs', () => {
      const selector = store.pipe(select(selectOrderIds));
      const expected = cold('a', {a: [orderId]});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectOrderTotal', () => {
    it('should select the total number of orders', () => {
      const selector = store.pipe(select(selectOrderTotal));
      const expected = cold('a', {a: 1});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectPlacedOrder', () => {
    it('should select the most recently placed order', () => {
      const selector = store.pipe(select(selectPlacedOrder));
      const expected = cold('a', {a: null});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectHasPlacedOrder', () => {
    it('should select if the most recently placed order exists', () => {
      const selector = store.pipe(select(selectHasPlacedOrder));
      const expected = cold('a', {a: false});

      expect(selector).toBeObservable(expected);
    });
  });
});

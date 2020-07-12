import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrder,
  DaffOrderReducersState,
  daffOrderReducers,
  DAFF_ORDER_STORE_FEATURE_KEY
} from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffOrderFacade } from './order.facade';

describe('DaffOrderFacade', () => {
  let store: MockStore<{ [DAFF_ORDER_STORE_FEATURE_KEY]: Partial<DaffOrderReducersState> }>;
  let facade: DaffOrderFacade;
  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;
  let orderId: DaffOrder['id'];
  let errors: string[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers),
        })
      ],
      providers: [
        DaffOrderFacade,
      ]
    });

    store = TestBed.get(Store);
    facade = TestBed.get(DaffOrderFacade);
    orderFactory = TestBed.get(DaffOrderFactory);

    mockOrder = orderFactory.create();
    orderId = mockOrder.id;
    errors = [];
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the order is not loading', () => {
      const expected = cold('a', { a: false });
      expect(facade.loading$).toBeObservable(expected);
    });

    it('should be true if the order is loading', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffOrderLoad({orderId}));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: errors });
      expect(facade.errors$).toBeObservable(expected);
    });

    it('should contain an error upon a failed load', () => {
      const error = 'error';
      const expected = cold('a', { a: [error] });
      store.dispatch(new DaffOrderLoadFailure(error));
      expect(facade.errors$).toBeObservable(expected);
    })
  });

  describe('orders$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.orders$).toBeObservable(expected);
    });

    it('should be the orders upon a successful load', () => {
      const expected = cold('a', { a: [mockOrder] });
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.orders$).toBeObservable(expected);
    });
  });

  describe('orderIds$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', { a: [] });
      expect(facade.orderIds$).toBeObservable(expected);
    });

    it('should contain the order id upon a successful order load', () => {
      const expected = cold('a', { a: [orderId] });
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.orderIds$).toBeObservable(expected);
    });
  });

  describe('orderCount$', () => {
    it('should initially be zero', () => {
      const expected = cold('a', { a: 0 });
      expect(facade.orderCount$).toBeObservable(expected);
    });

    it('should be one upon a successful order load', () => {
      const expected = cold('a', { a: 1 });
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.orderCount$).toBeObservable(expected);
    });
  });

  describe('orderEntities$', () => {
    it('should initially be an empty object', () => {
      const expected = cold('a', { a: {} });
      expect(facade.orderEntities$).toBeObservable(expected);
    });

    it('should contain the order upon a successful order load', () => {
      const expected = cold('a', { a: {[orderId]: mockOrder} });
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.orderEntities$).toBeObservable(expected);
    });
  });
});

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
  DAFF_ORDER_STORE_FEATURE_KEY,
  DaffOrderListSuccess
} from '@daffodil/order';
import { DaffOrderFactory } from '@daffodil/order/testing';
import { DaffCartPlaceOrderSuccess, daffCartReducers } from '@daffodil/cart';

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
          cart: combineReducers(daffCartReducers),
        }),
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
      store.dispatch(new DaffOrderLoad(orderId));
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

  describe('placedOrder$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.placedOrder$).toBeObservable(expected);
    });

    it('should contain the order upon a successful place order and order load', () => {
      const expected = cold('a', { a: mockOrder });
      store.dispatch(new DaffCartPlaceOrderSuccess({orderId: mockOrder.id, cartId: 'cartId'}));
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.placedOrder$).toBeObservable(expected);
    });
  });

  describe('hasPlacedOrder$', () => {
    it('should initially be false', () => {
      const expected = cold('a', { a: false });
      expect(facade.hasPlacedOrder$).toBeObservable(expected);
    });

    it('should be true upon a successful place order and order load', () => {
      const expected = cold('a', { a: true });
      store.dispatch(new DaffCartPlaceOrderSuccess({orderId: mockOrder.id, cartId: 'cartId'}));
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.hasPlacedOrder$).toBeObservable(expected);
    });
  });

  describe('totals$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.totals$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s totals', () => {
        const expected = cold('a', {a: mockOrder.totals});

        expect(facade.totals$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('appliedCodes$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.appliedCodes$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s applied codes', () => {
        const expected = cold('a', {a: mockOrder.applied_codes});

        expect(facade.appliedCodes$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('items$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.items$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s items', () => {
        const expected = cold('a', {a: mockOrder.items});

        expect(facade.items$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('addresses$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.addresses$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s addresses', () => {
        const expected = cold('a', {a: mockOrder.addresses});

        expect(facade.addresses$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('shipments$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.shipments$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s shipments', () => {
        const expected = cold('a', {a: mockOrder.shipments});

        expect(facade.shipments$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('payment$', () => {
    it('should initially be null', () => {
      const expected = cold('a', {a: null});

      expect(facade.payment$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s payment', () => {
        const expected = cold('a', {a: mockOrder.payment});

        expect(facade.payment$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('invoices$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.invoices$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s invoices', () => {
        const expected = cold('a', {a: mockOrder.invoices});

        expect(facade.invoices$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('credits$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.credits$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s credits', () => {
        const expected = cold('a', {a: mockOrder.credits});

        expect(facade.credits$(orderId)).toBeObservable(expected);
      });
    });
  });
});

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
  DaffOrderListSuccess,
  DaffOrderTotal,
  DaffOrderTotalTypeEnum
} from '@daffodil/order';
import { DaffOrderFactory, DaffOrderTotalFactory } from '@daffodil/order/testing';
import { DaffCartPlaceOrderSuccess, daffCartReducers } from '@daffodil/cart';

import { DaffOrderFacade } from './order.facade';

describe('DaffOrderFacade', () => {
  let store: MockStore<{ [DAFF_ORDER_STORE_FEATURE_KEY]: Partial<DaffOrderReducersState> }>;
  let facade: DaffOrderFacade;
  let orderFactory: DaffOrderFactory;
  let orderTotalFactory: DaffOrderTotalFactory;

  let mockOrder: DaffOrder;
  let mockOrderTotal: DaffOrderTotal;
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
    orderTotalFactory = TestBed.get(DaffOrderTotalFactory);

    mockOrderTotal = orderTotalFactory.create();
    mockOrder = orderFactory.create({
      totals: [mockOrderTotal]
    });
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

  describe('getOrder$', () => {
    it('should initially be null', () => {
      const expected = cold('a', {a: null});

      expect(facade.getOrder$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order', () => {
        const expected = cold('a', {a: mockOrder});

        expect(facade.getOrder$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getTotals$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getTotals$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s totals', () => {
        const expected = cold('a', {a: mockOrder.totals});

        expect(facade.getTotals$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getAppliedCodes$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getAppliedCodes$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s applied codes', () => {
        const expected = cold('a', {a: mockOrder.applied_codes});

        expect(facade.getAppliedCodes$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getItems$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getItems$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s items', () => {
        const expected = cold('a', {a: mockOrder.items});

        expect(facade.getItems$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getBillingAddresses$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getBillingAddresses$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s addresses', () => {
        const expected = cold('a', {a: mockOrder.billing_addresses});

        expect(facade.getBillingAddresses$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getShippingAddresses$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getShippingAddresses$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s addresses', () => {
        const expected = cold('a', {a: mockOrder.shipping_addresses});

        expect(facade.getShippingAddresses$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getShipments$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getShipments$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s shipments', () => {
        const expected = cold('a', {a: mockOrder.shipments});

        expect(facade.getShipments$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getPayment$', () => {
    it('should initially be null', () => {
      const expected = cold('a', {a: null});

      expect(facade.getPayment$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s payment', () => {
        const expected = cold('a', {a: mockOrder.payment});

        expect(facade.getPayment$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getInvoices$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getInvoices$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s invoices', () => {
        const expected = cold('a', {a: mockOrder.invoices});

        expect(facade.getInvoices$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getCredits$', () => {
    it('should initially be an empty array', () => {
      const expected = cold('a', {a: []});

      expect(facade.getCredits$(orderId)).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s credits', () => {
        const expected = cold('a', {a: mockOrder.credits});

        expect(facade.getCredits$(orderId)).toBeObservable(expected);
      });
    });
  });

  describe('getGrandTotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getGrandTotal$(mockOrder.id)).toBeObservable(expected);
    });

    describe('when an order has been loaded with a grand total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.GrandTotal;
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the grand total', () => {
        const expected = cold('a', { a: mockOrderTotal });

        expect(facade.getGrandTotal$(mockOrder.id)).toBeObservable(expected);
      });
    });
  });

  describe('getSubtotal$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getSubtotal$(mockOrder.id)).toBeObservable(expected);
    });

    describe('when an order has been loaded with a subtotal', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Subtotal;
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the subtotal', () => {
        const expected = cold('a', { a: mockOrderTotal });

        expect(facade.getSubtotal$(mockOrder.id)).toBeObservable(expected);
      });
    });
  });

  describe('getShipping$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getShipping$(mockOrder.id)).toBeObservable(expected);
    });

    describe('when an order has been loaded with a shipping total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Shipping;
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the shipping total', () => {
        const expected = cold('a', { a: mockOrderTotal });

        expect(facade.getShipping$(mockOrder.id)).toBeObservable(expected);
      });
    });
  });

  describe('getDiscount$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getDiscount$(mockOrder.id)).toBeObservable(expected);
    });

    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the discount total', () => {
        const expected = cold('a', { a: mockOrderTotal });

        expect(facade.getDiscount$(mockOrder.id)).toBeObservable(expected);
      });
    });
  });

  describe('getTax$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });

      expect(facade.getTax$(mockOrder.id)).toBeObservable(expected);
    });

    describe('when an order has been loaded with a tax total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Tax;
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the tax total', () => {
        const expected = cold('a', { a: mockOrderTotal });

        expect(facade.getTax$(mockOrder.id)).toBeObservable(expected);
      });
    });
  });
});

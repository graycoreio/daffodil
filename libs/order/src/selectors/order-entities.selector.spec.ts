import { TestBed } from '@angular/core/testing';
import { Store, StoreModule, select, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffOrder, DaffOrderItem } from '@daffodil/order';
import { DaffOrderFactory, DaffOrderItemFactory } from '@daffodil/order/testing';
import { daffCartReducers, DaffCartPlaceOrderSuccess } from '@daffodil/cart';

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

  let orderFactory: DaffOrderFactory;
  let orderItemFactory: DaffOrderItemFactory;

  let mockOrder: DaffOrder;
  let mockOrderItem: DaffOrderItem;
  let orderId: DaffOrder['id'];

  const {
    selectAllOrders,
    selectOrderEntities,
    selectOrderIds,
    selectOrderTotal,
    selectPlacedOrder,
    selectHasPlacedOrder,
    selectOrderTotals,
    selectOrderAppliedCodes,
    selectOrderItems,
    selectOrderBillingAddresses,
    selectOrderShippingAddresses,
    selectOrderShipments,
    selectOrderPayment,
    selectOrderInvoices,
    selectOrderCredits,

    selectOrderItem,
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
    orderItemFactory = TestBed.get(DaffOrderItemFactory);

    mockOrderItem = orderItemFactory.create();
    mockOrder = orderFactory.create({
      items: [mockOrderItem]
    });
    orderId = mockOrder.id;
  });

  describe('selectAllOrders', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectAllOrders));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select all of the orders', () => {
        const selector = store.pipe(select(selectAllOrders));
        const expected = cold('a', {a: [mockOrder]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderEntities', () => {
    it('should initially be an empty object', () => {
      const selector = store.pipe(select(selectOrderEntities));
      const expected = cold('a', {a: {}});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select all of the orders', () => {
        const selector = store.pipe(select(selectOrderEntities));
        const expected = cold('a', {a: {[orderId]: mockOrder}});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderIds', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderIds));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select all of the order IDs', () => {
        const selector = store.pipe(select(selectOrderIds));
        const expected = cold('a', {a: [orderId]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderTotal', () => {
    it('should initially be 0', () => {
      const selector = store.pipe(select(selectOrderTotal));
      const expected = cold('a', {a: 0});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the total number of orders', () => {
        const selector = store.pipe(select(selectOrderTotal));
        const expected = cold('a', {a: 1});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectPlacedOrder', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectPlacedOrder));
      const expected = cold('a', {a: null});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been placed and loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({orderId: mockOrder.id, cartId: 'cartId'}));
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the most recently placed order', () => {
        const selector = store.pipe(select(selectPlacedOrder));
        const expected = cold('a', {a: mockOrder});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectHasPlacedOrder', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectHasPlacedOrder));
      const expected = cold('a', {a: false});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been placed and loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffCartPlaceOrderSuccess({orderId: mockOrder.id, cartId: 'cartId'}));
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select if the most recently placed order exists', () => {
        const selector = store.pipe(select(selectHasPlacedOrder));
        const expected = cold('a', {a: true});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderTotals', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderTotals, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s totals', () => {
        const selector = store.pipe(select(selectOrderTotals, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.totals});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderAppliedCodes', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderAppliedCodes, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s applied codes', () => {
        const selector = store.pipe(select(selectOrderAppliedCodes, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.applied_codes});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderItems', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderItems, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s items', () => {
        const selector = store.pipe(select(selectOrderItems, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.items});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderBillingAddresses', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderBillingAddresses, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s addresses', () => {
        const selector = store.pipe(select(selectOrderBillingAddresses, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.billing_addresses});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderShippingAddresses', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderShippingAddresses, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s addresses', () => {
        const selector = store.pipe(select(selectOrderShippingAddresses, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.shipping_addresses});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderShipments', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderShipments, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s shipments', () => {
        const selector = store.pipe(select(selectOrderShipments, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.shipments});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderPayment', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderPayment, {id: mockOrder.id}));
      const expected = cold('a', {a: null});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s payment', () => {
        const selector = store.pipe(select(selectOrderPayment, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.payment});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderInvoices', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderInvoices, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s invoices', () => {
        const selector = store.pipe(select(selectOrderInvoices, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.invoices});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderCredits', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderCredits, {id: mockOrder.id}));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order\'s credits', () => {
        const selector = store.pipe(select(selectOrderCredits, {id: mockOrder.id}));
        const expected = cold('a', {a: mockOrder.credits});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderItem', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderItem, {id: mockOrder.id, item_id: mockOrderItem.item_id}));
      const expected = cold('a', {a: null});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess([mockOrder]));
      });

      it('should select the order item', () => {
        const selector = store.pipe(select(selectOrderItem, {id: mockOrder.id, item_id: mockOrderItem.item_id}));
        const expected = cold('a', {a: mockOrderItem});

        expect(selector).toBeObservable(expected);
      });
    });
  });
});

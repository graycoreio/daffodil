import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
} from '@daffodil/cart/state';
import { daffIdentifiableArrayToDict } from '@daffodil/core';
import {
  DaffOrder,
  DaffOrderCollection,
  DaffOrderItem,
  DaffOrderTotal,
  DaffOrderTotalTypeEnum,
} from '@daffodil/order';
import {
  daffOrderReducers,
  DAFF_ORDER_STORE_FEATURE_KEY,
  DaffOrderListSuccess,
  DaffOrderStateRootSlice,
} from '@daffodil/order/state';
import {
  DaffOrderCollectionFactory,
  DaffOrderFactory,
  DaffOrderItemFactory,
  DaffOrderTotalFactory,
} from '@daffodil/order/testing';

import { getDaffOrderEntitySelectors } from './order-entities.selector';

describe('@daffodil/order/state | getDaffOrderEntitySelectors', () => {
  let store: Store<DaffOrderStateRootSlice>;

  let orderFactory: DaffOrderFactory;
  let orderItemFactory: DaffOrderItemFactory;
  let orderTotalFactory: DaffOrderTotalFactory;
  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrderCollection: DaffOrderCollection;
  let mockOrder: DaffOrder;
  let mockOrderItem: DaffOrderItem;
  let mockOrderTotal: DaffOrderTotal;
  let orderId: DaffOrder['id'];

  let scheduler: TestScheduler;

  const {
    selectAllOrders,
    selectOrderEntities,
    selectOrderIds,
    selectOrderTotal,
    selectOrderTotals,
    selectOrderAppliedCodes,
    selectOrderItems,
    selectOrderBillingAddresses,
    selectOrderShippingTotalAddresses,
    selectOrderShipments,
    selectOrderPayment,
    selectOrderInvoices,
    selectOrderCredits,

    selectOrderItem,

    selectOrderGrandTotal,
    selectOrderSubtotal,
    selectOrderShippingTotal,
    selectOrderDiscountTotal,
    selectOrderHasDiscount,
    selectOrderTaxTotal,
  } = getDaffOrderEntitySelectors();

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
    orderItemFactory = TestBed.inject(DaffOrderItemFactory);
    orderTotalFactory = TestBed.inject(DaffOrderTotalFactory);
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderItem = orderItemFactory.create();
    mockOrderTotal = orderTotalFactory.create();
    mockOrder = orderFactory.create({
      items: [mockOrderItem],
      totals: [mockOrderTotal],
    });
    mockOrderCollection = orderCollectionFactory.create({
      data: daffIdentifiableArrayToDict([mockOrder]),
    });
    orderId = mockOrder.id;

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  describe('selectAllOrders', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectAllOrders));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select all of the orders', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectAllOrders));
          expectObservable(selector).toBe('a', { a: [mockOrder]});
        });
      });
    });
  });

  describe('selectOrderEntities', () => {
    it('should initially be an empty object', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderEntities));
        expectObservable(selector).toBe('a', { a: {}});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select all of the orders', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderEntities));
          expectObservable(selector).toBe('a', { a: { [orderId]: mockOrder }});
        });
      });
    });
  });

  describe('selectOrderIds', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderIds));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select all of the order IDs', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderIds));
          expectObservable(selector).toBe('a', { a: [orderId]});
        });
      });
    });
  });

  describe('selectOrderTotal', () => {
    it('should initially be 0', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderTotal));
        expectObservable(selector).toBe('a', { a: 0 });
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the total number of orders', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderTotal));
          expectObservable(selector).toBe('a', { a: 1 });
        });
      });
    });
  });

  describe('selectOrderTotals', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderTotals(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s totals', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderTotals(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.totals });
        });
      });
    });
  });

  describe('selectOrderAppliedCodes', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderAppliedCodes(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s applied codes', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderAppliedCodes(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.applied_codes });
        });
      });
    });
  });

  describe('selectOrderItems', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderItems(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s items', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderItems(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.items });
        });
      });
    });
  });

  describe('selectOrderBillingAddresses', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderBillingAddresses(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s addresses', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderBillingAddresses(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.billing_addresses });
        });
      });
    });
  });

  describe('selectOrderShippingTotalAddresses', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderShippingTotalAddresses(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s addresses', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderShippingTotalAddresses(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.shipping_addresses });
        });
      });
    });
  });

  describe('selectOrderShipments', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderShipments(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s shipments', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderShipments(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.shipments });
        });
      });
    });
  });

  describe('selectOrderPayment', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderPayment(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s payment', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderPayment(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.payment });
        });
      });
    });
  });

  describe('selectOrderInvoices', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderInvoices(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s invoices', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderInvoices(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.invoices });
        });
      });
    });
  });

  describe('selectOrderCredits', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderCredits(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s credits', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderCredits(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrder.credits });
        });
      });
    });
  });

  describe('selectOrderItem', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderItem(mockOrder.id, mockOrderItem.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order item', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderItem(mockOrder.id, mockOrderItem.id)));
          expectObservable(selector).toBe('a', { a: mockOrderItem });
        });
      });
    });
  });

  describe('selectOrderGrandTotal', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderGrandTotal(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a grand total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.GrandTotal;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the grand total', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderGrandTotal(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('selectOrderSubtotal', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderSubtotal(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a subtotal', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Subtotal;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the subtotal', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderSubtotal(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('selectOrderShippingTotal', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderShippingTotal(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a shipping total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Shipping;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the shipping total', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderShippingTotal(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('selectOrderDiscountTotal', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderDiscountTotal(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the discount total', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderDiscountTotal(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('selectOrderHasDiscount', () => {
    it('should initially be false', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderHasDiscount(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: false });
      });
    });

    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderHasDiscount(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: true });
        });
      });
    });

    describe('when an order has been loaded without a discount total', () => {
      beforeEach(() => {
        mockOrderTotal = null;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderHasDiscount(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: false });
        });
      });
    });
  });

  describe('selectOrderTaxTotal', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        const selector = store.pipe(select(selectOrderTaxTotal(mockOrder.id)));
        expectObservable(selector).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a tax total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Tax;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the tax total', () => {
        scheduler.run(({ expectObservable }) => {
          const selector = store.pipe(select(selectOrderTaxTotal(mockOrder.id)));
          expectObservable(selector).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });
});

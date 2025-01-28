import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  select,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  daffCartReducers,
  DaffCartPlaceOrderSuccess,
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
  DaffOrderEntityState,
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
  });

  describe('selectAllOrders', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectAllOrders));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select all of the orders', () => {
        const selector = store.pipe(select(selectAllOrders));
        const expected = cold('a', { a: [mockOrder]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderEntities', () => {
    it('should initially be an empty object', () => {
      const selector = store.pipe(select(selectOrderEntities));
      const expected = cold('a', { a: {}});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select all of the orders', () => {
        const selector = store.pipe(select(selectOrderEntities));
        const expected = cold('a', { a: { [orderId]: mockOrder }});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderIds', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderIds));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select all of the order IDs', () => {
        const selector = store.pipe(select(selectOrderIds));
        const expected = cold('a', { a: [orderId]});

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderTotal', () => {
    it('should initially be 0', () => {
      const selector = store.pipe(select(selectOrderTotal));
      const expected = cold('a', { a: 0 });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the total number of orders', () => {
        const selector = store.pipe(select(selectOrderTotal));
        const expected = cold('a', { a: 1 });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderTotals', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderTotals(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s totals', () => {
        const selector = store.pipe(select(selectOrderTotals(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.totals });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderAppliedCodes', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderAppliedCodes(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s applied codes', () => {
        const selector = store.pipe(select(selectOrderAppliedCodes(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.applied_codes });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderItems', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderItems(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s items', () => {
        const selector = store.pipe(select(selectOrderItems(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.items });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderBillingAddresses', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderBillingAddresses(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s addresses', () => {
        const selector = store.pipe(select(selectOrderBillingAddresses(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.billing_addresses });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderShippingTotalAddresses', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderShippingTotalAddresses(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s addresses', () => {
        const selector = store.pipe(select(selectOrderShippingTotalAddresses(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.shipping_addresses });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderShipments', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderShipments(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s shipments', () => {
        const selector = store.pipe(select(selectOrderShipments(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.shipments });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderPayment', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderPayment(mockOrder.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s payment', () => {
        const selector = store.pipe(select(selectOrderPayment(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.payment });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderInvoices', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderInvoices(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s invoices', () => {
        const selector = store.pipe(select(selectOrderInvoices(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.invoices });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderCredits', () => {
    it('should initially be an empty array', () => {
      const selector = store.pipe(select(selectOrderCredits(mockOrder.id)));
      const expected = cold('a', { a: []});

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s credits', () => {
        const selector = store.pipe(select(selectOrderCredits(mockOrder.id)));
        const expected = cold('a', { a: mockOrder.credits });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderItem', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderItem(mockOrder.id, mockOrderItem.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order item', () => {
        const selector = store.pipe(select(selectOrderItem(mockOrder.id, mockOrderItem.id)));
        const expected = cold('a', { a: mockOrderItem });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderGrandTotal', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderGrandTotal(mockOrder.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded with a grand total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.GrandTotal;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the grand total', () => {
        const selector = store.pipe(select(selectOrderGrandTotal(mockOrder.id)));
        const expected = cold('a', { a: mockOrderTotal });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderSubtotal', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderSubtotal(mockOrder.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded with a subtotal', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Subtotal;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the subtotal', () => {
        const selector = store.pipe(select(selectOrderSubtotal(mockOrder.id)));
        const expected = cold('a', { a: mockOrderTotal });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderShippingTotal', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderShippingTotal(mockOrder.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded with a shipping total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Shipping;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the shipping total', () => {
        const selector = store.pipe(select(selectOrderShippingTotal(mockOrder.id)));
        const expected = cold('a', { a: mockOrderTotal });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderDiscountTotal', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderDiscountTotal(mockOrder.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the discount total', () => {
        const selector = store.pipe(select(selectOrderDiscountTotal(mockOrder.id)));
        const expected = cold('a', { a: mockOrderTotal });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderHasDiscount', () => {
    it('should initially be false', () => {
      const selector = store.pipe(select(selectOrderHasDiscount(mockOrder.id)));
      const expected = cold('a', { a: false });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should return true', () => {
        const selector = store.pipe(select(selectOrderHasDiscount(mockOrder.id)));
        const expected = cold('a', { a: true });

        expect(selector).toBeObservable(expected);
      });
    });

    describe('when an order has been loaded without a discount total', () => {
      beforeEach(() => {
        mockOrderTotal = null;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should return false', () => {
        const selector = store.pipe(select(selectOrderHasDiscount(mockOrder.id)));
        const expected = cold('a', { a: false });

        expect(selector).toBeObservable(expected);
      });
    });
  });

  describe('selectOrderTaxTotal', () => {
    it('should initially be null', () => {
      const selector = store.pipe(select(selectOrderTaxTotal(mockOrder.id)));
      const expected = cold('a', { a: null });

      expect(selector).toBeObservable(expected);
    });

    describe('when an order has been loaded with a tax total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Tax;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the tax total', () => {
        const selector = store.pipe(select(selectOrderTaxTotal(mockOrder.id)));
        const expected = cold('a', { a: mockOrderTotal });

        expect(selector).toBeObservable(expected);
      });
    });
  });
});

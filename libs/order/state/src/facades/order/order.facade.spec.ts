import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
} from '@daffodil/cart/state';
import { DaffStateError } from '@daffodil/core/state';
import {
  DaffOrder,
  DaffOrderCollection,
  DaffOrderTotal,
  DaffOrderTotalTypeEnum,
} from '@daffodil/order';
import {
  DaffOrderLoad,
  DaffOrderLoadSuccess,
  DaffOrderLoadFailure,
  DaffOrderStateRootSlice,
  daffOrderReducers,
  DAFF_ORDER_STORE_FEATURE_KEY,
  DaffOrderListSuccess,
} from '@daffodil/order/state';
import { DaffOrderCollectionFactory } from '@daffodil/order/testing';

import { DaffOrderFacade } from './order.facade';

describe('DaffOrderFacade', () => {
  let store: Store<DaffOrderStateRootSlice>;
  let facade: DaffOrderFacade;
  let orderCollectionFactory: DaffOrderCollectionFactory;

  let mockOrderCollection: DaffOrderCollection;
  let mockOrder: DaffOrder;
  let mockOrderTotal: DaffOrderTotal;
  let orderId: DaffOrder['id'];
  let errors: string[];

  let scheduler: TestScheduler;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers),
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
        }),
      ],
      providers: [
        DaffOrderFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffOrderFacade);
    orderCollectionFactory = TestBed.inject(DaffOrderCollectionFactory);

    mockOrderCollection = orderCollectionFactory.create();
    mockOrder = Object.values(mockOrderCollection.data)[0];
    mockOrderTotal = mockOrder.totals[0];
    orderId = mockOrder.id;
    errors = [];

    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = { type: 'SOME_TYPE' };

    facade.dispatch(action);
    expect(<any>store.dispatch).toHaveBeenCalledWith(action);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });

  describe('loading$', () => {
    it('should be false if the order is not loading', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.loading$).toBe('a', { a: false });
      });
    });

    it('should be true if the order is loading', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffOrderLoad(orderId));
        expectObservable(facade.loading$).toBe('a', { a: true });
      });
    });
  });

  describe('errors$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.errors$).toBe('a', { a: errors });
      });
    });

    it('should contain an error upon a failed load', () => {
      const error: DaffStateError = { code: 'code', recoverable: false, message: 'message' };
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffOrderLoadFailure(error));
        expectObservable(facade.errors$).toBe('a', { a: [error]});
      });
    });
  });

  describe('orders$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orders$).toBe('a', { a: []});
      });
    });

    it('should be the orders upon a successful load', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
        expectObservable(facade.orders$).toBe('a', { a: jasmine.arrayContaining(Object.values(mockOrderCollection.data)) });
      });
    });
  });

  describe('orderIds$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderIds$).toBe('a', { a: []});
      });
    });

    it('should contain the order id upon a successful order load', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffOrderLoadSuccess(mockOrder));
        expectObservable(facade.orderIds$).toBe('a', { a: [orderId]});
      });
    });
  });

  describe('orderCount$', () => {
    it('should initially be zero', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderCount$).toBe('a', { a: 0 });
      });
    });

    it('should be one upon a successful order load', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffOrderLoadSuccess(mockOrder));
        expectObservable(facade.orderCount$).toBe('a', { a: 1 });
      });
    });
  });

  describe('orderEntities$', () => {
    it('should initially be an empty object', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.orderEntities$).toBe('a', { a: {}});
      });
    });

    it('should contain the order upon a successful order load', () => {
      scheduler.run(({ expectObservable }) => {
        store.dispatch(new DaffOrderLoadSuccess(mockOrder));
        expectObservable(facade.orderEntities$).toBe('a', { a: { [orderId]: mockOrder }});
      });
    });
  });

  describe('getOrder$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getOrder$(orderId)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getOrder$(orderId)).toBe('a', { a: mockOrder });
        });
      });
    });
  });

  describe('getTotals$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getTotals$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s totals', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getTotals$(orderId)).toBe('a', { a: mockOrder.totals });
        });
      });
    });
  });

  describe('getAppliedCodes$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getAppliedCodes$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s applied codes', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getAppliedCodes$(orderId)).toBe('a', { a: mockOrder.applied_codes });
        });
      });
    });
  });

  describe('getItems$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getItems$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s items', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getItems$(orderId)).toBe('a', { a: mockOrder.items });
        });
      });
    });
  });

  describe('getBillingAddresses$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getBillingAddresses$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s addresses', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getBillingAddresses$(orderId)).toBe('a', { a: mockOrder.billing_addresses });
        });
      });
    });
  });

  describe('getShippingAddresses$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getShippingAddresses$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s addresses', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getShippingAddresses$(orderId)).toBe('a', { a: mockOrder.shipping_addresses });
        });
      });
    });
  });

  describe('getShipments$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getShipments$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s shipments', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getShipments$(orderId)).toBe('a', { a: mockOrder.shipments });
        });
      });
    });
  });

  describe('getPayment$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getPayment$(orderId)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s payment', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getPayment$(orderId)).toBe('a', { a: mockOrder.payment });
        });
      });
    });
  });

  describe('getInvoices$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getInvoices$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s invoices', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getInvoices$(orderId)).toBe('a', { a: mockOrder.invoices });
        });
      });
    });
  });

  describe('getCredits$', () => {
    it('should initially be an empty array', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getCredits$(orderId)).toBe('a', { a: []});
      });
    });

    describe('when an order has been loaded', () => {
      beforeEach(() => {
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the order\'s credits', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getCredits$(orderId)).toBe('a', { a: mockOrder.credits });
        });
      });
    });
  });

  describe('getGrandTotal$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getGrandTotal$(mockOrder.id)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a grand total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.GrandTotal;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the grand total', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getGrandTotal$(mockOrder.id)).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('getSubtotal$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getSubtotal$(mockOrder.id)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a subtotal', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Subtotal;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the subtotal', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getSubtotal$(mockOrder.id)).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('getShippingTotal$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getShippingTotal$(mockOrder.id)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a shipping total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Shipping;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the shipping total', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getShippingTotal$(mockOrder.id)).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('getDiscountTotal$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getDiscountTotal$(mockOrder.id)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the discount total', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getDiscountTotal$(mockOrder.id)).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });

  describe('hasDiscount$', () => {
    describe('when an order has been loaded with a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Discount;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should return true', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasDiscount$(mockOrder.id)).toBe('a', { a: true });
        });
      });
    });

    describe('when an order has been loaded without a discount total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.GrandTotal;
        mockOrder.totals = [mockOrderTotal];
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should return false', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.hasDiscount$(mockOrder.id)).toBe('a', { a: false });
        });
      });
    });
  });

  describe('getTaxTotal$', () => {
    it('should initially be null', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(facade.getTaxTotal$(mockOrder.id)).toBe('a', { a: null });
      });
    });

    describe('when an order has been loaded with a tax total', () => {
      beforeEach(() => {
        mockOrderTotal.type = DaffOrderTotalTypeEnum.Tax;
        store.dispatch(new DaffOrderListSuccess(mockOrderCollection));
      });

      it('should select the tax total', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(facade.getTaxTotal$(mockOrder.id)).toBe('a', { a: mockOrderTotal });
        });
      });
    });
  });
});

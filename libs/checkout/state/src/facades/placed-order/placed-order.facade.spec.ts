import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCartPlaceOrderSuccess,
  daffCartReducers,
  DAFF_CART_STORE_FEATURE_KEY,
} from '@daffodil/cart/state';
import { DaffCheckoutStateRootSlice } from '@daffodil/checkout/state';
import { DaffOrder } from '@daffodil/order';
import {
  DaffOrderLoadSuccess,
  daffOrderReducers,
  DAFF_ORDER_STORE_FEATURE_KEY,
} from '@daffodil/order/state';
import { DaffOrderFactory } from '@daffodil/order/testing';

import { DaffCheckoutPlacedOrderFacade } from './placed-order.facade';

describe('@daffodil/checkout/state | DaffCheckoutPlacedOrderFacade', () => {
  let store: Store<DaffCheckoutStateRootSlice>;
  let facade: DaffCheckoutPlacedOrderFacade;
  let orderFactory: DaffOrderFactory;

  let mockOrder: DaffOrder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_ORDER_STORE_FEATURE_KEY]: combineReducers(daffOrderReducers),
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
        }),
      ],
      providers: [
        DaffCheckoutPlacedOrderFacade,
      ],
    });

    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffCheckoutPlacedOrderFacade);
    orderFactory = TestBed.inject(DaffOrderFactory);

    mockOrder = orderFactory.create();
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

  describe('placedOrder$', () => {
    it('should initially be null', () => {
      const expected = cold('a', { a: null });
      expect(facade.placedOrder$).toBeObservable(expected);
    });

    it('should contain the order upon a successful place order and order load', () => {
      const expected = cold('a', { a: mockOrder });
      store.dispatch(new DaffCartPlaceOrderSuccess({ orderId: mockOrder.id, cartId: 'cartId' }));
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
      store.dispatch(new DaffCartPlaceOrderSuccess({ orderId: mockOrder.id, cartId: 'cartId' }));
      store.dispatch(new DaffOrderLoadSuccess(mockOrder));
      expect(facade.hasPlacedOrder$).toBeObservable(expected);
    });
  });
});

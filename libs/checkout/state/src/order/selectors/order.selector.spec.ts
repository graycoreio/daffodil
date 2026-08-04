import { TestBed } from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffCheckoutStateRootSlice,
  daffCheckoutOrderReducer,
  DaffCheckoutPlaceOrderSuccess,
  DaffCheckoutOrderReducerState,
  DAFF_CHECKOUT_STORE_FEATURE_KEY,
} from '@daffodil/checkout/state';
import { DaffState } from '@daffodil/core/state';

import { daffCheckoutOrderSelectorsFactory } from './order.selector';

describe('@daffodil/checkout/state | daffCheckoutOrderSelectorsFactory', () => {
  let store: Store<DaffCheckoutStateRootSlice>;

  let orderId: string;
  let loading: boolean;
  const {
    selectCheckoutOrderState,
    selectCheckoutOrderValue,
    selectHasOrderResult,
  } = daffCheckoutOrderSelectorsFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CHECKOUT_STORE_FEATURE_KEY]: combineReducers({
            order: daffCheckoutOrderReducer,
          }),
        }),
      ],
    });

    store = TestBed.inject(Store);

    orderId = 'id';
    loading = false;

    store.dispatch(new DaffCheckoutPlaceOrderSuccess({
      orderId,
      cartId: 'cart.id',
    }));
  });

  describe('selectCheckoutOrderState', () => {
    it('selects whether the place order operation is in progress', () => {
      const expectedOrderState: DaffCheckoutOrderReducerState = {
        orderResult: {
          orderId,
          cartId: 'cart.id',
        },
        daffState: DaffState.Stable,
        daffErrors: [],
      };
      const selector = store.pipe(select(selectCheckoutOrderState));
      const expected = cold('a', { a: expectedOrderState });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCheckoutOrderValue', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectCheckoutOrderValue));
      const expected = cold('a', { a: jasmine.objectContaining({
        orderId,
        cartId: 'cart.id',
      }) });

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectHasOrderResult', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectHasOrderResult));
      const expected = cold('a', { a: true });
      expect(selector).toBeObservable(expected);
    });
  });
});

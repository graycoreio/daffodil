import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartLoadSuccess, DaffCartPlaceOrderSuccess } from '../../actions/public_api';
import { daffCartReducers, DaffCartReducersState } from '../../reducers/public_api';
import { DaffCartErrors } from '../../reducers/cart-errors.type';
import { getCartOrderSelectors } from './cart-order.selector';
import { DaffCartOrderReducerState } from '../../reducers/cart-order-state.interface';

describe('Cart | Selector | Cart', () => {
  let store: Store<DaffCartReducersState>;

  let cartFactory: DaffCartFactory;

  let orderId: string;
  let cart: DaffCart;
  let loading: boolean;
	const {
    selectCartOrderState,
    selectCartOrderLoading,
    selectCartOrderErrors,
    selectCartOrderValue,
    selectCartOrderId
	} = getCartOrderSelectors();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
      ]
    });

    store = TestBed.get(Store);

    cartFactory = TestBed.get(DaffCartFactory);

    orderId = 'id';
    cart = cartFactory.create();
    loading = false;

    store.dispatch(new DaffCartLoadSuccess(cart));
    store.dispatch(new DaffCartPlaceOrderSuccess({id: orderId}));
  });

  describe('selectCartOrderState', () => {
    it('selects whether the place order operation is in progress', () => {
			const expectedOrderState: DaffCartOrderReducerState = {
				cartOrderResult: { id: orderId },
				loading: false,
				errors: []
			};
      const selector = store.pipe(select(selectCartOrderState));
      const expected = cold('a', {a: expectedOrderState});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderLoading', () => {
    it('selects whether the place order operation is in progress', () => {
      const selector = store.pipe(select(selectCartOrderLoading));
      const expected = cold('a', {a: false});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderErrors', () => {
    it('selects the errors associated with place order', () => {
      const selector = store.pipe(select(selectCartOrderErrors));
      const expected = cold('a', {a: []});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderValue', () => {
    it('selects the order object', () => {
      const selector = store.pipe(select(selectCartOrderValue));
      const expected = cold('a', {a: {id: orderId}});

      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectCartOrderId', () => {
    it('selects the ID of the order object', () => {
      const selector = store.pipe(select(selectCartOrderId));
      const expected = cold('a', {a: orderId});

      expect(selector).toBeObservable(expected);
    });
  });
});

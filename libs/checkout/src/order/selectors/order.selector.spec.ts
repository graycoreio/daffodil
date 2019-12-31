import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffPlaceOrderSuccess } from '../actions/order.actions';
import { DaffOrderFactory } from '../../../testing/src';
import { Order } from '../../models/order/order';
import { DaffOrderReducersState } from '../reducers/order-reducers.interface';
import { daffOrderReducers } from '../reducers/order-reducers';
import { selectOrderState, selectOrder, selectLoading, selectErrors } from './order.selector';

describe('selectOrderState', () => {

  let store: Store<DaffOrderReducersState>;
  const orderFactory: DaffOrderFactory = new DaffOrderFactory();
  let stubOrder: Order;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          order: combineReducers(daffOrderReducers),
        })
      ]
    });

    stubOrder = orderFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new DaffPlaceOrderSuccess(stubOrder));
  }));

  describe('orderStateSelector', () => {
    
    it('selects order state', () => {
      const expectedOrderState = {
        order: stubOrder,
        loading: false,
        errors: []
      }
      const selector = store.pipe(select(selectOrderState));
      const expected = cold('a', { a: expectedOrderState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectOrder', () => {
    
    it('selects the current order', () => {
      const selector = store.pipe(select(selectOrder));
      const expected = cold('a', { a: stubOrder });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectLoading', () => {
    
    it('selects order loading state', () => {
      const selector = store.pipe(select(selectLoading));
      const expected = cold('a', { a: false });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectErrorsState', () => {
    
    it('selects order errors state', () => {
      const selector = store.pipe(select(selectErrors));
      const expected = cold('a', { a: [] });
      expect(selector).toBeObservable(expected);
    });
  });
});

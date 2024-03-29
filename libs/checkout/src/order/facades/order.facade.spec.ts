import { TestBed } from '@angular/core/testing';
import {
  Store,
  StoreModule,
  combineReducers,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffOrderFactory } from '@daffodil/checkout/testing';

import { DaffOrderFacade } from './order.facade';
import { DaffOrder } from '../../models/order/order';
import { DaffPlaceOrderSuccess } from '../actions/order.actions';
import { daffOrderReducers } from '../reducers/order-reducers';

describe('DaffOrderFacade', () => {
  let store: Store<any>;
  let facade: DaffOrderFacade;
  let stubOrder: DaffOrder;
  const orderFactory: DaffOrderFactory = new DaffOrderFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          order: combineReducers(daffOrderReducers),
        }),
      ],
      providers: [
        DaffOrderFacade,
      ],
    });

    stubOrder = orderFactory.create();
    store = TestBed.inject(Store);
    facade = TestBed.inject(DaffOrderFacade);
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

  describe('order$', () => {

    it('should return the current order', () => {
      const expected = cold('a', { a: stubOrder });
      store.dispatch(new DaffPlaceOrderSuccess(stubOrder));
      expect(facade.order$).toBeObservable(expected);
    });
  });

  describe('loading$', () => {

    it('should return the loading state for placing an order', () => {
      const expected = cold('a', { a: false });
      store.dispatch(new DaffPlaceOrderSuccess(stubOrder));
      expect(facade.loading$).toBeObservable(expected);
    });
  });

  describe('errors$', () => {

    it('should return errors associated with placing an order', () => {
      const expected = cold('a', { a: []});
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});

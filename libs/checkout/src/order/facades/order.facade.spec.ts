import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffOrderFactory } from '@daffodil/checkout/testing';

import { daffOrderReducers } from '../reducers/order-reducers';
import { Order } from '../../models/order/order';
import { DaffPlaceOrderSuccess } from '../actions/order.actions';
import { DaffOrderFacade } from './order.facade';

describe('DaffOrderFacade', () => {
  let store: MockStore<any>;
  let facade: DaffOrderFacade;
  let stubOrder: Order;
  const orderFactory: DaffOrderFactory = new DaffOrderFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          order: combineReducers(daffOrderReducers)
        })
      ],
      providers: [
        DaffOrderFacade,
      ]
    })

    stubOrder = orderFactory.create();
    store = TestBed.get(Store);
    facade = TestBed.get(DaffOrderFacade);
  });

  it('should be created', () => {
    expect(facade).toBeTruthy();
  });

  it('should be able to dispatch an action to the store', () => {
    spyOn(store, 'dispatch');
    const action = {type: 'SOME_TYPE'};

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
      const expected = cold('a', { a: [] });
      expect(facade.errors$).toBeObservable(expected);
    });
  });
});

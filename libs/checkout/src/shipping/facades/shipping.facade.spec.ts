import { TestBed } from '@angular/core/testing';
import { MockStore } from '@ngrx/store/testing';
import { Store, StoreModule, combineReducers } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffShippingFacade } from './shipping.facade';
import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';
import { daffShippingReducers } from '../reducers/shipping-reducers';
import { DaffUpdateShippingAddress, DaffSelectShippingOption } from '../actions/shipping.actions';

describe('DaffShippingFacade', () => {
  let store: MockStore<any>;
  let facade: DaffShippingFacade;
  let stubShippingAddress: DaffAddress;
  let stubSelectedShippingOptionId: string;
  let stubIsShippingAddressValid: boolean;
  const addressFactory: DaffAddressFactory = new DaffAddressFactory();

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        StoreModule.forRoot({
          shipping: combineReducers(daffShippingReducers)
        })
      ],
      providers: [
        DaffShippingFacade,
      ]
    })
    
    store = TestBed.get(Store);
    facade = TestBed.get(DaffShippingFacade);
    stubShippingAddress = addressFactory.create();
    stubSelectedShippingOptionId = '0';
    stubIsShippingAddressValid = true;
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

  describe('shippingAddress$', () => {
  
    it('should return the shipping address for the customer', () => {
      const expected = cold('a', { a: stubShippingAddress });
      store.dispatch(new DaffUpdateShippingAddress(stubShippingAddress));
      expect(facade.shippingAddress$).toBeObservable(expected);
    });
  });

  describe('selectedShippingOptionId$', () => {
  
    it('should return the selected shipping option id', () => {
      const expected = cold('a', { a: stubSelectedShippingOptionId });
      store.dispatch(new DaffSelectShippingOption(stubSelectedShippingOptionId));
      expect(facade.selectedShippingOptionId$).toBeObservable(expected);
    });
  });

  describe('isShippingAddressValid$', () => {
  
    it('should return whether the shipping address given is valid', () => {
      const expected = cold('a', { a: stubIsShippingAddressValid });
      store.dispatch(new DaffUpdateShippingAddress(stubShippingAddress));
      expect(facade.isShippingAddressValid$).toBeObservable(expected);
    });
  });
});

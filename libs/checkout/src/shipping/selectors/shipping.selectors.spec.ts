import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store, select } from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { DaffUpdateShippingAddress, DaffSelectShippingOption } from '../actions/shipping.actions';
import { DaffShippingReducersState } from '../reducers/shipping-reducers.interface';
import { daffShippingReducers } from '../reducers/shipping-reducers';
import {
  selectShippingAddress,
  selectShippingOptionId,
  selectIsShippingAddressValid,
  selectShippingState
} from './shipping.selectors';

describe('Shipping Selectors', () => {
  let store: Store<DaffShippingReducersState>;
  let addressFactory: DaffAddressFactory;
  let stubShippingAddress: DaffAddress;
  let stubSelectedShippingOptionId: string;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(daffShippingReducers),
        })
      ]
    });

    addressFactory = TestBed.get(DaffAddressFactory);

    stubShippingAddress = addressFactory.create();
    stubSelectedShippingOptionId = '0';
    store = TestBed.get(Store);
    store.dispatch(new DaffUpdateShippingAddress(stubShippingAddress));
    store.dispatch(new DaffSelectShippingOption(stubSelectedShippingOptionId));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      const expectedShippingState = {
        shippingAddress: stubShippingAddress,
        selectedShippingOptionId: stubSelectedShippingOptionId
      }

      const selector = store.pipe(select(selectShippingState));
      const expected = cold('a', { a: expectedShippingState });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingAddress', () => {
    
    it('selects shippingAddress state', () => {
      const selector = store.pipe(select(selectShippingAddress));
      const expected = cold('a', { a: stubShippingAddress });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectShippingOptionId', () => {
    
    it('selects shippingOptionId state', () => {
      const selector = store.pipe(select(selectShippingOptionId));
      const expected = cold('a', { a: stubSelectedShippingOptionId });
      expect(selector).toBeObservable(expected);
    });
  });

  describe('selectIsShippingAddressValid', () => {
    
    it('selects isShippingAddressValid state', () => {
      const selector = store.pipe(select(selectIsShippingAddressValid));
      const expected = cold('a', { a: !!stubShippingAddress });
      expect(selector).toBeObservable(expected);
    });
  });
});

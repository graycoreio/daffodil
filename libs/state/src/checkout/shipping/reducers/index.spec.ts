import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffodilAddress } from '@daffodil/core';
import { DaffAddressFactory } from '@daffodil/core/testing';

import { UpdateShippingAddress, SelectShippingOption } from "../actions/shipping.actions";
import * as fromShipping from './index';

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let addressFactory: DaffAddressFactory;
  let stubShippingAddress: DaffodilAddress;
  let stubSelectedShippingOptionId: string;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    addressFactory = TestBed.get(DaffAddressFactory);

    stubShippingAddress = addressFactory.create();
    stubSelectedShippingOptionId = '0';
    store = TestBed.get(Store);
    store.dispatch(new UpdateShippingAddress(stubShippingAddress));
    store.dispatch(new SelectShippingOption(stubSelectedShippingOptionId));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      const expectedShippingState = {
        shippingAddress: stubShippingAddress,
        selectedShippingOptionId: stubSelectedShippingOptionId
      }

      store.pipe(select(fromShipping.shippingStateSelector)).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShippingAddressState', () => {
    
    it('selects shippingAddress state', () => {
      store.pipe(select(fromShipping.selectShippingAddressState)).subscribe((shippingAddress) => {
        expect(shippingAddress).toEqual(stubShippingAddress);
      });
    });
  });

  describe('selectShippingOptionState', () => {
    
    it('selects shippingOption state', () => {
      store.pipe(select(fromShipping.selectShippingOptionState)).subscribe((shippingOption) => {
        expect(shippingOption).toEqual(stubSelectedShippingOptionId);
      });
    });
  });

  describe('selectIsShippingAddressValid', () => {
    
    it('selects isShippingAddressValid state', () => {
      store.pipe(select(fromShipping.selectIsShippingAddressValid)).subscribe((isShippingAddressValid) => {
        expect(isShippingAddressValid).toBeTruthy();
      });
    });
  });
});

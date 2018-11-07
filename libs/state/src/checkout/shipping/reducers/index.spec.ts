import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store } from "@ngrx/store";

import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';

import { UpdateShippingAddress, SelectShippingOption } from "../actions/shipping.actions";
import * as fromShipping from './index';

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let daffodilAddressFactory: DaffodilAddressFactory = new DaffodilAddressFactory();
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

    stubShippingAddress = daffodilAddressFactory.create();
    stubSelectedShippingOptionId = '0';
    store = TestBed.get(Store);
    store.dispatch(new UpdateShippingAddress(stubShippingAddress));
    store.dispatch(new SelectShippingOption(stubSelectedShippingOptionId));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        shippingAddress: stubShippingAddress,
        selectedShippingOptionId: stubSelectedShippingOptionId
      }

      store.select(fromShipping.shippingStateSelector).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShippingAddressState', () => {
    
    it('selects shippingAddress state', () => {
      store.select(fromShipping.selectShippingAddressState).subscribe((shippingAddress) => {
        expect(shippingAddress).toEqual(stubShippingAddress);
      });
    });
  });

  describe('selectShippingOptionState', () => {
    
    it('selects shippingOption state', () => {
      store.select(fromShipping.selectShippingOptionState).subscribe((shippingOption) => {
        expect(shippingOption).toEqual(stubSelectedShippingOptionId);
      });
    });
  });

  describe('selectIsShippingAddressValid', () => {
    
    it('selects isShippingAddressValid state', () => {
      store.select(fromShipping.selectIsShippingAddressValid).subscribe((isShippingAddressValid) => {
        expect(isShippingAddressValid).toBeTruthy();
      });
    });
  });
});

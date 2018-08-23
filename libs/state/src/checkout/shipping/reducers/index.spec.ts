import { TestBed, async } from "@angular/core/testing";
import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';

import { UpdateShippingInfo, SelectShippingOption } from "../actions/shipping.actions";
import * as fromShipping from './index';

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let daffodilAddressFactory: DaffodilAddressFactory = new DaffodilAddressFactory();
  let stubShippingInfo: DaffodilAddress;
  let stubSelectedShippingOptionIndex: number;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    stubShippingInfo = daffodilAddressFactory.create();
    stubSelectedShippingOptionIndex = 0;
    store = TestBed.get(Store);
    store.dispatch(new UpdateShippingInfo(stubShippingInfo));
    store.dispatch(new SelectShippingOption(stubSelectedShippingOptionIndex));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        shippingInfo: stubShippingInfo,
        selectedShippingOptionIndex: stubSelectedShippingOptionIndex
      }

      store.pipe(select(fromShipping.shippingStateSelector)).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShippingInfoState', () => {
    
    it('selects shippingInfo state', () => {
      store.pipe(select(fromShipping.selectShippingInfoState)).subscribe((shippingInfo) => {
        expect(shippingInfo).toEqual(stubShippingInfo);
      });
    });
  });

  describe('selectShippingOptionState', () => {
    
    it('selects shippingOption state', () => {
      store.pipe(select(fromShipping.selectShippingOptionState)).subscribe((shippingOption) => {
        expect(shippingOption).toEqual(stubSelectedShippingOptionIndex);
      });
    });
  });

  describe('selectIsShippingInfoValid', () => {
    
    it('selects isShippingInfoValid state', () => {
      store.pipe(select(fromShipping.selectIsShippingInfoValid)).subscribe((isShippingInfoValid) => {
        expect(isShippingInfoValid).toBeTruthy();
      });
    });
  });
});

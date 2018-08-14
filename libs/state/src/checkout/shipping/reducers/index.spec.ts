import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromShipping from './index';
import { DaffodilAddress, DaffodilAddressFactory } from '@daffodil/core';
import { UpdateShippingInfo, SelectShippingOption } from "../actions/shipping.actions";

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let daffodilAddressFactory: DaffodilAddressFactory = new DaffodilAddressFactory();
  let stubShippingInfo: DaffodilAddress;
  let stubSelectedShippingOption: string;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    stubShippingInfo = daffodilAddressFactory.create();
    stubSelectedShippingOption = 'shippingOption';
    store = TestBed.get(Store);
    store.dispatch(new UpdateShippingInfo(stubShippingInfo));
    store.dispatch(new SelectShippingOption(stubSelectedShippingOption));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        shippingInfo: stubShippingInfo,
        selectedShippingOption: stubSelectedShippingOption
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
        expect(shippingOption).toEqual(stubSelectedShippingOption);
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

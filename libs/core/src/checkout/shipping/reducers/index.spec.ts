import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromShipping from './index';
import { ShippingFactory } from "../testing/factories/shipping.factory";
import { ShippingAddress } from '../models/shipping-address';
import { UpdateShippingInfo, UpdateShippingOption } from "../actions/shipping.actions";

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let shippingFactory: ShippingFactory = new ShippingFactory();
  let stubShippingInfo: ShippingAddress;
  let stubShippingOption: string;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    stubShippingInfo = shippingFactory.create();
    stubShippingOption = 'shippingOption';
    store = TestBed.get(Store);
    store.dispatch(new UpdateShippingInfo(stubShippingInfo));
    store.dispatch(new UpdateShippingOption(stubShippingOption));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        shippingInfo: stubShippingInfo,
        shippingOption: stubShippingOption
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
        expect(shippingOption).toEqual(stubShippingOption);
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

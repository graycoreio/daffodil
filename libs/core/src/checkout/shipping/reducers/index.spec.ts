import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromShipping from './index';
import { ShippingFactory } from "../testing/factories/shipping.factory";
import { ShippingAddress } from '../models/shipping-address';
import { UpdateShippingInfo } from "../actions/shipping.actions";

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let shippingFactory: ShippingFactory = new ShippingFactory();
  let stubShippingInfo: ShippingAddress;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    stubShippingInfo = shippingFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new UpdateShippingInfo(stubShippingInfo));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        shippingInfo: stubShippingInfo
      }

      store.pipe(select(fromShipping.shippingStateSelector)).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShippingInfoState', () => {
    
    it('selects shippingValue state', () => {
      store.pipe(select(fromShipping.selectShippingInfoState)).subscribe((shippingInfo) => {
        expect(shippingInfo).toEqual(stubShippingInfo);
      });
    });
  });
});

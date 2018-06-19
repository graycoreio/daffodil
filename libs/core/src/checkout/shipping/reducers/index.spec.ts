import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromShipping from './index';
import { ShippingFactory } from "../testing/factories/shipping.factory";
import { Address } from "../../../interfaces/models/address";
import { UpdateShipping } from "../actions/shipping.actions";

describe('selectShippingState', () => {

  let store: Store<fromShipping.ShippingState>;
  let shippingFactory: ShippingFactory = new ShippingFactory();
  let stubShipping: Address;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          shipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    stubShipping = shippingFactory.create();
    store = TestBed.get(Store);
    store.dispatch(new UpdateShipping(stubShipping));
  }));

  describe('selectShippingState', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        shipping: stubShipping
      }

      store.pipe(select(fromShipping.shippingStateSelector)).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShippingValueState', () => {
    
    it('selects shippingValue state', () => {
      store.pipe(select(fromShipping.selectShippingValueState)).subscribe((shipping) => {
        expect(shipping).toEqual(stubShipping);
      });
    });
  });
});

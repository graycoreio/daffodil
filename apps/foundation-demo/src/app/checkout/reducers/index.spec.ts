import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromShipping from './index';
import { SetShowShippingForm } from "../actions/shipping.actions";

describe('selectFoundationShippingState', () => {

  let store: Store<fromShipping.FoundationShippingState>;
  let stubShowShippingForm: boolean;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationShipping: combineReducers(fromShipping.reducers),
        })
      ]
    });

    stubShowShippingForm = true;
    store = TestBed.get(Store);
    store.dispatch(new SetShowShippingForm(stubShowShippingForm));
  }));

  describe('foundationShippingStateSelector', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        showShippingForm: stubShowShippingForm
      }

      store.pipe(select(fromShipping.foundationShippingStateSelector)).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShowShippingForm', () => {
    
    it('selects showShippingForm state', () => {
      store.pipe(select(fromShipping.selectShowShippingForm)).subscribe((showShippingForm) => {
        expect(showShippingForm).toEqual(stubShowShippingForm);
      });
    });
  });
});

import { TestBed, async } from "@angular/core/testing";

import { StoreModule, combineReducers, Store, select } from "@ngrx/store";

import * as fromCheckout from './index';
import { SetShowShippingForm } from "../actions/shipping.actions";

describe('selectFoundationCheckoutState', () => {

  let store: Store<fromCheckout.FoundationCheckoutState>;
  let stubShowShippingForm: boolean;
  let expectedShowPaymentView: boolean;
  let expectedShowPaymentForm: boolean;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          foundationCheckout: combineReducers(fromCheckout.reducers),
        })
      ]
    });

    stubShowShippingForm = true;
    expectedShowPaymentView = false;
    expectedShowPaymentForm = null;
    store = TestBed.get(Store);
    store.dispatch(new SetShowShippingForm(stubShowShippingForm));
  }));

  describe('foundationShippingStateSelector', () => {
    
    it('selects shipping state', () => {
      let expectedShippingState = {
        showShippingForm: stubShowShippingForm
      }

      store.pipe(select(fromCheckout.foundationShippingStateSelector)).subscribe((shippingState) => {
        expect(shippingState).toEqual(expectedShippingState);
      });
    });
  });

  describe('selectShowShippingForm', () => {
    
    it('selects showShippingForm state', () => {
      store.pipe(select(fromCheckout.selectShowShippingForm)).subscribe((showShippingForm) => {
        expect(showShippingForm).toEqual(stubShowShippingForm);
      });
    });
  });

  describe('foundationPaymentStateSelector', () => {
    
    it('selects payment state', () => {
      let expectedPaymentState = {
        showPaymentView: expectedShowPaymentView,
        showPaymentForm: expectedShowPaymentForm
      }

      store.pipe(select(fromCheckout.foundationPaymentStateSelector)).subscribe((paymentState) => {
        expect(paymentState).toEqual(expectedPaymentState);
      });
    });
  });

  describe('selectShowPaymentView', () => {
    
    it('selects showPaymentView state', () => {
      store.pipe(select(fromCheckout.selectShowPaymentView)).subscribe((showPaymentView) => {
        expect(showPaymentView).toEqual(expectedShowPaymentView);
      });
    });
  });

  describe('selectShowPaymentForm', () => {
    
    it('selects showPaymentForm state', () => {
      store.pipe(select(fromCheckout.selectShowPaymentForm)).subscribe((showPaymentForm) => {
        expect(showPaymentForm).toEqual(expectedShowPaymentForm);
      });
    });
  });
});

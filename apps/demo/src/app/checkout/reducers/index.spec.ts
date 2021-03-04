import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import {
  StoreModule,
  combineReducers,
  Store,
  select,
} from '@ngrx/store';

import { SetShowShippingForm } from '../actions/shipping.actions';
import * as fromCheckout from './index';

describe('selectDemoCheckoutState', () => {

  let store: Store<fromCheckout.DemoCheckoutState>;
  let stubShowShippingForm: boolean;
  let expectedShowPaymentView: boolean;
  let expectedShowPaymentForm: boolean;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          demoCheckout: combineReducers(fromCheckout.reducers),
        }),
      ],
    });

    stubShowShippingForm = true;
    expectedShowPaymentView = false;
    expectedShowPaymentForm = false;
    store = TestBed.inject(Store);
    store.dispatch(new SetShowShippingForm(stubShowShippingForm));
  }));

  describe('demoShippingStateSelector', () => {

    it('selects shipping state', () => {
      const expectedShippingState = {
        showShippingForm: stubShowShippingForm,
      };

      store.pipe(select(fromCheckout.demoShippingStateSelector)).subscribe((shippingState) => {
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

  describe('demoPaymentStateSelector', () => {

    it('selects payment state', () => {
      const expectedPaymentState = {
        showPaymentView: expectedShowPaymentView,
        showPaymentForm: expectedShowPaymentForm,
      };

      store.pipe(select(fromCheckout.demoPaymentStateSelector)).subscribe((paymentState) => {
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

  describe('demoCheckoutStateSelector', () => {

    it('selects checkout state', () => {
      const expectedCheckoutState = {
        enablePlaceOrderButton: false,
        showReviewView: false,
      };

      store.pipe(select(fromCheckout.demoCheckoutStateSelector)).subscribe((checkoutState) => {
        expect(checkoutState).toEqual(expectedCheckoutState);
      });
    });
  });

  describe('selectEnablePlaceOrderButton', () => {

    it('selects enablePlaceOrderButton state', () => {
      store.pipe(select(fromCheckout.selectEnablePlaceOrderButton)).subscribe((enablePlaceOrderButton) => {
        expect(enablePlaceOrderButton).toEqual(false);
      });
    });
  });

  describe('selectShowReviewView', () => {

    it('selects showReviewView state', () => {
      store.pipe(select(fromCheckout.selectShowReviewView)).subscribe((showReviewView) => {
        expect(showReviewView).toEqual(false);
      });
    });
  });
});

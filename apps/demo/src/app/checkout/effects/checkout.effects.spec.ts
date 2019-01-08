import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { CheckoutEffects } from './checkout.effects';
import { ToggleShowPaymentForm } from '../actions/payment.actions';
import { ShowReviewView, PlaceOrder, PlaceOrderSuccess } from '../actions/checkout.actions';
import { NavigatingToThankYou } from '../../thank-you/actions/thank-you.actions';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        CheckoutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CheckoutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when ToggleShowPaymentFormAction is triggered', () => {

    let expected;
    const toggleShowPaymentFormAction = new ToggleShowPaymentForm();

    beforeEach(() => {
      const showReviewViewAction = new ShowReviewView();
      actions$ = hot('--a', { a: toggleShowPaymentFormAction });
      expected = cold('--b', { b: showReviewViewAction });
    });
    
    it('should dispatch a ShowReviewView action', () => {
      expect(effects.onToggleShowPaymentForm$).toBeObservable(expected);
    });
  });

  describe('when PlaceOrderAction is triggered', () => {

    let expected;
    const placeOrderAction = new PlaceOrder();

    beforeEach(() => {
      const placeOrderSuccessAction = new PlaceOrderSuccess();
      actions$ = hot('--a', { a: placeOrderAction });
      expected = cold('--b', { b: placeOrderSuccessAction });
    });
    
    it('should dispatch a PlaceOrderSuccess action', () => {
      expect(effects.onPlaceOrder$).toBeObservable(expected);
    });
  });

  describe('when PlaceOrderSuccessAction is triggered', () => {

    let expected;
    const placeOrderSuccessAction = new PlaceOrderSuccess();

    beforeEach(() => {
      const navigatingToThankYou = new NavigatingToThankYou();
      actions$ = hot('--a', { a: placeOrderSuccessAction });
      expected = cold('--b', { b: navigatingToThankYou });
    });
    
    it('should dispatch a NavigatingToThankYou action', () => {
      expect(effects.onPlaceOrderSuccess$).toBeObservable(expected);
    });
  });
});

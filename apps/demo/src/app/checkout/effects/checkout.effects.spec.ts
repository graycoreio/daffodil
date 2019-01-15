import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { CheckoutEffects } from './checkout.effects';
import { ToggleShowPaymentForm } from '../actions/payment.actions';
import { ShowReviewView } from '../actions/checkout.actions';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;

  beforeEach(() => {

    TestBed.configureTestingModule({
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
    
    describe('show dispatch a ShowReviewView action', () => {

      beforeEach(() => {
        const showReviewViewAction = new ShowReviewView();
        actions$ = hot('--a', { a: toggleShowPaymentFormAction });
        expected = cold('--b', { b: showReviewViewAction });
      });
      
      it('should dispatch a ShowReviewView action', () => {
        expect(effects.onToggleShowPaymentForm$).toBeObservable(expected);
      });
    });
  });
});

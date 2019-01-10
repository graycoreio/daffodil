import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { CheckoutEffects } from './checkout.effects';
import { ToggleShowPaymentForm } from '../actions/payment.actions';
import { ShowReviewView, PlaceOrder, PlaceOrderSuccess } from '../actions/checkout.actions';
import { NavigatingToThankYou } from '../../thank-you/actions/thank-you.actions';
import { RouterTestingModule } from '@angular/router/testing';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';
import { Cart } from '@daffodil/core';
import { DaffCartFactory } from '@daffodil/core/testing';
import { Router } from '@angular/router';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;
  let stubCart: Cart;
  let cartFactory: DaffCartFactory;
  let router: Router;
  
  beforeEach(() => {
    
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        DaffDriverTestingModule
      ],
      providers: [
        CheckoutEffects,
        provideMockActions(() => actions$)
      ]
    });
    
    effects = TestBed.get(CheckoutEffects);
    router = TestBed.get(Router);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    spyOn(router, 'navigateByUrl');
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
    
    beforeEach(() => {
      const placeOrderAction = new PlaceOrder(stubCart.id);
      const placeOrderSuccessAction = new PlaceOrderSuccess(stubCart.id);
      actions$ = hot('--a', { a: placeOrderAction });
      expected = cold('--b', { b: placeOrderSuccessAction });
    });
    
    it('should dispatch a PlaceOrderSuccess action', () => {
      expect(effects.onPlaceOrder$).toBeObservable(expected);
    });
  });

  describe('when PlaceOrderSuccessAction is triggered', () => {

    let expected;
    
    beforeEach(() => {
      const placeOrderSuccessAction = new PlaceOrderSuccess(stubCart.id);
      const navigatingToThankYou = new NavigatingToThankYou();
      actions$ = hot('--a', { a: placeOrderSuccessAction });
      expected = cold('--b', { b: navigatingToThankYou });
    });

    it('should call router.navigateByUrl', () => {
      //the actual effect doesn't trigger unless the following test is run
      expect(effects.onPlaceOrderSuccess$).toBeObservable(expected);

      expect(router.navigateByUrl).toHaveBeenCalledWith('/thank-you/' + stubCart.id);
    });
    
    it('should dispatch a NavigatingToThankYou action', () => {
      expect(effects.onPlaceOrderSuccess$).toBeObservable(expected);
    });
  });
});

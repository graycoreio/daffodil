import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { PlaceOrder } from '@daffodil/state';
import { DaffCartFactory } from '@daffodil/core/testing';
import { Cart } from '@daffodil/cart';

import { CheckoutEffects } from './checkout.effects';
import { ToggleShowPaymentForm } from '../actions/payment.actions';
import { ShowReviewView } from '../actions/checkout.actions';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;
  let router: Router;
  const cartFactory: DaffCartFactory = new DaffCartFactory();
  let stubCart: Cart;
  
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

    stubCart = cartFactory.create();
    effects = TestBed.get(CheckoutEffects);
    router = TestBed.get(Router);
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
    const placeOrderAction = new PlaceOrder(stubCart);
    
    beforeEach(() => {
      actions$ = hot('--a', { a: placeOrderAction });
      expected = cold('--b', { b: placeOrderAction });
    });

    it('should call router.navigateByUrl', () => {
      //the actual effect doesn't trigger unless the following test is run
      expect(effects.onPlaceOrder$).toBeObservable(expected);

      expect(router.navigateByUrl).toHaveBeenCalledWith('/checkout/thank-you');
    });
  });
});

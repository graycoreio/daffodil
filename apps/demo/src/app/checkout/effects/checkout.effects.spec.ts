import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { PlaceOrder } from '@daffodil/checkout';

import { CheckoutEffects } from './checkout.effects';
import { ShowReviewView } from '../actions/checkout.actions';
import { ToggleShowPaymentForm } from '../actions/payment.actions';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;
  let router: Router;
  const cartFactory: DaffCartFactory = new DaffCartFactory();
  let stubCart: DaffCart;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      providers: [
        CheckoutEffects,
        provideMockActions(() => actions$),
      ],
    });

    stubCart = cartFactory.create();
    effects = TestBed.inject(CheckoutEffects);
    router = TestBed.inject(Router);
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

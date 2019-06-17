import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffCart, DaffCartDriver } from '@daffodil/cart';
import { DaffCartFactory, DaffTestingCartService } from '@daffodil/cart/testing';

import { OrderEffects } from './order.effects';
import { PlaceOrder, PlaceOrderSuccess, PlaceOrderFailure } from '../actions/order.actions';
import { DaffCheckoutServiceInterface } from '../../drivers/interfaces/checkout-service.interface';
import { DaffCartServiceInterface } from '@daffodil/cart';
import { DaffCheckoutDriver } from '../../drivers/injection-tokens/driver-checkout.token';
import { DaffTestingCheckoutService } from '@daffodil/checkout/testing';

describe('Daffodil | State | Order | OrderEffects', () => {
  let actions$: Observable<any>;
  let effects: OrderEffects;
  let daffCheckoutDriver: DaffCheckoutServiceInterface;
  let daffCartDriver: DaffCartServiceInterface;
  let stubCart: DaffCart;
  let cartFactory: DaffCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        OrderEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCheckoutDriver,
          useExisting: DaffTestingCheckoutService
        },
        {
          provide: DaffCartDriver,
          useExisting: DaffTestingCartService
        }
      ]
    });

    effects = TestBed.get(OrderEffects);
    cartFactory = TestBed.get(DaffCartFactory);
    daffCartDriver = TestBed.get(DaffCartDriver);
    daffCheckoutDriver = TestBed.get(DaffCheckoutDriver);

    stubCart = cartFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when PlaceOrderAction is triggered', () => {
    let expected;

    describe('and the call to CartService is successfull', () => {
      
      beforeEach(() => {
        spyOn(daffCheckoutDriver, 'placeOrder').and.returnValue(of(stubCart));
        const placeOrderAction = new PlaceOrder(stubCart);
        const placeOrderSuccessAction = new PlaceOrderSuccess(stubCart);
        actions$ = hot('--a', { a: placeOrderAction });
        expected = cold('--b', { b: placeOrderSuccessAction });
      });
      
      it('should dispatch a PlaceOrderSuccess action', () => {
        expect(effects.onPlaceOrder$).toBeObservable(expected);
      });
    });
    
    describe('and the call to CartService fails', () => {
      
      beforeEach(() => {
        const error = 'Failed to place order';
        const response = cold('#', {}, error);
        spyOn(daffCheckoutDriver, 'placeOrder').and.returnValue(response);
        const placeOrderAction = new PlaceOrder(stubCart);
        const placeOrderFailureAction = new PlaceOrderFailure(error);
        actions$ = hot('--a', { a: placeOrderAction });
        expected = cold('--b', { b: placeOrderFailureAction });
      });
      
      it('should dispatch a PlaceOrderFailure action', () => {
        expect(effects.onPlaceOrder$).toBeObservable(expected);
      });
    });
  });

  describe('when PlaceOrderSuccessAction is triggered', () => {
    
    let expected;
    const placeOrderSuccessAction = new PlaceOrderSuccess(stubCart);

    beforeEach(() => {
      spyOn(daffCartDriver, 'clear').and.returnValue(of());
      actions$ = hot('--a', { a: placeOrderSuccessAction });
      expected = cold('--b', { b: placeOrderSuccessAction });
    });
    
    it('should call driver.cartService.clear', () => {
      expect(effects.onPlaceOrderSuccess$).toBeObservable(expected);

      expect(daffCartDriver.clear).toHaveBeenCalled();
    });
  });
});

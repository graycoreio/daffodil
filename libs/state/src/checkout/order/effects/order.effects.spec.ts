import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { Cart } from '@daffodil/core';
import { DaffCartFactory } from '@daffodil/core/testing';
import { DaffDriver, DaffDriverInterface } from '@daffodil/driver';
import { DaffDriverTestingModule } from '@daffodil/driver/testing';

import { OrderEffects } from './order.effects';
import { PlaceOrder, PlaceOrderSuccess, PlaceOrderFailure } from '../actions/order.actions';

describe('Daffodil | State | Order | OrderEffects', () => {
  let actions$: Observable<any>;
  let effects: OrderEffects;
  let daffDriver: DaffDriverInterface;
  let stubCart: Cart;
  let cartFactory: DaffCartFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffDriverTestingModule
      ],
      providers: [
        OrderEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(OrderEffects);
    cartFactory = TestBed.get(DaffCartFactory);
    daffDriver = TestBed.get(DaffDriver);

    stubCart = cartFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when PlaceOrderAction is triggered', () => {
    let expected;

    describe('and the call to CartService is successfull', () => {
      
      beforeEach(() => {
        spyOn(daffDriver.checkoutService, 'placeOrder').and.returnValue(of(stubCart));
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
        spyOn(daffDriver.checkoutService, 'placeOrder').and.returnValue(response);
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
      spyOn(daffDriver.cartService, 'clear').and.returnValue(of());
      actions$ = hot('--a', { a: placeOrderSuccessAction });
      expected = cold('--b', { b: placeOrderSuccessAction });
    });
    
    it('should call driver.cartService.clear', () => {
      expect(effects.onPlaceOrderSuccess$).toBeObservable(expected);

      expect(daffDriver.cartService.clear).toHaveBeenCalled();
    });
  });
});

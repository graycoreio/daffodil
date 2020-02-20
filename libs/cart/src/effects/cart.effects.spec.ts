import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, EMPTY } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import { DaffCartEffects } from './cart.effects';
import {
  DaffCartLoad, DaffCartLoadSuccess, DaffCartLoadFailure, DaffAddToCart,
  DaffAddToCartSuccess, DaffAddToCartFailure, DaffCartReset, DaffCartResetSuccess, DaffCartResetFailure
} from '../actions/cart.actions';
import { DaffCart } from '../models/cart';
import { DaffCartFactory } from '../../testing/src/factories/cart.factory';
import { DaffTestingCartService } from '../../testing/src';
import {
	DaffCartServiceInterface,
	DaffCartDriver,
} from '../drivers/interfaces/cart-service.interface';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { Actions } from '@ngrx/effects';

describe('Daffodil | Cart | CartEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartEffects<DaffCart>;

  let mockCart: DaffCart;

  let cartFactory: DaffCartFactory;

  let daffDriver: DaffCartServiceInterface<DaffCart>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartDriver,
          useValue: new DaffTestingCartService(new DaffCartFactory())
        },
      ]
    });

    effects = TestBed.get<DaffCartEffects<DaffCart>>(DaffCartEffects);
    daffDriver = TestBed.get<DaffCartServiceInterface<DaffCart>>(DaffCartDriver);
    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);

    mockCart = cartFactory.create();
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartLoadAction is triggered', () => {

    let expected;
    const cartLoadAction = new DaffCartLoad();

    describe('and the call to CartService is successful', () => {

      beforeEach(() => {
        spyOn(daffDriver, 'get').and.returnValue(of(mockCart));
        const cartLoadSuccessAction = new DaffCartLoadSuccess(mockCart);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadSuccessAction });
      });

      it('should dispatch a CartLoadSuccess action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {

      beforeEach(() => {
        const error = 'Failed to load cart';
        const response = cold('#', {}, error);
        spyOn(daffDriver, 'get').and.returnValue(response);
        const cartLoadFailureAction = new DaffCartLoadFailure(error);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadFailureAction });
      });

      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.load$).toBeObservable(expected);
      });
    });
  });

  describe('when AddToCartAction is triggered', () => {

    let expected;
    let productId: string;
    const qty = 1;
    const addToCartAction = new DaffAddToCart({ productId, qty });

    beforeEach(() => {
      productId = '1001';
    });

    describe('and the call to CartService is successful', () => {

      beforeEach(() => {
        spyOn(daffDriver, 'addToCart').and.returnValue(of(mockCart));
        const addToCartSuccessAction = new DaffAddToCartSuccess(mockCart);
        actions$ = hot('--a', { a: addToCartAction });
        expected = cold('--b', { b: addToCartSuccessAction });
      });

      it('should dispatch a CartLoadSuccess action', () => {
        expect(effects.addToCart$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {

      beforeEach(() => {
        const error = 'Failed to add item to cart';
        const response = cold('#', {}, error);
        spyOn(daffDriver, 'addToCart').and.returnValue(response);
        const addToCartFailureAction = new DaffAddToCartFailure(error);
        actions$ = hot('--a', { a: addToCartAction });
        expected = cold('--b', { b: addToCartFailureAction });
      });

      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.addToCart$).toBeObservable(expected);
      });
    });
  });
  describe('when CartResetAction is triggered', () => {

    let expected;
    const resetAction = new DaffCartReset();

    describe('and the clear call to driver is successful', () => {

      beforeEach(() => {
        spyOn(daffDriver, 'clear').and.returnValue(of());
        const resetCartSuccessAction = new DaffCartResetSuccess();
        actions$ = hot('--a', { a: resetAction });
        expected = cold('---', { b: resetCartSuccessAction });
      });
      it('should return a DaffCartResetSucess action', () => {
        expect(effects.clearCart$).toBeObservable(expected);
      });
    });

    describe('and the clear call to driver fails', () => {
      beforeEach(() => {
        const error = 'Failed to clear the cart.';
        const response = cold('#', {}, error);
        spyOn(daffDriver, 'clear').and.returnValue(response);
        const resetCartFailureAction = new DaffCartResetFailure(error);
        actions$ = hot('--a', { a: resetAction });
        expected = cold('--b', { b: resetCartFailureAction });
      });
      it('should return a DaffCartResetFailure action', () => {
        expect(effects.clearCart$).toBeObservable(expected);
      });
    });
  });
});

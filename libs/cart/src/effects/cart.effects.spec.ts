import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
  DaffErrorStorageService,
  DaffStorageServiceError
} from '@daffodil/core'
import {
  DaffCart,
} from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartEffects } from './cart.effects';
import {
  DaffCartLoad,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffAddToCart,
  DaffAddToCartSuccess,
  DaffAddToCartFailure,
  DaffCartClear,
  DaffCartClearSuccess,
  DaffCartClearFailure,
  DaffCartCreate,
  DaffCartCreateSuccess,
  DaffCartCreateFailure,
  DaffCartStorageFailure
} from '../actions/public_api';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { DaffCartServiceInterface, DaffCartDriver } from '../drivers/interfaces/cart-service.interface';

describe('Daffodil | Cart | CartEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartEffects<DaffCart>;

  let mockCart: DaffCart;

  let cartFactory: DaffCartFactory;

  let daffDriverSpy: jasmine.SpyObj<DaffCartServiceInterface>;

  let daffCartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  const cartStorageFailureAction = new DaffCartStorageFailure('Cart Storage Failed');
  const throwStorageError = () => { throw new DaffStorageServiceError() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffCartEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartDriver,
          useValue: jasmine.createSpyObj('DaffCartDriver', ['get', 'create', 'clear', 'addToCart'])
        },
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['setCartId', 'getCartId'])
        }
      ]
    });

    effects = TestBed.get<DaffCartEffects<DaffCart>>(DaffCartEffects);
    daffDriverSpy = TestBed.get<DaffCartServiceInterface>(DaffCartDriver);
    daffCartStorageSpy = TestBed.get(DaffCartStorageService);
    cartFactory = TestBed.get<DaffCartFactory>(DaffCartFactory);

    mockCart = cartFactory.create();

    daffCartStorageSpy.getCartId.and.returnValue(String(mockCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartLoadAction is triggered', () => {
    let expected;
    const cartLoadAction = new DaffCartLoad();

    describe('and the call to CartService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.get.and.returnValue(of(mockCart));
        const cartLoadSuccessAction = new DaffCartLoadSuccess(mockCart);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadSuccessAction });
      });

      it('should dispatch a CartLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      beforeEach(() => {
        const error = 'Failed to load cart';
        const response = cold('#', {}, error);
        daffDriverSpy.get.and.returnValue(response);
        const cartLoadFailureAction = new DaffCartLoadFailure(error);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadFailureAction });
      });

      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.getCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCreateAction is triggered', () => {
    let expected;
    const cartCreateAction = new DaffCartCreate();

    describe('and the call to CartService is successful', () => {
      beforeEach(() => {
        daffDriverSpy.create.and.returnValue(of({id: mockCart.id}));
        const cartCreateSuccessAction = new DaffCartCreateSuccess({id: mockCart.id});
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartCreateSuccess action', () => {
        expect(effects.create$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      beforeEach(() => {
        const error = 'Failed to create cart';
        const response = cold('#', {}, error);
        daffDriverSpy.create.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartCreateFailure(error);
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateFailureAction });
      });

      it('should dispatch a CartCreateFailure action', () => {
        expect(effects.create$).toBeObservable(expected);
      });
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let expected;
    let cartCreateSuccessAction;

    beforeEach(() => {
      cartCreateSuccessAction = new DaffCartCreateSuccess({id: mockCart.id});
      actions$ = hot('--a', { a: cartCreateSuccessAction });
      expected = cold('---');
    });

    it('should set the cart ID in storage', () => {
      expect(effects.storeId$).toBeObservable(expected);
      expect(daffCartStorageSpy.setCartId).toHaveBeenCalledWith(String(mockCart.id));
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        daffCartStorageSpy.setCartId.and.callFake(throwStorageError)

        actions$ = hot('--a', { a: cartCreateSuccessAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.storeId$).toBeObservable(expected);
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
        daffDriverSpy.addToCart.and.returnValue(of(mockCart));
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
        daffDriverSpy.addToCart.and.returnValue(response);
        const addToCartFailureAction = new DaffAddToCartFailure(error);
        actions$ = hot('--a', { a: addToCartAction });
        expected = cold('--b', { b: addToCartFailureAction });
      });

      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.addToCart$).toBeObservable(expected);
      });
    });
  });

  describe('when CartClearAction is triggered', () => {
    let expected;
    const cartClearAction = new DaffCartClear();

    describe('and the clear call to driver is successful', () => {
      beforeEach(() => {
        daffDriverSpy.clear.and.returnValue(of(mockCart));
        const cartClearSuccessAction = new DaffCartClearSuccess(mockCart);
        actions$ = hot('--a', { a: cartClearAction });
        expected = cold('--b', { b: cartClearSuccessAction });
      });
      it('should return a DaffCartClearSucess action', () => {
        expect(effects.clear$).toBeObservable(expected);
      });
    });

    describe('and the clear call to driver fails', () => {
      beforeEach(() => {
        const error = 'Failed to clear the cart.';
        const response = cold('#', {}, error);
        daffDriverSpy.clear.and.returnValue(response);
        const cartClearFailureAction = new DaffCartClearFailure(error);
        actions$ = hot('--a', { a: cartClearAction });
        expected = cold('--b', { b: cartClearFailureAction });
      });
      it('should return a DaffCartClearFailure action', () => {
        expect(effects.clear$).toBeObservable(expected);
      });
    });
  });
});

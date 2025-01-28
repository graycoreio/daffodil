import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
} from 'rxjs';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartDriver,
  DaffProductOutOfStockError,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
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
  DaffCartStorageFailure,
  DaffResolveCartSuccess,
  DaffCartLoadPartialSuccess,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { DaffCartEffects } from './cart.effects';

describe('@daffodil/cart/state | DaffCartEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartEffects<DaffCart>;

  let mockCart: DaffCart;

  let cartFactory: DaffCartFactory;

  let driver: DaffCartServiceInterface;
  let daffCartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy<DaffCartServiceInterface['get']>;
  let driverCreateSpy: jasmine.Spy<DaffCartServiceInterface['create']>;
  let driverClearSpy: jasmine.Spy<DaffCartServiceInterface['clear']>;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;
  let setCartIdSpy: jasmine.Spy;

  const cartStorageFailureAction = new DaffCartStorageFailure([daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.'))]);
  const throwStorageError = () => {
    throw new DaffStorageServiceError('An error occurred during storage.');
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartEffects);
    driver = TestBed.inject(DaffCartDriver);
    daffCartStorageService = TestBed.inject(DaffCartStorageService);
    cartFactory = TestBed.inject(DaffCartFactory);

    mockCart = cartFactory.create();

    driverGetSpy = spyOn(driver, 'get');
    driverCreateSpy = spyOn(driver, 'create');
    driverClearSpy = spyOn(driver, 'clear');
    setCartIdSpy = spyOn(daffCartStorageService, 'setCartId');
    getCartIdSpy = spyOn(daffCartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(mockCart.id);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when CartLoadAction is triggered', () => {
    let expected;
    const cartLoadAction = new DaffCartLoad();

    describe('and the call to CartService is successful', () => {
      beforeEach(() => {
        driverGetSpy.and.returnValue(of({
          response: mockCart,
          errors: [],
        }));
        const cartLoadSuccessAction = new DaffCartLoadSuccess(mockCart);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadSuccessAction });
      });

      it('should dispatch a CartLoadSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService is partially successful', () => {
      let oosError: DaffProductOutOfStockError;

      beforeEach(() => {
        oosError = new DaffProductOutOfStockError('Some of the cart items are out of stock');
        oosError.recoverable = true;
        driverGetSpy.and.returnValue(of({
          response: mockCart,
          errors: [oosError],
        }));
        const cartLoadPartialSuccessAction = new DaffCartLoadPartialSuccess(mockCart, [daffTransformErrorToStateError(oosError)]);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadPartialSuccessAction });
      });

      it('should dispatch a DaffCartLoadPartialSuccess action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
        const response = cold('#', {}, error);
        driverGetSpy.and.returnValue(response);
        const cartLoadFailureAction = new DaffCartLoadFailure([error]);
        actions$ = hot('--a', { a: cartLoadAction });
        expected = cold('--b', { b: cartLoadFailureAction });
      });

      it('should dispatch a CartLoadFailure action', () => {
        expect(effects.get$).toBeObservable(expected);
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);

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
        driverCreateSpy.and.returnValue(of({ id: mockCart.id }));
        const cartCreateSuccessAction = new DaffCartCreateSuccess({ id: mockCart.id });
        actions$ = hot('--a', { a: cartCreateAction });
        expected = cold('--b', { b: cartCreateSuccessAction });
      });

      it('should dispatch a CartCreateSuccess action', () => {
        expect(effects.create$).toBeObservable(expected);
      });
    });

    describe('and the call to CartService fails', () => {
      beforeEach(() => {
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to create cart' };
        const response = cold('#', {}, error);
        driverCreateSpy.and.returnValue(response);
        const cartCreateFailureAction = new DaffCartCreateFailure([error]);
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
      cartCreateSuccessAction = new DaffCartCreateSuccess({ id: mockCart.id });
      actions$ = hot('--a', { a: cartCreateSuccessAction });
      expected = cold('---');
    });

    it('should set the cart ID in storage', () => {
      expect(effects.storeId$).toBeObservable(expected);
      expect(setCartIdSpy).toHaveBeenCalledWith(mockCart.id);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        setCartIdSpy.and.callFake(throwStorageError);

        actions$ = hot('--a', { a: cartCreateSuccessAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.storeId$).toBeObservable(expected);
      });
    });
  });

  describe('when ResolveCartSuccessAction is triggered', () => {
    let expected;
    let cartCreateSuccessAction;

    beforeEach(() => {
      cartCreateSuccessAction = new DaffResolveCartSuccess(mockCart);
      actions$ = hot('--a', { a: cartCreateSuccessAction });
      expected = cold('---');
    });

    it('should set the cart ID in storage', () => {
      expect(effects.storeId$).toBeObservable(expected);
      expect(setCartIdSpy).toHaveBeenCalledWith(mockCart.id);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        setCartIdSpy.and.callFake(throwStorageError);

        actions$ = hot('--a', { a: cartCreateSuccessAction });
        expected = cold('--b', { b: cartStorageFailureAction });
      });

      it('should return a DaffCartStorageFailure', () => {
        expect(effects.storeId$).toBeObservable(expected);
      });
    });
  });

  describe('when CartClearAction is triggered', () => {
    let expected;
    const cartClearAction = new DaffCartClear();

    describe('and the clear call to driver is successful', () => {
      beforeEach(() => {
        driverClearSpy.and.returnValue(of(mockCart));
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
        const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to clear the cart.' };
        const response = cold('#', {}, error);
        driverClearSpy.and.returnValue(response);
        const cartClearFailureAction = new DaffCartClearFailure([error]);
        actions$ = hot('--a', { a: cartClearAction });
        expected = cold('--b', { b: cartClearFailureAction });
      });

      it('should return a DaffCartClearFailure action', () => {
        expect(effects.clear$).toBeObservable(expected);
      });
    });
  });
});

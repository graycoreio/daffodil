import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

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
    const cartLoadAction = new DaffCartLoad();

    describe('and the call to CartService is successful', () => {
      it('should dispatch a CartLoadSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverGetSpy.and.returnValue(of({
            response: mockCart,
            errors: [],
          }));
          const cartLoadSuccessAction = new DaffCartLoadSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartLoadSuccessAction });
        });
      });
    });

    describe('and the call to CartService is partially successful', () => {
      it('should dispatch a DaffCartLoadPartialSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const oosError = new DaffProductOutOfStockError('Some of the cart items are out of stock');
          oosError.recoverable = true;
          driverGetSpy.and.returnValue(of({
            response: mockCart,
            errors: [oosError],
          }));
          const cartLoadPartialSuccessAction = new DaffCartLoadPartialSuccess(mockCart, [daffTransformErrorToStateError(oosError)]);
          actions$ = helpers.hot('--a', { a: cartLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartLoadPartialSuccessAction });
        });
      });
    });

    describe('and the call to CartService fails', () => {
      it('should dispatch a CartLoadFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to load cart' };
          const response = helpers.cold<any>('#', {}, error);
          driverGetSpy.and.returnValue(response);
          const cartLoadFailureAction = new DaffCartLoadFailure([error]);
          actions$ = helpers.hot('--a', { a: cartLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartLoadFailureAction });
        });
      });
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        getCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartLoadAction });
          helpers.expectObservable(effects.get$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('when CartCreateAction is triggered', () => {
    const cartCreateAction = new DaffCartCreate();

    describe('and the call to CartService is successful', () => {
      it('should dispatch a CartCreateSuccess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverCreateSpy.and.returnValue(of({ id: mockCart.id }));
          const cartCreateSuccessAction = new DaffCartCreateSuccess({ id: mockCart.id });
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.create$).toBe('--b', { b: cartCreateSuccessAction });
        });
      });
    });

    describe('and the call to CartService fails', () => {
      it('should dispatch a CartCreateFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to create cart' };
          const response = helpers.cold<any>('#', {}, error);
          driverCreateSpy.and.returnValue(response);
          const cartCreateFailureAction = new DaffCartCreateFailure([error]);
          actions$ = helpers.hot('--a', { a: cartCreateAction });
          helpers.expectObservable(effects.create$).toBe('--b', { b: cartCreateFailureAction });
        });
      });
    });
  });

  describe('when CartCreateSuccessAction is triggered', () => {
    let cartCreateSuccessAction;

    beforeEach(() => {
      cartCreateSuccessAction = new DaffCartCreateSuccess({ id: mockCart.id });
    });

    it('should set the cart ID in storage', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: cartCreateSuccessAction });
        helpers.expectObservable(effects.storeId$).toBe('---');
      });
      expect(setCartIdSpy).toHaveBeenCalledWith(mockCart.id);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        setCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartCreateSuccessAction });
          helpers.expectObservable(effects.storeId$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('when ResolveCartSuccessAction is triggered', () => {
    let cartCreateSuccessAction;

    beforeEach(() => {
      cartCreateSuccessAction = new DaffResolveCartSuccess(mockCart);
    });

    it('should set the cart ID in storage', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: cartCreateSuccessAction });
        helpers.expectObservable(effects.storeId$).toBe('---');
      });
      expect(setCartIdSpy).toHaveBeenCalledWith(mockCart.id);
    });

    describe('and the storage service throws an error', () => {
      beforeEach(() => {
        setCartIdSpy.and.callFake(throwStorageError);
      });

      it('should return a DaffCartStorageFailure', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: cartCreateSuccessAction });
          helpers.expectObservable(effects.storeId$).toBe('--b', { b: cartStorageFailureAction });
        });
      });
    });
  });

  describe('when CartClearAction is triggered', () => {
    const cartClearAction = new DaffCartClear();

    describe('and the clear call to driver is successful', () => {
      it('should return a DaffCartClearSucess action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          driverClearSpy.and.returnValue(of(mockCart));
          const cartClearSuccessAction = new DaffCartClearSuccess(mockCart);
          actions$ = helpers.hot('--a', { a: cartClearAction });
          helpers.expectObservable(effects.clear$).toBe('--b', { b: cartClearSuccessAction });
        });
      });
    });

    describe('and the clear call to driver fails', () => {
      it('should return a DaffCartClearFailure action', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          const error: DaffStateError = { code: 'code', recoverable: false, message: 'Failed to clear the cart.' };
          const response = helpers.cold<any>('#', {}, error);
          driverClearSpy.and.returnValue(response);
          const cartClearFailureAction = new DaffCartClearFailure([error]);
          actions$ = helpers.hot('--a', { a: cartClearAction });
          helpers.expectObservable(effects.clear$).toBe('--b', { b: cartClearFailureAction });
        });
      });
    });
  });
});

import { PLATFORM_ID } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartStorageService,
  DaffCartResolutionError ,
  DaffCartStorageResolutionError ,
  DaffCartServerSideResolutionError,
} from '@daffodil/cart';
import {
  DaffProductOutOfStockError,
  DaffCartDriverResolveService,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffResolveCart,
  DaffResolveCartFailure,
  DaffResolveCartSuccess,
  DaffResolveCartServerSide,
  DaffResolveCartPartialSuccess,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffStorageServiceError,
  DaffServerSideStorageError,
  DaffError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffCartResolverEffects } from './cart-resolver.effects';

describe('@daffodil/cart/state | DaffCartResolverEffects | in the browser', () => {
  let actions$: Observable<any>;
  let effects: DaffCartResolverEffects;

  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;

  let cartResolverSpy: jasmine.SpyObj<DaffCartDriverResolveService>;
  let cartStorageService: DaffCartStorageService;
  let getCartIdSpy: jasmine.Spy<DaffCartStorageService['getCartId']>;

  beforeEach(() => {
    cartResolverSpy = jasmine.createSpyObj('DaffCartDriverResolveService', ['getCartOrFail']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartResolverEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartDriverResolveService,
          useValue: cartResolverSpy,
        },
      ],
    });

    effects = TestBed.inject(DaffCartResolverEffects);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartStorageService = TestBed.inject(DaffCartStorageService);

    stubCart = cartFactory.create();
    getCartIdSpy = spyOn(cartStorageService, 'getCartId');

    getCartIdSpy.and.returnValue(stubCart.id);
    cartResolverSpy.getCartOrFail.and.returnValue(of({
      response: stubCart,
      errors: [],
    }));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('when there is a cart ID in storage', () => {
    beforeEach(() => {
      getCartIdSpy.and.returnValue(stubCart.id);
    });

    it('should initiate cart resolution', () => {
      expect(effects.ngrxOnInitEffects() instanceof DaffResolveCart).toBeTrue();
    });
  });

  describe('when there is a not cart ID in storage', () => {
    beforeEach(() => {
      getCartIdSpy.and.returnValue(null);
    });

    it('should not initiate cart resolution', () => {
      expect(effects.ngrxOnInitEffects() instanceof DaffResolveCart).toBeFalse();
    });
  });

  describe('onResolveCart() | when DaffResolveCartSuccess is dispatched', () => {
    it('should emit nothing', () => {
      const testScheduler = new TestScheduler((actual, expected) => {
        expect(actual).toEqual(expected);
      });
      testScheduler.run(helpers => {
        actions$ = helpers.hot('--a', { a: new DaffResolveCartSuccess(stubCart) });
        helpers.expectObservable(effects.onResolveCart()).toBe('---');
      });
    });
  });

  describe('onResolveCart() | when DaffResolveCart is dispatched', () => {
    describe('when cart resolution is attempted on the server', () => {
      let errorMessage: string;

      beforeEach(() => {
        errorMessage = 'Resolution failed server side.';
        cartResolverSpy.getCartOrFail.and.returnValue(throwError(() =>
          new DaffServerSideStorageError(
            'Resolution failed server side.',
          ),
        ));
      });

      it('should emit an action indicating that server side resolution occurred', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffResolveCart() });
          const error = new DaffCartServerSideResolutionError(errorMessage);
          const resolveCartServerSide = new DaffResolveCartServerSide([daffTransformErrorToStateError(error)]);
          helpers.expectObservable(effects.onResolveCart()).toBe('--a', {
            a: resolveCartServerSide,
          });
        });
      });
    });

    describe('when the storage service throws an error while fetching the cart ID', () => {
      let errorMessage: string;

      beforeEach(() => {
        errorMessage = 'An error occurred during storage.';
        cartResolverSpy.getCartOrFail.and.returnValue(throwError(() =>
          new DaffStorageServiceError(errorMessage),
        ));
      });

      it('should indicate cart resolution failure due to cart ID retrieval', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffResolveCart() });
          const error = new DaffCartStorageResolutionError(errorMessage);
          const resolveCartFailureAction = new DaffResolveCartFailure([
            daffTransformErrorToStateError(error),
          ]);
          helpers.expectObservable(effects.onResolveCart()).toBe('--b', {
            b: resolveCartFailureAction,
          });
        });
      });
    });

    describe('when the cart fails to resolve', () => {
      const errorMessage = 'error';

      describe('and a daffodil error is thrown', () => {
        it('should indicate failed cart resolution while preserving the original error', () => {
          const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
          });
          testScheduler.run(helpers => {
            actions$ = helpers.hot('--a', { a: new DaffResolveCart() });
            const error: DaffError = new DaffProductOutOfStockError(errorMessage);
            const response = helpers.cold<any>(
              '#',
              {},
              error,
            );
            cartResolverSpy.getCartOrFail.and.returnValue(response);

            const resolveCartFailureAction = new DaffResolveCartFailure([
              daffTransformErrorToStateError(error),
            ]);
            helpers.expectObservable(effects.onResolveCart()).toBe('--b', {
              b: resolveCartFailureAction,
            });
          });
        });
      });

      it('should indicate failed cart resolution', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffResolveCart() });
          const error: DaffError = new DaffCartResolutionError(errorMessage);
          const response = helpers.cold<any>(
            '#',
            {},
            error,
          );
          cartResolverSpy.getCartOrFail.and.returnValue(response);

          const resolveCartFailureAction = new DaffResolveCartFailure([
            daffTransformErrorToStateError(error),
          ]);
          helpers.expectObservable(effects.onResolveCart()).toBe('--b', {
            b: resolveCartFailureAction,
          });
        });
      });
    });

    describe('and the cart resolves successfully', () => {
      beforeEach(() => {
        cartResolverSpy.getCartOrFail.and.returnValue(of({
          response: stubCart,
          errors: [],
        }));
      });

      it('should indicate that a cart has resolved successfully', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffResolveCart() });
          const resolveCartSuccessAction = new DaffResolveCartSuccess(stubCart);
          helpers.expectObservable(effects.onResolveCart()).toBe('--b', {
            b: resolveCartSuccessAction,
          });
        });
      });
    });

    describe('and the cart resolves partially successfully', () => {
      let oosError: DaffProductOutOfStockError;

      beforeEach(() => {
        oosError = new DaffProductOutOfStockError('Some of the cart items are out of stock');
        oosError.recoverable = true;
        cartResolverSpy.getCartOrFail.and.returnValue(of({
          response: stubCart,
          errors: [oosError],
        }));
      });

      it('should indicate that a cart has resolved partially successfully', () => {
        const testScheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });
        testScheduler.run(helpers => {
          actions$ = helpers.hot('--a', { a: new DaffResolveCart() });
          const resolveCartSuccessAction = new DaffResolveCartPartialSuccess(
            stubCart,
            [daffTransformErrorToStateError(oosError)],
          );
          helpers.expectObservable(effects.onResolveCart()).toBe('--b', {
            b: resolveCartSuccessAction,
          });
        });
      });
    });
  });
});

describe('@daffodil/cart/state | DaffCartResolverEffects | on the server', () => {
  let actions$: Observable<any>;
  let effects: DaffCartResolverEffects;

  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;

  let cartResolverSpy: jasmine.SpyObj<DaffCartDriverResolveService>;
  let cartStorageService: DaffCartStorageService;
  let getCartIdSpy: jasmine.Spy;

  beforeEach(() => {
    cartResolverSpy = jasmine.createSpyObj('DaffCartDriverResolveService', ['getCartOrFail']);

    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartResolverEffects,
        provideMockActions(() => actions$),
        {
          provide: DaffCartDriverResolveService,
          useValue: cartResolverSpy,
        },
        {
          provide: PLATFORM_ID,
          useValue: 'server',
        },
      ],
    });

    effects = TestBed.inject(DaffCartResolverEffects);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartStorageService = TestBed.inject(DaffCartStorageService);

    stubCart = cartFactory.create();
    getCartIdSpy = spyOn(cartStorageService, 'getCartId');

    getCartIdSpy.and.returnValue(stubCart.id);
    cartResolverSpy.getCartOrFail.and.returnValue(of({
      response: stubCart,
      errors: [],
    }));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should should not call the cart storage service', () => {
    effects.ngrxOnInitEffects();
    expect(getCartIdSpy).not.toHaveBeenCalled();
  });

  it('should not initiate cart resolution', () => {
    expect(effects.ngrxOnInitEffects() instanceof DaffResolveCart).toBeFalse();
  });
});

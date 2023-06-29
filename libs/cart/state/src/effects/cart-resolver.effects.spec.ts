import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  hot,
  cold,
} from 'jasmine-marbles';
import {
  Observable,
  of,
  throwError,
} from 'rxjs';

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffCartResolutionError } from '@daffodil/cart';
import { DaffCartStorageResolutionError } from '@daffodil/cart';
import { DaffCartServerSideResolutionError } from '@daffodil/cart';
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

describe('@daffodil/cart/state | DaffCartResolverEffects', () => {
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
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffResolveCartSuccess(stubCart) });
    });

    it('should emit nothing', () => {
      const expected = cold('---');

      expect(effects.onResolveCart()).toBeObservable(expected);
    });
  });

  describe('onResolveCart() | when DaffResolveCart is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffResolveCart() });
    });

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
        const error = new DaffCartServerSideResolutionError(errorMessage);
        const resolveCartServerSide = new DaffResolveCartServerSide(daffTransformErrorToStateError(error));
        const expected = cold('--a', {
          a: resolveCartServerSide,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
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
        const error = new DaffCartStorageResolutionError(errorMessage);
        const resolveCartFailureAction = new DaffResolveCartFailure([
          daffTransformErrorToStateError(error),
        ]);
        const expected = cold('--b', {
          b: resolveCartFailureAction,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
      });
    });

    describe('when the cart fails to resolve', () => {
      let errorMessage: string;
      let error: DaffError;

      beforeEach(() => {
        errorMessage = 'error';
        error = new DaffCartResolutionError(errorMessage);
        const response = cold(
          '#',
          {},
          error,
        );
        cartResolverSpy.getCartOrFail.and.returnValue(response);
      });

      describe('and a daffodil error is thrown', () => {

        beforeEach(() => {
          error = new DaffProductOutOfStockError(errorMessage);
          const response = cold(
            '#',
            {},
            error,
          );
          cartResolverSpy.getCartOrFail.and.returnValue(response);
        });

        it('should indicate failed cart resolution while preserving the original error', () => {
          const resolveCartFailureAction = new DaffResolveCartFailure([
            daffTransformErrorToStateError(error),
          ]);
          const expected = cold('--b', {
            b: resolveCartFailureAction,
          });

          expect(effects.onResolveCart()).toBeObservable(expected);
        });
      });

      it('should indicate failed cart resolution', () => {
        const resolveCartFailureAction = new DaffResolveCartFailure([
          daffTransformErrorToStateError(error),
        ]);
        const expected = cold('--b', {
          b: resolveCartFailureAction,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
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
        const resolveCartSuccessAction = new DaffResolveCartSuccess(stubCart);
        const expected = cold('--b', {
          b: resolveCartSuccessAction,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
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
        const resolveCartSuccessAction = new DaffResolveCartPartialSuccess(
          stubCart,
          [daffTransformErrorToStateError(oosError)],
        );
        const expected = cold('--b', {
          b: resolveCartSuccessAction,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
      });
    });
  });
});

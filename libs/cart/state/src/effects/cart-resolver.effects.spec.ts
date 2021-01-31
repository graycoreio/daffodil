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
  DaffCartNotFoundOrCreatedResolutionError,
} from '@daffodil/cart';
import { DaffCartResolutionError } from '@daffodil/cart';
import { DaffCartStorageResolutionError } from '@daffodil/cart';
import { DaffCartServerSideResolutionError } from '@daffodil/cart';
import {
  DaffCartServiceInterface,
  DaffCartDriver,
  DaffCartNotFoundError,
  DaffCartInvalidAPIResponseError,
} from '@daffodil/cart/driver';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';
import {
  DaffResolveCart,
  DaffResolveCartFailure,
  DaffResolveCartSuccess,
  DaffResolveCartServerSide,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  DaffStorageServiceError,
  DaffServerSideStorageError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';

import { DaffCartResolverEffects } from './cart-resolver.effects';

describe('DaffCartResolverEffects', () => {
  let actions$: Observable<any>;
  let effects: DaffCartResolverEffects;

  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;

  let driver: DaffCartServiceInterface;
  let cartStorageService: DaffCartStorageService;

  let driverGetSpy: jasmine.Spy;
  let driverCreateSpy: jasmine.Spy;
  let getCartIdSpy: jasmine.Spy;

  const throwStorageError = message => {
    throw new DaffStorageServiceError(message);
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffTestingCartDriverModule.forRoot(),
      ],
      providers: [
        DaffCartResolverEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(DaffCartResolverEffects);
    driver = TestBed.inject(DaffCartDriver);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartStorageService = TestBed.inject(DaffCartStorageService);

    stubCart = cartFactory.create();

    driverGetSpy = spyOn(driver, 'get');
    driverCreateSpy = spyOn(driver, 'create');
    getCartIdSpy = spyOn(cartStorageService, 'getCartId');
    getCartIdSpy.and.returnValue(String(stubCart.id));
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should initiate cart resolution', () => {
    expect(effects.ngrxOnInitEffects() instanceof DaffResolveCart).toEqual(
      true,
    );
  });

  describe('onResolveCart() | when DaffResolveCart is dispatched', () => {
    beforeEach(() => {
      actions$ = hot('--a', { a: new DaffResolveCart() });
    });

    describe('when cart resolution is attempted on the server', () => {
      let errorMessage: string;

      beforeEach(() => {
        errorMessage = 'Resolution failed server side.';
        getCartIdSpy.and.callFake(() => {
          throw new DaffServerSideStorageError(
            'Resolution failed server side.',
          );
        });
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
        getCartIdSpy.and.callFake(() => throwStorageError(errorMessage));
      });

      it('should indicate cart resolution failure due to cart ID retrieval', () => {
        const error = new DaffCartStorageResolutionError(errorMessage);
        const resolveCartFailureAction = new DaffResolveCartFailure(
          daffTransformErrorToStateError(error),
        );
        const expected = cold('--b', {
          b: resolveCartFailureAction,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
      });
    });

    describe('when there is not a cart ID in storage', () => {
      beforeEach(() => {
        getCartIdSpy.and.returnValue(undefined);
        driverCreateSpy.and.returnValue(of({ id: stubCart.id }));
        driverGetSpy.and.returnValue(of(stubCart));
      });

      describe('and when creating a cart fails', () => {
        let errorMessage: string;

        beforeEach(() => {
          errorMessage = 'error';
          const response = cold(
            '#',
            {},
            new DaffCartInvalidAPIResponseError(errorMessage),
          );
          driverCreateSpy.and.returnValue(response);
        });

        it('should dispatch DaffResolveCartFailure action', () => {
          const error = new DaffCartResolutionError(errorMessage);
          const resolveCartFailureAction = new DaffResolveCartFailure(
            daffTransformErrorToStateError(error),
          );
          const expected = cold('--b', {
            b: resolveCartFailureAction,
          });

          expect(effects.onResolveCart()).toBeObservable(expected);
        });
      });

      it('should create a cart', () => {
        const resolveCartSuccessAction = new DaffResolveCartSuccess(stubCart);
        const expected = cold('--b', {
          b: resolveCartSuccessAction,
        });

        expect(effects.onResolveCart()).toBeObservable(expected);
        expect(driverCreateSpy).toHaveBeenCalled();
      });
    });

    describe('when there is a cart ID in storage', () => {
      let cartId;

      beforeEach(() => {
        cartId = stubCart.id.toString();
        getCartIdSpy.and.returnValue(cartId);
      });

      describe('and the get call fails', () => {
        let errorMessage: string;

        beforeEach(() => {
          errorMessage = 'error';
          const response = cold(
            '#',
            {},
            new DaffCartInvalidAPIResponseError(errorMessage),
          );
          driverGetSpy.and.returnValue(response);
        });

        it('should indicate failed cart resolution', () => {
          const error = new DaffCartResolutionError(errorMessage);
          const resolveCartFailureAction = new DaffResolveCartFailure(
            daffTransformErrorToStateError(error),
          );
          const expected = cold('--b', {
            b: resolveCartFailureAction,
          });

          expect(effects.onResolveCart()).toBeObservable(expected);
        });
      });

      describe('and the cart is not found when attempting to load it', () => {
        const newCartId = 'newCartId';

        beforeEach(() => {
          const response = cold('#', {}, new DaffCartNotFoundError('error'));
          driverGetSpy.withArgs(cartId).and.returnValue(response);
          driverCreateSpy.and.returnValue(of({ id: newCartId }));
        });

        it('should create a new cart', () => {
          const expected = cold('--b', {
            b: jasmine.anything(),
          });

          expect(effects.onResolveCart()).toBeObservable(expected);
          expect(driverCreateSpy).toHaveBeenCalled();
        });

        describe('and the driver calls succeed', () => {
          beforeEach(() => {
            driverGetSpy.withArgs(newCartId).and.returnValue(of(stubCart));
          });

          it('should indicate successful cart resolution', () => {
            const resolveCartSuccessAction = new DaffResolveCartSuccess(
              stubCart,
            );
            const expected = cold('--b', {
              b: resolveCartSuccessAction,
            });

            expect(effects.onResolveCart()).toBeObservable(expected);
          });
        });

        describe('and the create call fails', () => {
          let errorMessage: string;

          beforeEach(() => {
            errorMessage = 'error';
            const response = cold(
              '#',
              {},
              new DaffCartInvalidAPIResponseError(errorMessage),
            );
            driverCreateSpy.and.returnValue(response);
          });

          it('should indicate failed cart resolution after attempting to load and create a cart', () => {
            const error = new DaffCartNotFoundOrCreatedResolutionError(errorMessage);
            const resolveCartFailureAction = new DaffResolveCartFailure(
              daffTransformErrorToStateError(error),
            );
            const expected = cold('--b', {
              b: resolveCartFailureAction,
            });

            expect(effects.onResolveCart()).toBeObservable(expected);
          });
        });

        describe('should indicate failed cart resolution after attempting to load and create a cart', () => {
          let errorMessage: string;

          beforeEach(() => {
            errorMessage = 'error';
            const response = cold('#', {}, new DaffCartNotFoundError(errorMessage));
            driverCreateSpy.and.returnValue(of({ id: newCartId }));
            driverGetSpy.withArgs(newCartId).and.returnValue(response);
          });

          it('should indicate failed cart resolution', () => {
            const error = new DaffCartNotFoundOrCreatedResolutionError(errorMessage);
            const resolveCartFailureAction = new DaffResolveCartFailure(
              daffTransformErrorToStateError(error),
            );
            const expected = cold('--b', {
              b: resolveCartFailureAction,
            });

            expect(effects.onResolveCart()).toBeObservable(expected);
          });
        });
      });

      describe('and the cart loads successfully', () => {
        beforeEach(() => {
          driverGetSpy.and.returnValue(of(stubCart));
        });

        it('should not attempt to create a cart', () => {
          const resolveCartSuccessAction = new DaffResolveCartSuccess(stubCart);
          const expected = cold('--b', {
            b: resolveCartSuccessAction,
          });

          expect(effects.onResolveCart()).toBeObservable(expected);
          expect(driverCreateSpy).not.toHaveBeenCalled();
        });

        it('should indicate that a cart has resolved successfully', () => {
          const resolveCartSuccessAction = new DaffResolveCartSuccess(stubCart);
          const expected = cold('--b', {
            b: resolveCartSuccessAction,
          });

          expect(effects.onResolveCart()).toBeObservable(expected);
        });
      });
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
	DaffStorageServiceError,
	DaffServerSideStorageError,
} from '@daffodil/core';
import { daffTransformErrorToStateError } from '@daffodil/core/state';
import { DaffCart, DaffCartStorageService } from '@daffodil/cart';
import {
	DaffResolveCart,
	DaffResolveCartFailure,
  DaffResolveCartSuccess,
  DaffResolveCartServerSide
} from '@daffodil/cart/state';
import {
	DaffCartServiceInterface,
	DaffCartDriver,
	DaffCartNotFoundError,
	DaffCartInvalidAPIResponseError,
} from '@daffodil/cart/driver';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffTestingCartDriverModule } from '@daffodil/cart/driver/testing';

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

  const throwStorageError = () => { throw new DaffStorageServiceError('An error occurred during storage.') };

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
        DaffTestingCartDriverModule.forRoot()
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
			beforeEach(() => {
				getCartIdSpy.and.callFake(() => {
					throw new DaffServerSideStorageError(
						'Resolution failed server side.',
					);
				});
			});

			it('should emit a an action indicating that server side resolution occurred', () => {
				const resolveCartServerSide = new DaffResolveCartServerSide();
				const expected = cold('--a', {
					a: resolveCartServerSide,
				});

				expect(effects.onResolveCart()).toBeObservable(expected);
			});
		});

		describe('when the storage service throws an error while fetching the cart ID', () => {
			beforeEach(() => {
				getCartIdSpy.and.callFake(throwStorageError);
			});

			it('should indicate cart resolution failure due to cart ID retrieval', () => {
				const error = new DaffStorageServiceError(
					'Cart resolution failed while attempting to retrieve the cart ID from storage.',
				);
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
				beforeEach(() => {
					const response = cold(
						'#',
						{},
						new DaffCartInvalidAPIResponseError('error'),
					);
					driverCreateSpy.and.returnValue(response);
				});

				it('should dispatch DaffResolveCartFailure action', () => {
					const error = new DaffCartInvalidAPIResponseError(
						'Cart resolution has failed.',
					);
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
				beforeEach(() => {
					const response = cold(
						'#',
						{},
						new DaffCartInvalidAPIResponseError('error'),
					);
					driverGetSpy.and.returnValue(response);
				});

				it('should indicate failed cart resolution', () => {
					const error = new DaffCartInvalidAPIResponseError(
						'Cart resolution has failed.',
					);
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
					beforeEach(() => {
						const response = cold(
							'#',
							{},
							new DaffCartInvalidAPIResponseError('error'),
						);
						driverCreateSpy.and.returnValue(response);
					});

					it('should indicate failed cart resolution', () => {
						const error = new DaffCartInvalidAPIResponseError(
							'Cart resolution failed after attempting to generate and load a new cart.',
						);
						const resolveCartFailureAction = new DaffResolveCartFailure(
							daffTransformErrorToStateError(error),
						);
						const expected = cold('--b', {
							b: resolveCartFailureAction,
						});

						expect(effects.onResolveCart()).toBeObservable(expected);
					});
				});

				describe('and the get call fails', () => {
					beforeEach(() => {
						const response = cold('#', {}, new DaffCartNotFoundError('error'));
						driverCreateSpy.and.returnValue(of({ id: newCartId }));
						driverGetSpy.withArgs(newCartId).and.returnValue(response);
					});

					it('should indicate failed cart resolution', () => {
						const error = new DaffCartNotFoundError(
							'Cart resolution failed after attempting to generate and load a new cart.',
						);
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

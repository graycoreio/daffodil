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
} from '@daffodil/cart/state';
import {
	DaffCartServiceInterface,
	DaffCartDriver,
	DaffCartNotFoundError,
	DaffCartInvalidAPIResponseError,
} from '@daffodil/cart/driver';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartResolverEffects } from './cart-resolver.effects';
import { DaffResolveCartServerSide } from '../actions/public_api';

describe('DaffCartResolverEffects', () => {
	let actions$: Observable<any>;
	let effects: DaffCartResolverEffects;
	let driver: jasmine.SpyObj<DaffCartServiceInterface>;

	let cartFactory: DaffCartFactory;
	let stubCart: DaffCart;

	let cartStorageService: jasmine.SpyObj<DaffCartStorageService>;
	const throwStorageError = () => {
		throw new DaffStorageServiceError('An error occurred during storage.');
	};

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DaffCartResolverEffects,
				provideMockActions(() => actions$),
				{
					provide: DaffCartDriver,
					useValue: jasmine.createSpyObj('DaffCartDriver', [
						'get',
						'create',
						'clear',
						'addToCart',
					]),
				},
				{
					provide: DaffCartStorageService,
					useValue: jasmine.createSpyObj('DaffCartStorageService', [
						'setCartId',
						'getCartId',
					]),
				},
			],
		});

		effects = TestBed.inject(DaffCartResolverEffects);
		driver = TestBed.inject(DaffCartDriver);
		cartFactory = TestBed.inject(DaffCartFactory);
		cartStorageService = TestBed.inject(DaffCartStorageService);
		stubCart = cartFactory.create();
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
				cartStorageService.getCartId.and.callFake(() => {
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
				cartStorageService.getCartId.and.callFake(throwStorageError);
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
				cartStorageService.getCartId.and.returnValue(undefined);
				driver.create.and.returnValue(of({ id: stubCart.id }));
				driver.get.and.returnValue(of(stubCart));
			});

			describe('and when creating a cart fails', () => {
				beforeEach(() => {
					const response = cold(
						'#',
						{},
						new DaffCartInvalidAPIResponseError('error'),
					);
					driver.create.and.returnValue(response);
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
				expect(driver.create).toHaveBeenCalled();
			});
		});

		describe('when there is a cart ID in storage', () => {
			let cartId;

			beforeEach(() => {
				cartId = stubCart.id.toString();
				cartStorageService.getCartId.and.returnValue(cartId);
			});

			describe('and the get call fails', () => {
				beforeEach(() => {
					const response = cold(
						'#',
						{},
						new DaffCartInvalidAPIResponseError('error'),
					);
					driver.get.and.returnValue(response);
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
					driver.get.withArgs(cartId).and.returnValue(response);
					driver.create.and.returnValue(of({ id: newCartId }));
				});

				it('should create a new cart', () => {
					const expected = cold('--b', {
						b: jasmine.anything(),
					});

					expect(effects.onResolveCart()).toBeObservable(expected);
					expect(driver.create).toHaveBeenCalled();
				});

				describe('and the driver calls succeed', () => {
					beforeEach(() => {
						driver.get.withArgs(newCartId).and.returnValue(of(stubCart));
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
						driver.create.and.returnValue(response);
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
						driver.create.and.returnValue(of({ id: newCartId }));
						driver.get.withArgs(newCartId).and.returnValue(response);
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
					driver.get.and.returnValue(of(stubCart));
				});

				it('should not attempt to create a cart', () => {
					const resolveCartSuccessAction = new DaffResolveCartSuccess(stubCart);
					const expected = cold('--b', {
						b: resolveCartSuccessAction,
					});

					expect(effects.onResolveCart()).toBeObservable(expected);
					expect(driver.create).not.toHaveBeenCalled();
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

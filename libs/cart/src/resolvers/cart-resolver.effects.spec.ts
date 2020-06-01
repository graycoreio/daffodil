import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';
import { hot, cold } from 'jasmine-marbles';

import {
	DaffCartFactory,
} from '@daffodil/cart/testing';

import { DaffCartResolverEffects } from './cart-resolver.effects';
import { DaffCartDriver, DaffCartServiceInterface } from '../drivers/public_api';
import { DaffCart } from '../models/cart';
import { DaffCartStorageService } from '../storage/cart-storage.service';
import { 
	DaffResolveCart, 
	DaffCartLoadFailure, 
	DaffCartLoadSuccess, 
	DaffCartCreate 
} from '../actions/public_api';
import { DaffCartNotFoundError } from '../errors/not-found';

describe('DaffCartResolverEffects', () => {
	let actions$: Observable<any>;
	let effects: DaffCartResolverEffects;
	let driver: jasmine.SpyObj<DaffCartServiceInterface>;

	let cartFactory: DaffCartFactory;
	let stubCart: DaffCart;

	let cartStorageService: jasmine.SpyObj<DaffCartStorageService>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				DaffCartResolverEffects,
				provideMockActions(() => actions$),
				{
					provide: DaffCartDriver,
          useValue: jasmine.createSpyObj('DaffCartDriver', ['get', 'create', 'clear', 'addToCart'])
				},
        {
          provide: DaffCartStorageService,
          useValue: jasmine.createSpyObj('DaffCartStorageService', ['setCartId', 'getCartId'])
        }
			],
		});

		effects = TestBed.get(DaffCartResolverEffects);
		driver = TestBed.get(DaffCartDriver);
		cartFactory = TestBed.get(DaffCartFactory);
		cartStorageService = TestBed.get(DaffCartStorageService);
		stubCart = cartFactory.create();
	});

	it('should be created', () => {
		expect(effects).toBeTruthy();
	});

	describe('handling storage errors e.g. being in SSR', () => {
		it('should dispatch a DaffCartLoadFailure action', () => {
			cartStorageService.getCartId.and.throwError('Storage error');

			const loadCartFailureAction = new DaffCartLoadFailure(
				'Cart loading has failed',
			);

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b|)', {
				b: loadCartFailureAction
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
		});
	});

	describe('successfully resolving a cart when theres a cart id in storage', () => {
		beforeEach(() => {
			cartStorageService.getCartId.and.returnValue(
				stubCart.id.toString(),
			);
			driver.get.and.returnValue(of(stubCart));
		});

		it('should not attempt to create a cart', () => {
			const loadCartSuccessAction = new DaffCartLoadSuccess(stubCart);

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b)', {
				b: loadCartSuccessAction,
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
			expect(driver.create).not.toHaveBeenCalled();
		});

		it('should indicate that a cart has loaded', () => {
			const loadCartSuccessAction = new DaffCartLoadSuccess(stubCart);

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b)', {
				b: loadCartSuccessAction
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
		});
	});

	describe('handling XHR errors when creating a cart', () => {
		it('should dispatch DaffCartLoadFailure action', () => {
			const response = cold('#', {});
			driver.create.and.returnValue(response);

			const loadCartFailureAction = new DaffCartLoadFailure(
				'Cart loading has failed',
			);

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b|)', {
				b: loadCartFailureAction
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
		});
	});

	describe('handling XHR errors when retrieving a cart', () => {
		it('should dispatch a DaffCartLoadFailure action', () => {
			const response = cold('#', {});
			driver.get.and.returnValue(response);
			driver.create.and.returnValue(response);

			const loadCartFailureAction = new DaffCartLoadFailure(
				'Cart loading has failed',
			);

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b|)', {
				b: loadCartFailureAction
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
		});
	});

	describe('creating a cart when there is no cart id in storage', () => {
		it('should create a cart', () => {
			cartStorageService.getCartId.and.returnValue(undefined);
			driver.create.and.returnValue(of({ id: stubCart.id }));
			driver.get.and.returnValue(of(stubCart));

			const loadCartSuccessAction = new DaffCartLoadSuccess(stubCart);

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b)', {
				b: loadCartSuccessAction
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
			expect(driver.create).toHaveBeenCalled();
		});
	});

	describe('when the error thrown is a DaffCartNotFoundError', () => {

		it('should create a new cart', () => {
			cartStorageService.getCartId.and.returnValue('id');
			const response = cold('#', {}, new DaffCartNotFoundError('error'));
			driver.get.and.returnValue(response);

			const cartCreateAction = new DaffCartCreate();

			actions$ = hot('--a', { a: new DaffResolveCart() });
			const expected = cold('--(b|)', {
				b: cartCreateAction,
			});

			expect(effects.onResolveCart$).toBeObservable(expected);
		});
	});
});

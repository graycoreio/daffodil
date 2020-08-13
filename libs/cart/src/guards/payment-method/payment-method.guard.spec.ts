import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartFactory, DaffCartPaymentFactory } from '@daffodil/cart/testing';
import {
  DaffCartFacade,
  DaffCart,
  DaffResolveCartSuccess,
  DaffCartLoadSuccess
} from '@daffodil/cart';

import { DaffPaymentMethodGuard } from './payment-method.guard';
import { daffCartReducers } from '../../reducers/public_api';
import { DaffCartPaymentMethodGuardRedirectUrl } from './payment-method-guard-redirect.token';

describe('DaffPaymentMethodGuard', () => {

	let service: DaffPaymentMethodGuard;
	let facade;
	let store: MockStore<any>;
	let router: Router;
	const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffPaymentMethodGuard,
				DaffCartFacade,
				{ provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
				}),
				RouterTestingModule
			]
    });
		service = TestBed.get(DaffPaymentMethodGuard);
		facade = TestBed.get(DaffCartFacade);
		router = TestBed.get(Router);
		store = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('canActivate', () => {
		describe('when the cart has not been resolved', () => {
      it('should not emit', () => {
        const expected = cold('-');

        expect(service.canActivate()).toBeObservable(expected);
      });
    });

		it('should allow activation when there is a payment method', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				payment: new DaffCartPaymentFactory().create(),
			});
      store.dispatch(new DaffCartLoadSuccess(cart));
      store.dispatch(new DaffResolveCartSuccess());
			const expected = cold('(a|)', { a: true })

			expect(service.canActivate()).toBeObservable(expected);
		});

		describe('when there is no payment method', () => {

			beforeEach(() => {
				spyOn(router, 'navigateByUrl');
				const cart: DaffCart = new DaffCartFactory().create({
					payment: null,
				});
        store.dispatch(new DaffCartLoadSuccess(cart));
				store.dispatch(new DaffResolveCartSuccess());
			});

			it('should not allow activation', () => {
				const expected = cold('(a|)', { a: false })

				expect(service.canActivate()).toBeObservable(expected);
			});

			it('should redirect to the given DaffCartPaymentMethodGuardRedirectUrl', () => {
				service.canActivate().subscribe();
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});

import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCart } from '@daffodil/cart';
import {
  daffCartReducers,
  DaffCartLoadSuccess,
  DaffCartPaymentMethodGuardRedirectUrl
} from '@daffodil/cart/state';
import { DaffCartFactory, DaffCartPaymentFactory } from '@daffodil/cart/testing';

import { DaffPaymentMethodGuard } from './payment-method.guard';

describe('Cart | State | Guards | DaffPaymentMethodGuard', () => {

	let service: DaffPaymentMethodGuard;
	let store: MockStore<any>;
	let router: Router;
	const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartPaymentMethodGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
				}),
        RouterTestingModule,
			]
    });
		service = TestBed.inject(DaffPaymentMethodGuard);
		router = TestBed.inject(Router);
		store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});

	describe('canActivate', () => {
		it('should allow activation when there is a payment method', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				payment: new DaffCartPaymentFactory().create(),
			});
      store.dispatch(new DaffCartLoadSuccess(cart));
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

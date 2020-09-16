import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartFactory, DaffCartShippingRateFactory, DaffCartTestingModule } from '@daffodil/cart/testing';
import {
  DaffCartFacade,
  DaffCart,
  DaffResolveCartSuccess,
  DaffCartLoadSuccess
} from '@daffodil/cart';

import { DaffShippingMethodGuard } from './shipping-method.guard';
import { daffCartReducers } from '../../reducers/public_api';
import { DaffCartShippingMethodGuardRedirectUrl } from './shipping-method-guard-redirect.token';

describe('DaffShippingMethodGuard', () => {

	let service: DaffShippingMethodGuard;
	let facade;
	let store: MockStore<any>;
	let router: Router;
	const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffShippingMethodGuard,
				{ provide: DaffCartShippingMethodGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
				}),
        RouterTestingModule,
        DaffCartTestingModule
			]
    });
		service = TestBed.get(DaffShippingMethodGuard);
		facade = TestBed.get(DaffCartFacade);
		store = TestBed.get(Store);
		router = TestBed.get(Router);
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

		it('should allow activation when there is a shipping method', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				shipping_information: new DaffCartShippingRateFactory().create(),
			});
      store.dispatch(new DaffCartLoadSuccess(cart));
      store.dispatch(new DaffResolveCartSuccess());
			const expected = cold('(a|)', { a: true })

			expect(service.canActivate()).toBeObservable(expected);
		});

		describe('when there is no shipping method', () => {

			beforeEach(() => {
				spyOn(router, 'navigateByUrl');
				const cart: DaffCart = new DaffCartFactory().create({
					shipping_information: null,
				});
        store.dispatch(new DaffCartLoadSuccess(cart));
				store.dispatch(new DaffResolveCartSuccess());
			});

			it('should not allow activation', () => {
				const expected = cold('(a|)', { a: false })

				expect(service.canActivate()).toBeObservable(expected);
			});

			it('should redirect to the given DaffCartShippingMethodGuardRedirectUrl', () => {
				service.canActivate().subscribe();
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});

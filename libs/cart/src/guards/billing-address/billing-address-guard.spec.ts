import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartFactory, DaffCartAddressFactory } from '@daffodil/cart/testing';
import { DaffCartFacade, DaffCart, DaffCartLoadSuccess } from '@daffodil/cart';

import { DaffBillingAddressGuard } from './billing-address-guard';
import { daffCartReducers } from '../../reducers/public_api';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { DaffCartBillingAddressGuardRedirectUrl } from './billing-address-guard-redirect.token';

describe('DaffBillingAddressGuard', () => {

	let service: DaffBillingAddressGuard;
	let facade;
	let store: MockStore<any>;
	let router: Router;
	const stubUrl = 'url';
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffBillingAddressGuard,
				DaffCartFacade,
				{ provide: DaffCartBillingAddressGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
				}),
				RouterTestingModule
			]
    });
		service = TestBed.get(DaffBillingAddressGuard);
		facade = TestBed.get(DaffCartFacade);
		store = TestBed.get(Store);
		router = TestBed.get(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
	
	describe('canActivate', () => {
		
		it('should allow activation when there is a billing address', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				billing_address: new DaffCartAddressFactory().create(),
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: true })
			
			expect(service.canActivate()).toBeObservable(expected);
		});

		describe('when there is no billing address', () => {

			beforeEach(() => {
				spyOn(router, 'navigateByUrl');
				const cart: DaffCart = new DaffCartFactory().create({
					billing_address: null,
				});
				store.dispatch(new DaffCartLoadSuccess(cart));
			});
			
			it('should not allow activation', () => {
				const expected = cold('a', { a: false })
				
				expect(service.canActivate()).toBeObservable(expected);
			});

			it('should redirect to the given DaffCartBillingAddressGuardRedirectUrl', () => {
				service.canActivate().subscribe();
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});

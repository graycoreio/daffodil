import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { DaffCartFactory, DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import { DaffCartFacade, DaffCart, DaffCartLoadSuccess } from '@daffodil/cart';

import { DaffShippingMethodGuard } from './shipping-method-guard';
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
				DaffCartFacade,
				{ provide: DaffCartShippingMethodGuardRedirectUrl, useValue: stubUrl }
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
				}),
				RouterTestingModule
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
		
		it('should allow activation when there is a shipping method', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				shipping_information: new DaffCartShippingRateFactory().create(),
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: true })
			
			expect(service.canActivate()).toBeObservable(expected);
		});

		describe('when there is no shipping method', () => {

			beforeEach(() => {
				spyOn(router, 'navigateByUrl');
				const cart: DaffCart = new DaffCartFactory().create({
					shipping_information: null,
				});
				store.dispatch(new DaffCartLoadSuccess(cart));
			});
			
			it('should not allow activation', () => {
				const expected = cold('a', { a: false })
				
				expect(service.canActivate()).toBeObservable(expected);
			});

			it('should redirect to the given DaffCartShippingMethodGuardRedirectUrl', () => {
				service.canActivate().subscribe();
				expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
			});
		});
	});
});

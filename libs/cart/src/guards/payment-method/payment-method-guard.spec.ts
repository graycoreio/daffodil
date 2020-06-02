import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartFactory, DaffCartPaymentFactory } from '@daffodil/cart/testing';
import { DaffCartFacade, DaffCart, DaffCartLoadSuccess } from '@daffodil/cart';

import { DaffPaymentMethodGuard } from './payment-method-guard';
import { daffCartReducers } from '../../reducers/public_api';

describe('DaffPaymentMethodGuard', () => {

	let service: DaffPaymentMethodGuard;
	let facade;
	let store: MockStore<any>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffPaymentMethodGuard,
				DaffCartFacade
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
			]
    });
		service = TestBed.get(DaffPaymentMethodGuard);
		facade = TestBed.get(DaffCartFacade);
		store = TestBed.get(Store);
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
			const expected = cold('a', { a: true })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
		
		it('should not allow activation when there is not a payment method', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				payment: null,
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: false })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
	});
});

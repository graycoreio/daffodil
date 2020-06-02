import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartFactory, DaffCartShippingRateFactory } from '@daffodil/cart/testing';
import { DaffCartFacade, DaffCart, DaffCartLoadSuccess } from '@daffodil/cart';

import { DaffShippingMethodGuard } from './shipping-method-guard';
import { daffCartReducers } from '../../reducers/public_api';

describe('DaffShippingMethodGuard', () => {

	let service: DaffShippingMethodGuard;
	let facade;
	let store: MockStore<any>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffShippingMethodGuard,
				DaffCartFacade
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
			]
    });
		service = TestBed.get(DaffShippingMethodGuard);
		facade = TestBed.get(DaffCartFacade);
		store = TestBed.get(Store);
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
		
		it('should not allow activation when there is not a shipping method', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				shipping_information: null,
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: false })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
	});
});

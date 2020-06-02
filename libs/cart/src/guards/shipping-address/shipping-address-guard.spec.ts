import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartFactory, DaffCartAddressFactory } from '@daffodil/cart/testing';
import { DaffCartFacade, DaffCart, DaffCartLoadSuccess } from '@daffodil/cart';

import { DaffShippingAddressGuard } from './shipping-address-guard';
import { daffCartReducers } from '../../reducers/public_api';

describe('DaffShippingAddressGuard', () => {

	let service: DaffShippingAddressGuard;
	let facade;
	let store: MockStore<any>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffShippingAddressGuard,
				DaffCartFacade
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
			]
    });
		service = TestBed.get(DaffShippingAddressGuard);
		facade = TestBed.get(DaffCartFacade);
		store = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
	
	describe('canActivate', () => {
		
		it('should allow activation when there is a shipping address', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				shipping_address: new DaffCartAddressFactory().create(),
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: true })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
		
		it('should not allow activation when there is not a shipping address', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				shipping_address: null,
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: false })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
	});
});

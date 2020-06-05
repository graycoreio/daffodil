import { TestBed } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { cold } from 'jasmine-marbles';
import { MockStore } from '@ngrx/store/testing';

import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';
import { DaffCartFacade, DaffCart, DaffCartLoadSuccess } from '@daffodil/cart';

import { DaffEmptyCartGuard } from './empty-cart-guard';
import { daffCartReducers } from '../../reducers/public_api';

describe('DaffEmptyCartGuard', () => {

	let service: DaffEmptyCartGuard;
	let facade;
	let store: MockStore<any>;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
				DaffEmptyCartGuard,
				DaffCartFacade
			],
			imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        })
			]
    });
		service = TestBed.get(DaffEmptyCartGuard);
		facade = TestBed.get(DaffCartFacade);
		store = TestBed.get(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
	});
	
	describe('canActivate', () => {
		
		it('should allow activation when the cart is not empty', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				items: new DaffCartItemFactory().create()
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: true })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
		
		it('should not allow activation when the cart is empty', () => {
			const cart: DaffCart = new DaffCartFactory().create({
				items: [],
			});
			store.dispatch(new DaffCartLoadSuccess(cart));
			const expected = cold('a', { a: false })
			
			expect(service.canActivate()).toBeObservable(expected);
		});
	});
});

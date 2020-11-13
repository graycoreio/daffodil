import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { ActivatedRoute } from '@angular/router';
import { MockStore } from '@ngrx/store/testing';
import { fail } from 'assert';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageResolver } from './product-page.resolver';
import { DaffProduct } from '../../models/product';
import { daffProductReducers } from '../../reducers/product-reducers';
import { DaffProductLoad, DaffProductLoadSuccess, DaffProductLoadFailure } from '../../actions/product.actions';
import { DaffProductReducersState } from '../../reducers/public_api';

describe('DaffProductPageResolver', () => {
	const actions$: Observable<any> = null;
	let resolver: DaffProductPageResolver;
  let store: MockStore<DaffProductReducersState>;
  let ProductFactory: DaffProductFactory;
  let stubProduct: DaffProduct;
	let route: ActivatedRoute;

	describe('resolve', () => {

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					StoreModule.forRoot({
						product: combineReducers(daffProductReducers),
					})
				],
				providers: [
					provideMockActions(() => actions$),
					{
						provide: ActivatedRoute,
						useValue: {snapshot: {paramMap: { get: () => '123'}}}
					},
				]
			});
	
			resolver = TestBed.get(DaffProductPageResolver);
			ProductFactory = TestBed.get(DaffProductFactory);
			stubProduct = ProductFactory.create();
			store = TestBed.get(Store);
			route = TestBed.get(ActivatedRoute);
		}));

		it('should dispatch a DaffProductLoad action with the correct product id', () => {
			spyOn(store, 'dispatch');
			resolver.resolve( route.snapshot );
			expect(store.dispatch).toHaveBeenCalledWith(
				new DaffProductLoad('123')
			);
		});

		it('should resolve when DaffProductLoadSuccess is dispatched', () => {
			resolver.resolve(route.snapshot).subscribe(value => {
				expect(value).toEqual(true);
			});

			store.dispatch(new DaffProductLoadSuccess(stubProduct));
		});

		it('should resolve when DaffCartLoadFailure is dispatched', () => {
			resolver.resolve(route.snapshot).subscribe(value => {
				expect(value).toEqual(true);
			});

			store.dispatch(new DaffProductLoadFailure(null));
		});

		it('should not resolve without a product load success or failure', () => {
			resolver.resolve(route.snapshot).subscribe(() => {
				fail();
			});
			expect(true).toBeTruthy();
		});
	});
});

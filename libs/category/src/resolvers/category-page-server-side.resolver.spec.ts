import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { ActivatedRoute } from '@angular/router';
import { ɵPLATFORM_SERVER_ID, ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { MockStore } from '@ngrx/store/testing';
import { fail } from 'assert';

import { DaffProductFactory } from '@daffodil/product/testing';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffCategoryPageServerSideResolver } from './category-page-server-side.resolver';
import { DaffCategoryReducersState } from '../reducers/category-reducers.interface';
import { DaffCategory } from '../models/category';
import { daffCategoryReducers } from '../reducers/category-reducers';
import { DaffDefaultCategoryPageSize } from './default-category-page-size.token';
import { DaffCategoryLoad, DaffCategoryLoadSuccess, DaffCategoryLoadFailure } from '../actions/category.actions';

describe('DaffCategoryPageServerSideResolver', () => {
	const actions$: Observable<any> = null;
	let categoryResolver: DaffCategoryPageServerSideResolver;
  let store: MockStore<DaffCategoryReducersState>;
  let categoryFactory: DaffCategoryFactory;
  let stubCategory: DaffCategory;
	let route: ActivatedRoute;

	describe('resolve - on the server', () => {

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					StoreModule.forRoot({
						category: combineReducers(daffCategoryReducers),
					})
				],
				providers: [
					provideMockActions(() => actions$),
					{ provide: DaffDefaultCategoryPageSize, useValue: 12 },
					{
						provide: ActivatedRoute,
						useValue: {snapshot: {paramMap: { get: () => '123'}}}
					},
					{ provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID }
				]
			});
	
			categoryResolver = TestBed.get(DaffCategoryPageServerSideResolver);
			categoryFactory = TestBed.get(DaffCategoryFactory);
			stubCategory = categoryFactory.create();
			store = TestBed.get(Store);
			route = TestBed.get(ActivatedRoute);
		}));

		it('should dispatch a DaffCategoryLoad action with the correct category id', () => {
			spyOn(store, 'dispatch');
			categoryResolver.resolve( route.snapshot );
			expect(store.dispatch).toHaveBeenCalledWith(
				new DaffCategoryLoad({ id: '123', page_size: 12 })
			);
		});

		it('should resolve when DaffCategoryLoadSuccess is dispatched', () => {
			categoryResolver.resolve(route.snapshot).subscribe(value => {
				expect(value).toEqual(true);
			});

			store.dispatch(new DaffCategoryLoadSuccess({
				products: [new DaffProductFactory().create()],
				category: stubCategory,
				categoryPageConfigurationState: new DaffCategoryPageConfigurationStateFactory().create()
			}));
		});

		it('should resolve when DaffCartLoadFailure is dispatched', () => {
			categoryResolver.resolve(route.snapshot).subscribe(value => {
				expect(value).toEqual(true);
			});

			store.dispatch(new DaffCategoryLoadFailure(null));
		});

		it('should not resolve without a category load success or failure', () => {
			categoryResolver.resolve(route.snapshot).subscribe(() => {
				fail();
			});
			expect(true).toBeTruthy();
		});
	});

	describe('in the browser', () => {
		beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					StoreModule.forRoot({
						category: combineReducers(daffCategoryReducers),
					})
				],
				providers: [
					provideMockActions(() => actions$),
					{ provide: DaffDefaultCategoryPageSize, useValue: 12 },
					{
						provide: ActivatedRoute,
						useValue: {snapshot: {paramMap: { get: () => '123'}}}
					},
					{ provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }
				]
			});
	
			categoryResolver = TestBed.get(DaffCategoryPageServerSideResolver);
			categoryFactory = TestBed.get(DaffCategoryFactory);
			stubCategory = categoryFactory.create();
			store = TestBed.get(Store);
			route = TestBed.get(ActivatedRoute);
		}));

		it('should resolve', () => {
			categoryResolver.resolve(route.snapshot).subscribe((value) => {
				expect(value).toBeTruthy();
			});
		});		
	});
});

import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { ActivatedRoute } from '@angular/router';
import { ɵPLATFORM_SERVER_ID, ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

import { DaffCategoryPageServerSideResolver } from './category-page-server-side.resolver';
import { daffCategoryReducers } from '../../reducers/category-reducers';
import { DaffCategoryPageResolver } from '../category-page/category-page.resolver';
import { DaffDefaultCategoryPageSize } from '../category-page/default-category-page-size.token';

describe('DaffCategoryPageServerSideResolver', () => {
	const actions$: Observable<any> = null;
	let resolver: DaffCategoryPageServerSideResolver;
	let route: ActivatedRoute;
	let categoryPageResolver: DaffCategoryPageResolver;
	const categoryPageResolveValue = true;

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
	
			resolver = TestBed.get(DaffCategoryPageServerSideResolver);
			categoryPageResolver = TestBed.get(DaffCategoryPageResolver);
			route = TestBed.get(ActivatedRoute);
			spyOn(categoryPageResolver, 'resolve').and.returnValue(of(true));
		}));

		it('should resolve with the DaffCategoryPageResolver', () => {
			resolver.resolve( route.snapshot ).subscribe(value => {
				expect(categoryPageResolver.resolve).toHaveBeenCalledWith(route.snapshot);
				expect(value).toEqual(categoryPageResolveValue);
			});
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
					{
						provide: ActivatedRoute,
						useValue: {snapshot: {paramMap: { get: () => '123'}}}
					},
					{ provide: DaffDefaultCategoryPageSize, useValue: 12 },
					{ provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }
				]
			});
	
			resolver = TestBed.get(DaffCategoryPageServerSideResolver);
			route = TestBed.get(ActivatedRoute);
			categoryPageResolver = TestBed.get(DaffCategoryPageResolver);
			spyOn(categoryPageResolver, 'resolve');
		}));

		it('should resolve without calling the DaffCategoryPageResolver', () => {
			resolver.resolve(route.snapshot).subscribe((value) => {
				expect(categoryPageResolver.resolve).not.toHaveBeenCalled();
				expect(value).toBeTruthy();
			});
		});	
	});
});

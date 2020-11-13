import { TestBed, async } from '@angular/core/testing';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ɵPLATFORM_SERVER_ID, ɵPLATFORM_BROWSER_ID } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { combineReducers, StoreModule } from '@ngrx/store';

import { DaffProductPageServerSideResolver } from './product-page-server-side.resolver';
import { DaffProductPageResolver } from '../product-page/product-page.resolver';
import { daffProductReducers } from '../../reducers/public_api';

describe('DaffProductPageServerSideResolver', () => {
	let resolver: DaffProductPageServerSideResolver;
	let productPageResolver: DaffProductPageResolver;
	let route: ActivatedRoute;

	describe('resolve - on the server', () => {

		const productPageResolveValue = true;

		beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					StoreModule.forRoot({
						product: combineReducers(daffProductReducers),
					})
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {snapshot: {paramMap: { get: () => '123'}}}
					},
					{ provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID }
				]
			});
	
			resolver = TestBed.get(DaffProductPageServerSideResolver);
			route = TestBed.get(ActivatedRoute);
			productPageResolver = TestBed.get(DaffProductPageResolver);
			spyOn(productPageResolver, 'resolve').and.returnValue(of(productPageResolveValue));
		}));

		it('should call the DaffProductPageResolver', () => {
			resolver.resolve( route.snapshot ).subscribe(value => {
				expect(productPageResolver.resolve).toHaveBeenCalledWith(route.snapshot);
				expect(value).toEqual(productPageResolveValue);
			});
		});
	});

	describe('resolve - in the browser', () => {
		beforeEach(async(() => {
			TestBed.configureTestingModule({
				imports: [
					StoreModule.forRoot({
						product: combineReducers(daffProductReducers),
					})
				],
				providers: [
					{
						provide: ActivatedRoute,
						useValue: {snapshot: {paramMap: { get: () => '123'}}}
					},
					{ provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID }
				]
			});
	
			resolver = TestBed.get(DaffProductPageServerSideResolver);
			route = TestBed.get(ActivatedRoute);
			productPageResolver = TestBed.get(DaffProductPageResolver);
			spyOn(productPageResolver, 'resolve');
		}));

		it('should resolve without calling the DaffProductPageResolver', () => {
			resolver.resolve(route.snapshot).subscribe((value) => {
				expect(productPageResolver.resolve).not.toHaveBeenCalled();
				expect(value).toBeTruthy();
			});
		});
	});
});

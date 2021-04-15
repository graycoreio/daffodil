import {
  ɵPLATFORM_BROWSER_ID,
  ɵPLATFORM_SERVER_ID,
} from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { fail } from 'assert';
import { Observable } from 'rxjs';

import { DaffCategory } from '@daffodil/category';
import {
  daffCategoryReducers,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffCategoryReducersState,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
  DaffDefaultCategoryPageSize,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageResolver } from './category-page.resolver';

describe('DaffCategoryPageResolver', () => {
  const actions$: Observable<any> = null;
  let categoryResolver: DaffCategoryPageResolver;
  let store: Store<DaffCategoryReducersState>;
  let categoryFactory: DaffCategoryFactory;
  let productFactory: DaffProductFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let stubCategory: DaffCategory;
  let route: ActivatedRoute;

  describe('resolve - on server', () => {

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          }),
        ],
        providers: [
          provideMockActions(() => actions$),
          { provide: DaffDefaultCategoryPageSize, useValue: 12 },
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => '123' }}},
          },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID },
        ],
      });

      categoryResolver = TestBed.inject(DaffCategoryPageResolver);
      categoryFactory = TestBed.inject(DaffCategoryFactory);
      productFactory = TestBed.inject(DaffProductFactory);
      categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
      stubCategory = categoryFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
    }));

    it('should dispatch a DaffCategoryPageLoad action with the correct category id', () => {
      spyOn(store, 'dispatch');
      categoryResolver.resolve( route.snapshot );
      expect(store.dispatch).toHaveBeenCalledWith(
        new DaffCategoryPageLoad({ id: '123', page_size: 12 }),
      );
    });

    it('should resolve when DaffCategoryPageLoadSuccess is dispatched', () => {
      categoryResolver.resolve(route.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffCategoryPageLoadSuccess({
        products: [productFactory.create()],
        category: stubCategory,
        categoryPageMetadata: categoryPageMetadataFactory.create(),
      }));
    });

    it('should resolve when DaffCartLoadFailure is dispatched', () => {
      categoryResolver.resolve(route.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffCategoryPageLoadFailure(null));
    });

    it('should not resolve without a category load success or failure', () => {
      categoryResolver.resolve(route.snapshot).subscribe(() => {
        fail();
      });
      expect(true).toBeTruthy();
    });
  });

  describe('resolve - in the browser', () => {

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          }),
        ],
        providers: [
          provideMockActions(() => actions$),
          { provide: DaffDefaultCategoryPageSize, useValue: 12 },
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => '123' }}},
          },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
        ],
      });

      categoryResolver = TestBed.inject(DaffCategoryPageResolver);
      categoryFactory = TestBed.inject(DaffCategoryFactory);
      stubCategory = categoryFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
    }));

    it('should dispatch a DaffCategoryPageLoad action with the correct category id', () => {
      spyOn(store, 'dispatch');
      categoryResolver.resolve( route.snapshot );
      expect(store.dispatch).toHaveBeenCalledWith(
        new DaffCategoryPageLoad({ id: '123', page_size: 12 }),
      );
    });

    it('should resolve without a category load success or failure', () => {
      categoryResolver.resolve(route.snapshot).subscribe((value) => {
        expect(value).toBeTruthy();
      });
    });
  });
});

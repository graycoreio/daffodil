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
import { Observable } from 'rxjs';

import {
  DaffCategory,
  DaffCategoryRequestKind,
} from '@daffodil/category';
import {
  daffCategoryReducers,
  DaffCategoryPageLoad,
  DaffCategoryPageLoadSuccess,
  DaffCategoryPageLoadFailure,
  DaffCategoryReducersState,
  DAFF_CATEGORY_STORE_FEATURE_KEY,
} from '@daffodil/category/state';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffCategoryPageIdResolver } from './category-page-id.resolver';

describe('DaffCategoryPageIdResolver', () => {
  const actions$: Observable<any> = null;
  let categoryResolver: DaffCategoryPageIdResolver;
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
          DaffCategoryPageIdResolver,
          provideMockActions(() => actions$),
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => '123' }, toString: () => '123' }},
          },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID },
        ],
      });

      categoryResolver = TestBed.inject(DaffCategoryPageIdResolver);
      categoryFactory = TestBed.inject(DaffCategoryFactory);
      productFactory = TestBed.inject(DaffProductFactory);
      categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);

      stubCategory = categoryFactory.create();
    }));

    it('should dispatch a DaffCategoryPageLoad action with the correct category id', () => {
      spyOn(store, 'dispatch');
      categoryResolver.resolve( route.snapshot );
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffCategoryPageLoad({ id: '123', kind: DaffCategoryRequestKind.ID }),
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
          DaffCategoryPageIdResolver,
          provideMockActions(() => actions$),
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => '123' }, toString: () => '123' }},
          },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
        ],
      });

      categoryResolver = TestBed.inject(DaffCategoryPageIdResolver);
      categoryFactory = TestBed.inject(DaffCategoryFactory);
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);

      stubCategory = categoryFactory.create();
    }));

    it('should dispatch a DaffCategoryPageLoad action with the correct category id', () => {
      spyOn(store, 'dispatch');
      categoryResolver.resolve( route.snapshot );
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffCategoryPageLoad({ id: '123', kind: DaffCategoryRequestKind.ID }),
      );
    });

    it('should resolve without a category load success or failure', () => {
      categoryResolver.resolve(route.snapshot).subscribe((value) => {
        expect(value).toBeTruthy();
      });
    });
  });
});

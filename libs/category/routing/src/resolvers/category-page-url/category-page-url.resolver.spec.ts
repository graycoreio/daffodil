import {
  ɵPLATFORM_BROWSER_ID,
  ɵPLATFORM_SERVER_ID,
} from '@angular/common';
import {
  PLATFORM_ID,
  Component,
} from '@angular/core';
import {
  TestBed,
  waitForAsync,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import {
  ActivatedRoute,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { fail } from 'assert';
import { Observable } from 'rxjs';

import {
  DaffCategory,
  DaffCategoryRequestKind,
} from '@daffodil/category';
import {
  daffCategoryReducers,
  DaffCategoryPageLoadByUrl,
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

import { DaffCategoryPageUrlResolver } from './category-page-url.resolver';

@Component({ template: '' })
class TestComponent {}

describe('DaffCategoryPageUrlResolver', () => {
  const actions$: Observable<any> = null;
  let categoryResolver: DaffCategoryPageUrlResolver;
  let store: Store<DaffCategoryReducersState>;
  let categoryFactory: DaffCategoryFactory;
  let productFactory: DaffProductFactory;
  let stubCategory: DaffCategory;
  let route: ActivatedRoute;
  let router: Router;
  let path: string;

  describe('resolve - on server', () => {

    beforeEach(waitForAsync(() => {
      path = '123';
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          }),
          RouterTestingModule.withRoutes([
            {
              path,
              component: TestComponent,
            },
            {
              path: 'outlet',
              component: TestComponent,
              outlet: 'secondary',
            },
            {
              path: '**',
              component: TestComponent,
            },
          ]),
        ],
        providers: [
          provideMockActions(() => actions$),
          { provide: DaffDefaultCategoryPageSize, useValue: 12 },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID },
        ],
      });

      categoryResolver = TestBed.inject(DaffCategoryPageUrlResolver);
      categoryFactory = TestBed.inject(DaffCategoryFactory);
      productFactory = TestBed.inject(DaffProductFactory);
      stubCategory = categoryFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
      router = TestBed.inject(Router);
      router.initialNavigation();
    }));

    it('should dispatch a DaffCategoryPageLoadByUrl action with the normalized category url', fakeAsync(() => {
      const url = `/${path}(secondary:outlet)`;
      router.navigateByUrl(url);
      tick();

      spyOn(store, 'dispatch');
      categoryResolver.resolve(route.snapshot, router.routerState.snapshot);
      expect(store.dispatch).toHaveBeenCalledWith(
        new DaffCategoryPageLoadByUrl({ url: `/${path}`, page_size: 12, kind: DaffCategoryRequestKind.URL }),
      );
    }));

    it('should resolve when DaffCategoryPageLoadSuccess is dispatched', fakeAsync(() => {
      router.navigateByUrl(path);
      tick();

      categoryResolver.resolve(route.snapshot, router.routerState.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffCategoryPageLoadSuccess({
        products: [productFactory.create()],
        category: stubCategory,
        categoryPageMetadata: new DaffCategoryPageMetadataFactory().create(),
      }));
    }));

    it('should resolve when DaffCartLoadFailure is dispatched', fakeAsync(() => {
      router.navigateByUrl(path);
      tick();

      categoryResolver.resolve(route.snapshot, router.routerState.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffCategoryPageLoadFailure(null));
    }));

    it('should not resolve without a category load success or failure', fakeAsync(() => {
      router.navigateByUrl(path);
      tick();

      categoryResolver.resolve(route.snapshot, router.routerState.snapshot).subscribe(() => {
        fail();
      });
      expect(true).toBeTruthy();
    }));
  });

  describe('resolve - in the browser', () => {

    beforeEach(waitForAsync(() => {
      path = '123';
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_CATEGORY_STORE_FEATURE_KEY]: combineReducers(daffCategoryReducers),
          }),
          RouterTestingModule.withRoutes([
            {
              path,
              component: TestComponent,
            },
            {
              path: 'outlet',
              component: TestComponent,
              outlet: 'secondary',
            },
            {
              path: '**',
              component: TestComponent,
            },
          ]),
        ],
        providers: [
          provideMockActions(() => actions$),
          { provide: DaffDefaultCategoryPageSize, useValue: 12 },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
        ],
      });

      categoryResolver = TestBed.inject(DaffCategoryPageUrlResolver);
      categoryFactory = TestBed.inject(DaffCategoryFactory);
      stubCategory = categoryFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
      router = TestBed.inject(Router);
      router.initialNavigation();
    }));

    it('should dispatch a DaffCategoryPageLoadByUrl action with the correct category id', fakeAsync(() => {
      const url = `/${path}(secondary:outlet)`;
      router.navigateByUrl(url);
      tick();

      spyOn(store, 'dispatch');
      categoryResolver.resolve(route.snapshot, router.routerState.snapshot);
      expect(store.dispatch).toHaveBeenCalledWith(
        new DaffCategoryPageLoadByUrl({ url: `/${path}`, page_size: 12, kind: DaffCategoryRequestKind.URL }),
      );
    }));

    it('should resolve without a category load success or failure', fakeAsync(() => {
      router.navigateByUrl(path);
      tick();
      categoryResolver.resolve(route.snapshot, router.routerState.snapshot).subscribe((value) => {
        expect(value).toBeTruthy();
      });
    }));
  });
});

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
  fakeAsync,
  tick,
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
import { Observable } from 'rxjs';

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageLoadByUrl,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageUrlResolver } from './product-page-url.resolver';

@Component({
  template: '',
  standalone: false,
})
class TestComponent {}

describe('DaffProductPageUrlResolver', () => {
  const actions$: Observable<any> = null;
  let resolver: DaffProductPageUrlResolver;
  let store: Store<DaffProductStateRootSlice>;
  let ProductFactory: DaffProductFactory;
  let stubProduct: DaffProduct;
  let route: ActivatedRoute;
  let router: Router;
  let path: string;

  describe('resolve - on the server', () => {

    beforeEach(waitForAsync(() => {
      path = '123.html';

      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
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
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID },
        ],
      });

      resolver = TestBed.inject(DaffProductPageUrlResolver);
      ProductFactory = TestBed.inject(DaffProductFactory);
      stubProduct = ProductFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
      router = TestBed.inject(Router);
      router.initialNavigation();
    }));

    it('should dispatch a DaffProductPageLoadByUrl action with the normalized product url', fakeAsync(() => {
      const url = `/${path}(secondary:outlet)`;
      router.navigateByUrl(url);
      tick();

      spyOn(store, 'dispatch');
      resolver.resolve( route.snapshot, router.routerState.snapshot );
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffProductPageLoadByUrl(`/${path}`),
      );
    }));

    it('should resolve when DaffProductPageLoadSuccess is dispatched', fakeAsync(() => {
      router.navigateByUrl(`${path}?thing=test#weenwrji`);
      tick();

      resolver.resolve( route.snapshot, router.routerState.snapshot ).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffProductPageLoadSuccess({
        id: stubProduct.id,
        products: [stubProduct],
      }));
    }));

    it('should resolve when DaffProductPageLoadFailure is dispatched', fakeAsync(() => {
      router.navigateByUrl(`${path}?thing=test#weenwrji`);
      tick();

      resolver.resolve(route.snapshot, router.routerState.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffProductPageLoadFailure(null));
    }));

    it('should not resolve without a product load success or failure', fakeAsync(() => {
      router.navigateByUrl(`${path}?thing=test#weenwrji`);
      tick();

      resolver.resolve(route.snapshot, router.routerState.snapshot).subscribe(() => {
        fail();
      });
      expect(true).toBeTruthy();
    }));
  });

  describe('resolve - in the browser', () => {

    beforeEach(waitForAsync(() => {
      path = '123.html';
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
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
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
        ],
      });

      resolver = TestBed.inject(DaffProductPageUrlResolver);
      ProductFactory = TestBed.inject(DaffProductFactory);
      stubProduct = ProductFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
      router = TestBed.inject(Router);
      router.initialNavigation();
    }));

    it('should dispatch a DaffProductPageLoadByUrl action with the normalized product url', fakeAsync(() => {
      const url = `/${path}(secondary:outlet)`;
      router.navigateByUrl(url);
      tick();

      spyOn(store, 'dispatch');
      resolver.resolve( route.snapshot, router.routerState.snapshot );
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffProductPageLoadByUrl(`/${path}`),
      );
    }));

    it('should resolve without a product load success or failure', fakeAsync(() => {
      router.navigateByUrl(`${path}?thing=test#weenwrji`);
      tick();

      resolver.resolve(route.snapshot, router.routerState.snapshot).subscribe((value) => {
        expect(value).toBeTruthy();
      });
    }));
  });
});

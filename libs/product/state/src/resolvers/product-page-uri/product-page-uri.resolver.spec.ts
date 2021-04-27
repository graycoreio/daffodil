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

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageLoadByUrl,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
  daffProductReducers,
  DaffProductReducersState,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageUriResolver } from './product-page-uri.resolver';

describe('DaffProductPageUriResolver', () => {
  const actions$: Observable<any> = null;
  let resolver: DaffProductPageUriResolver;
  let store: Store<DaffProductReducersState>;
  let ProductFactory: DaffProductFactory;
  let stubProduct: DaffProduct;
  let route: ActivatedRoute;

  describe('resolve - on the server', () => {

    beforeEach(waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [
          StoreModule.forRoot({
            [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
          }),
        ],
        providers: [
          provideMockActions(() => actions$),
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => '123' }}},
          },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_SERVER_ID },
        ],
      });

      resolver = TestBed.inject(DaffProductPageUriResolver);
      ProductFactory = TestBed.inject(DaffProductFactory);
      stubProduct = ProductFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
    }));

    it('should dispatch a DaffProductPageLoadByUrl action with the correct product id', () => {
      spyOn(store, 'dispatch');
      resolver.resolve( route.snapshot );
      expect(store.dispatch).toHaveBeenCalledWith(
        new DaffProductPageLoadByUrl(route.toString()),
      );
    });

    it('should resolve when DaffProductPageLoadSuccess is dispatched', () => {
      resolver.resolve(route.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffProductPageLoadSuccess(stubProduct));
    });

    it('should resolve when DaffCartLoadFailure is dispatched', () => {
      resolver.resolve(route.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffProductPageLoadFailure(null));
    });

    it('should not resolve without a product load success or failure', () => {
      resolver.resolve(route.snapshot).subscribe(() => {
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
            [DAFF_PRODUCT_STORE_FEATURE_KEY]: combineReducers(daffProductReducers),
          }),
        ],
        providers: [
          provideMockActions(() => actions$),
          {
            provide: ActivatedRoute,
            useValue: { snapshot: { paramMap: { get: () => '123' }}},
          },
          { provide: PLATFORM_ID, useValue: ɵPLATFORM_BROWSER_ID },
        ],
      });

      resolver = TestBed.inject(DaffProductPageUriResolver);
      ProductFactory = TestBed.inject(DaffProductFactory);
      stubProduct = ProductFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
    }));

    it('should dispatch a DaffProductPageLoadByUrl action with the correct product id', () => {
      spyOn(store, 'dispatch');
      resolver.resolve( route.snapshot );
      expect(store.dispatch).toHaveBeenCalledWith(
        new DaffProductPageLoadByUrl(route.toString()),
      );
    });

    it('should resolve without a product load success or failure', () => {
      resolver.resolve(route.snapshot).subscribe((value) => {
        expect(value).toBeTruthy();
      });
    });
  });
});

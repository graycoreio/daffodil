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

import { DaffProduct } from '@daffodil/product';
import {
  DaffProductPageLoad,
  DaffProductPageLoadSuccess,
  DaffProductPageLoadFailure,
  daffProductReducers,
  DaffProductStateRootSlice,
  DAFF_PRODUCT_STORE_FEATURE_KEY,
} from '@daffodil/product/state';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffProductPageIdResolver } from './product-page-id.resolver';

describe('DaffProductPageIdResolver', () => {
  const actions$: Observable<any> = null;
  let resolver: DaffProductPageIdResolver;
  let store: Store<DaffProductStateRootSlice>;
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

      resolver = TestBed.inject(DaffProductPageIdResolver);
      ProductFactory = TestBed.inject(DaffProductFactory);
      stubProduct = ProductFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
    }));

    it('should dispatch a DaffProductPageLoad action with the correct product id', () => {
      spyOn(store, 'dispatch');
      resolver.resolve( route.snapshot );
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffProductPageLoad('123'),
      );
    });

    it('should resolve when DaffProductPageLoadSuccess is dispatched', () => {
      resolver.resolve(route.snapshot).subscribe(value => {
        expect(value).toEqual(true);
      });

      store.dispatch(new DaffProductPageLoadSuccess({
        id: stubProduct.id,
        products: [stubProduct],
      }));
    });

    it('should resolve when DaffProductPageLoadFailure is dispatched', () => {
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

      resolver = TestBed.inject(DaffProductPageIdResolver);
      ProductFactory = TestBed.inject(DaffProductFactory);
      stubProduct = ProductFactory.create();
      store = TestBed.inject(Store);
      route = TestBed.inject(ActivatedRoute);
    }));

    it('should dispatch a DaffProductPageLoad action with the correct product id', () => {
      spyOn(store, 'dispatch');
      resolver.resolve( route.snapshot );
      expect(<any>store.dispatch).toHaveBeenCalledWith(
        new DaffProductPageLoad('123'),
      );
    });

    it('should resolve without a product load success or failure', () => {
      resolver.resolve(route.snapshot).subscribe((value) => {
        expect(value).toBeTruthy();
      });
    });
  });
});

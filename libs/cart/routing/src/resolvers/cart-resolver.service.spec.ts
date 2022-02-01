import {
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffCart } from '@daffodil/cart';
import { DaffCartResolverRedirectUrl } from '@daffodil/cart/routing';
import {
  daffCartReducers,
  DaffCartStateRootSlice,
  DaffCartLoadSuccess,
  DaffCartLoadFailure,
  DaffCartCreateFailure,
  DaffCartStorageFailure,
  DaffResolveCart,
  DAFF_CART_STORE_FEATURE_KEY,
}  from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import { DaffStorageServiceError } from '@daffodil/core';
import {
  DaffStateError,
  daffTransformErrorToStateError,
} from '@daffodil/core/state';

import { DaffCartResolver } from './cart-resolver.service';

describe('DaffCartResolver', () => {
  const actions$: Observable<any> = null;
  let cartResolver: DaffCartResolver;
  let store: Store<DaffCartStateRootSlice>;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;
  let router: Router;
  const stubUrl = '/cart';

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
        }),
        RouterTestingModule,
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: DaffCartResolverRedirectUrl, useValue: stubUrl },
      ],
    });

    cartResolver = TestBed.inject(DaffCartResolver);
    cartFactory = TestBed.inject(DaffCartFactory);
    stubCart = cartFactory.create();
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(cartResolver).toBeTruthy();
  });

  describe('resolve', () => {

    it('should dispatch a DaffResolveCart action', () => {
      spyOn(store, 'dispatch');
      cartResolver.resolve().subscribe();

      expect(store.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
    });

    describe('when DaffCartLoadSuccess is dispatched', () => {

      it('should resolve with a DaffCartLoadSuccess action', () => {
        cartResolver.resolve().subscribe((returnedValue) => {
          expect(returnedValue).toEqual(new DaffCartLoadSuccess(stubCart));
        });

        store.dispatch(new DaffCartLoadSuccess(stubCart));
      });

      it('should not redirect to the provided DaffCartResolverRedirectUrl', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).not.toHaveBeenCalledWith(stubUrl);
        });

        store.dispatch(new DaffCartLoadSuccess(stubCart));
      });
    });

    describe('when DaffCartLoadFailure is dispatched', () => {

      it('should resolve with a DaffCartLoadFailure action', () => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new DaffCartLoadFailure([]));
        });

        store.dispatch(new DaffCartLoadFailure([]));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
        });

        store.dispatch(new DaffCartLoadFailure([]));
      });
    });

    describe('when DaffCartCreateFailure is dispatched', () => {

      it('should resolve with a DaffCartCreateFailure action', () => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new DaffCartCreateFailure(null));
        });

        store.dispatch(new DaffCartCreateFailure(null));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
        });

        store.dispatch(new DaffCartCreateFailure(null));
      });
    });

    describe('when DaffCartStorageFailure is dispatched', () => {
      const error: DaffStateError = daffTransformErrorToStateError(new DaffStorageServiceError('An error occurred during storage.'));

      it('should resolve with a DaffCartStorageFailure action', () => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new DaffCartStorageFailure(error));
        });

        store.dispatch(new DaffCartStorageFailure(error));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
        });

        store.dispatch(new DaffCartStorageFailure(error));
      });
    });
  });
});

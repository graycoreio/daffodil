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
  DaffResolveCartSuccess,
  DaffResolveCartFailure,
  DaffResolveCartServerSide,
  DaffResolveCart,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffResolveCartPartialSuccess,
}  from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartResolver } from './cart-resolver.service';

describe('@daffodil/cart/routing | DaffCartResolver', () => {
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

      expect(<any>store.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
    });

    describe('when DaffResolveCartSuccess is dispatched', () => {

      it('should resolve with the cart payload', done => {
        cartResolver.resolve().subscribe((returnedValue) => {
          expect(returnedValue).toEqual(stubCart);
          done();
        });

        store.dispatch(new DaffResolveCartSuccess(stubCart));
      });

      it('should not redirect to the provided DaffCartResolverRedirectUrl', done => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).not.toHaveBeenCalledWith(stubUrl);
          done();
        });

        store.dispatch(new DaffResolveCartSuccess(stubCart));
      });
    });

    describe('when DaffResolveCartPartialSuccess is dispatched', () => {

      it('should resolve with the cart payload', done => {
        cartResolver.resolve().subscribe((returnedValue) => {
          expect(returnedValue).toEqual(stubCart);
          done();
        });

        store.dispatch(new DaffResolveCartPartialSuccess(stubCart, []));
      });

      it('should not redirect to the provided DaffCartResolverRedirectUrl', done => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).not.toHaveBeenCalledWith(stubUrl);
          done();
        });

        store.dispatch(new DaffResolveCartPartialSuccess(stubCart, []));
      });
    });

    describe('when DaffResolveCartFailure is dispatched', () => {

      it('should resolve with null', done => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toBeNull();
          done();
        });

        store.dispatch(new DaffResolveCartFailure([]));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', done => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
          done();
        });

        store.dispatch(new DaffResolveCartFailure([]));
      });
    });

    describe('when DaffResolveCartServerSide is dispatched', () => {

      it('should resolve with null', done => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toBeNull();
          done();
        });

        store.dispatch(new DaffResolveCartServerSide(null));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', done => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
          done();
        });

        store.dispatch(new DaffResolveCartServerSide(null));
      });
    });
  });
});

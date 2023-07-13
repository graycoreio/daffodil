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

import {
  DaffCart,
  DaffCartStorageService,
} from '@daffodil/cart';
import { DaffResolveCartGuardRedirectUrl } from '@daffodil/cart/routing';
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

import { DaffResolveCartGuard } from './resolve-cart.guard';

describe('@daffodil/cart/routing | DaffResolveCartGuard', () => {
  const actions$: Observable<any> = null;
  let cartResolver: DaffResolveCartGuard;
  let store: Store<DaffCartStateRootSlice>;
  let cartFactory: DaffCartFactory;

  let cartStorageSpy: jasmine.SpyObj<DaffCartStorageService>;

  let stubCart: DaffCart;
  let router: Router;
  const stubUrl = '/cart';

  beforeEach(waitForAsync(() => {
    cartStorageSpy = jasmine.createSpyObj('DaffCartStorageService', ['getCartId']);

    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
        }),
        RouterTestingModule,
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: DaffResolveCartGuardRedirectUrl, useValue: stubUrl },
        {
          provide: DaffCartStorageService,
          useValue: cartStorageSpy,
        },
      ],
    });

    cartResolver = TestBed.inject(DaffResolveCartGuard);
    cartFactory = TestBed.inject(DaffCartFactory);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    stubCart = cartFactory.create();


    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(cartResolver).toBeTruthy();
  });

  describe('canActivate', () => {
    describe('when there is a cart ID in storage', () => {
      beforeEach(() => {
        cartStorageSpy.getCartId.and.returnValue(stubCart.id);
      });

      it('should dispatch a DaffResolveCart action', () => {
        spyOn(store, 'dispatch');
        cartResolver.canActivate().subscribe();

        expect(store.dispatch).toHaveBeenCalledWith(new DaffResolveCart());
      });

      describe('when DaffResolveCartSuccess is dispatched', () => {
        it('should return true', done => {
          cartResolver.canActivate().subscribe((returnedValue) => {
            expect(returnedValue).toBeTrue();
            done();
          });

          store.dispatch(new DaffResolveCartPartialSuccess(stubCart, []));
        });
      });

      describe('when DaffResolveCartPartialSuccess is dispatched', () => {
        it('should return true', done => {
          cartResolver.canActivate().subscribe((returnedValue) => {
            expect(returnedValue).toBeTrue();
            done();
          });

          store.dispatch(new DaffResolveCartPartialSuccess(stubCart, []));
        });
      });

      describe('when DaffResolveCartFailure is dispatched', () => {
        it('should redirect to the provided DaffResolveCartGuardRedirectUrl', done => {
          cartResolver.canActivate().subscribe((resp) => {
            expect(resp).toEqual(router.parseUrl(stubUrl));
            done();
          });

          store.dispatch(new DaffResolveCartFailure([]));
        });
      });

      describe('when DaffResolveCartServerSide is dispatched', () => {
        it('should redirect to the provided DaffResolveCartGuardRedirectUrl', done => {
          cartResolver.canActivate().subscribe((resp) => {
            expect(resp).toEqual(router.parseUrl(stubUrl));
            done();
          });

          store.dispatch(new DaffResolveCartServerSide(null));
        });
      });
    });

    describe('when there is not a cart ID in storage', () => {
      beforeEach(() => {
        cartStorageSpy.getCartId.and.returnValue(null);
      });

      it('should redirect', done => {
        cartResolver.canActivate().subscribe((resp) => {
          expect(resp).toEqual(router.parseUrl(stubUrl));
          done();
        });
      });
    });
  });
});

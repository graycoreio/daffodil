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
import {
  daffCartReducers,
  DaffCartReducersState,
}  from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';

import {
  ResolveCart,
  ResolveCartSuccess,
  ResolveCartFailure,
} from '../actions/cart-resolver.actions';
import { CartResolver } from './cart-resolver.service';

describe('CartResolver', () => {
  const actions$: Observable<any> = null;
  let cartResolver: CartResolver;
  let store: Store<DaffCartReducersState>;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        }),
        RouterTestingModule,
      ],
      providers: [
        CartResolver,
        provideMockActions(() => actions$),
      ],
    });

    cartResolver = TestBed.inject(CartResolver);
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

    it('should dispatch a ResolveCart action', () => {
      spyOn(store, 'dispatch');
      cartResolver.resolve().subscribe();

      expect(store.dispatch).toHaveBeenCalledWith(new ResolveCart());
    });

    describe('when ResolveCartSuccess is dispatched with a cart', () => {

      describe('and cart is null', () => {

        it('should resolve with a ResolveCartFailure action', () => {
          cartResolver.resolve().subscribe((resolvedValue) => {
            expect(resolvedValue).toEqual(new ResolveCartFailure(null));
          });

          store.dispatch(new ResolveCartSuccess(null));
        });

        it('should redirect to the cart page', () => {
          cartResolver.resolve().subscribe(() => {
            expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
          });

          store.dispatch(new ResolveCartSuccess(null));
        });
      });

      describe('and cart is defined', () => {

        it('should resolve with a ResolveCartSuccess action', () => {
          cartResolver.resolve().subscribe((returnedValue) => {
            expect(returnedValue).toEqual(new ResolveCartSuccess(stubCart));
          });

          store.dispatch(new ResolveCartSuccess(stubCart));
        });

        it('should not redirect to the cart page', () => {
          cartResolver.resolve().subscribe(() => {
            expect(router.navigateByUrl).not.toHaveBeenCalledWith('/cart');
          });

          store.dispatch(new ResolveCartSuccess(stubCart));
        });
      });
    });

    describe('when ResolveCartFailure is dispatched', () => {

      it('should resolve with a ResolveCartFailure action', () => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new ResolveCartFailure(null));
        });

        store.dispatch(new ResolveCartFailure(null));
      });

      it('should redirect to the cart page', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
        });

        store.dispatch(new ResolveCartFailure(null));
      });
    });
  });
});

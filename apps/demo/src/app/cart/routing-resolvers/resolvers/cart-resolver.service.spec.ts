import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';

import { fromCart }  from '@daffodil/state';

import { CartResolver } from './cart-resolver.service';
import { ResolveCart, ResolveCartSuccess, ResolveCartFailure } from '../actions/cart-resolver.actions';
import { DaffCartFactory } from '@daffodil/core/testing';
import { Cart } from '@daffodil/core';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('CartResolver', () => {
  const actions$: Observable<any> = null;
  let cartResolver: CartResolver;
  let store: Store<fromCart.State>;
  let cartFactory: DaffCartFactory;
  let stubCart: Cart;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(fromCart.reducers),
        }),
        RouterTestingModule
      ],
      providers: [
        CartResolver,
        provideMockActions(() => actions$)
      ]
    });

    cartResolver = TestBed.get(CartResolver);
    cartFactory = TestBed.get(DaffCartFactory);
    stubCart = cartFactory.create();
    store = TestBed.get(Store);
    router = TestBed.get(Router);

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

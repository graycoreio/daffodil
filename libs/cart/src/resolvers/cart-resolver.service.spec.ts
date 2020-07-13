import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { 
	DaffCart, 
	daffCartReducers, 
	DaffCartReducersState, 
	DaffCartLoadSuccess, 
	DaffCartLoadFailure, 
	DaffCartCreateFailure, 
	DaffCartStorageFailure 
}  from '@daffodil/cart';
import { DaffCartFactory } from '@daffodil/cart/testing';

import { DaffCartResolver } from './cart-resolver.service';
import { DaffResolveCart } from '../actions/public_api';
import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';

describe('DaffCartResolver', () => {
  const actions$: Observable<any> = null;
  let cartResolver: DaffCartResolver;
  let store: Store<DaffCartReducersState>;
  let cartFactory: DaffCartFactory;
  let stubCart: DaffCart;
	let router: Router;
	const stubUrl = '/cart';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        }),
        RouterTestingModule
      ],
      providers: [
				provideMockActions(() => actions$),
				{ provide: DaffCartResolverRedirectUrl, useValue: stubUrl }
      ]
    });

    cartResolver = TestBed.get(DaffCartResolver);
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
          expect(resolvedValue).toEqual(new DaffCartLoadFailure(null));
        });

        store.dispatch(new DaffCartLoadFailure(null));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
        });

        store.dispatch(new DaffCartLoadFailure(null));
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
      
      it('should resolve with a DaffCartStorageFailure action', () => {
        cartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new DaffCartStorageFailure('Cart Storage Failed'));
        });

        store.dispatch(new DaffCartStorageFailure('Cart Storage Failed'));
      });

      it('should redirect to the provided DaffCartResolverRedirectUrl', () => {
        cartResolver.resolve().subscribe(() => {
          expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
        });

        store.dispatch(new DaffCartStorageFailure('Cart Storage Failed'));
      });
    });
  });
});

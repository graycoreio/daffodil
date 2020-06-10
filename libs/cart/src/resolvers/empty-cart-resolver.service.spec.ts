import { TestBed, async } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { DaffCart, DaffCartReducersState, daffCartReducers, DaffCartLoadSuccess }  from '@daffodil/cart';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { DaffEmptyCartResolver } from './empty-cart-resolver.service';
import { DaffEmptyCartResolverRedirectUrl } from './tokens/empty-cart-resolver-redirect.token';
import { DaffCartResolverRedirectUrl } from './tokens/cart-resolver-redirect.token';

describe('DaffEmptyCartResolver', () => {
  const actions$: Observable<any> = null;
  let emptyCartResolver: DaffEmptyCartResolver;
  let store: Store<DaffCartReducersState>;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
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
				{ provide: DaffEmptyCartResolverRedirectUrl, useValue: stubUrl },
				{ provide: DaffCartResolverRedirectUrl, useValue: stubUrl }
      ]
    });

    emptyCartResolver = TestBed.get(DaffEmptyCartResolver);
    cartFactory = TestBed.get(DaffCartFactory);
    cartItemFactory = TestBed.get(DaffCartItemFactory);
    stubCart = cartFactory.create();
    store = TestBed.get(Store);
    router = TestBed.get(Router);

    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(emptyCartResolver).toBeTruthy();
  });

  describe('resolve', () => {

    describe('when a cart is loaded', () => {
      
      it('should resolve with a DaffCartLoadSuccess action', () => {
        emptyCartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new DaffCartLoadSuccess(stubCart));
				});

				store.dispatch(new DaffCartLoadSuccess(stubCart));
      });

      describe('and cart is empty', () => {
        
        it('should redirect to the provided DaffEmptyCartRedirectUrl', () => {
					stubCart.items = [];

          emptyCartResolver.resolve().subscribe();
          store.dispatch(new DaffCartLoadSuccess(stubCart));
					expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
        });
      });

      describe('and cart is not empty', () => {
				
        it('should not redirect to the provided DaffEmptyCartRedirectUrl', () => {
					stubCart = cartFactory.create({items: cartItemFactory.create()});

          emptyCartResolver.resolve().subscribe();
          store.dispatch(new DaffCartLoadSuccess(stubCart));
					expect(router.navigateByUrl).not.toHaveBeenCalledWith(stubUrl);
        });
      });
    });
  });
});

import { TestBed, waitForAsync } from '@angular/core/testing';
import { StoreModule, combineReducers, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { DaffCart } from '@daffodil/cart';
import { DaffCartReducersState, daffCartReducers }  from '@daffodil/cart/state';
import { DaffCartFactory, DaffCartItemFactory } from '@daffodil/cart/testing';

import { EmptyCartResolver } from './empty-cart-resolver.service';
import { ResolveCartSuccess } from '../actions/cart-resolver.actions';

describe('EmptyCartResolver', () => {
  const actions$: Observable<any> = null;
  let emptyCartResolver: EmptyCartResolver;
  let store: Store<DaffCartReducersState>;
  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;
  let stubCart: DaffCart;
  let router: Router;
  const cartResolverSpy = jasmine.createSpyObj('CartResolver', ['resolve']);

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          cart: combineReducers(daffCartReducers),
        }),
        RouterTestingModule
      ],
      providers: [
        EmptyCartResolver,
        {provide: 'CartResolver', useValue: cartResolverSpy},
        provideMockActions(() => actions$)
      ]
    });

    cartResolverSpy.resolve.and.returnValue(of(new ResolveCartSuccess(stubCart)));
    emptyCartResolver = TestBed.inject(EmptyCartResolver);
    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);
    stubCart = cartFactory.create();
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    spyOn(router, 'navigateByUrl');
  }));

  it('should be created', () => {
    expect(emptyCartResolver).toBeTruthy();
  });

  describe('resolve', () => {

    describe('when ResolverCartSuccessAction is dispatched with a cart', () => {

      it('should resolve with a ResolveCartSuccess action', () => {
        emptyCartResolver.resolve().subscribe((resolvedValue) => {
          expect(resolvedValue).toEqual(new ResolveCartSuccess(stubCart));
        });
        store.dispatch(new ResolveCartSuccess(stubCart));
      });

      describe('and cart is empty', () => {

        it('should redirect to the cart page', () => {
          emptyCartResolver.resolve().subscribe(() => {
            expect(router.navigateByUrl).toHaveBeenCalledWith('/cart');
          });
          store.dispatch(new ResolveCartSuccess(stubCart));
        });
      });

      describe('and cart is not empty', () => {

        beforeEach(() => {
          stubCart = cartFactory.create({items: cartItemFactory.create()})
        });

        it('should not redirect to the cart page', () => {
          emptyCartResolver.resolve().subscribe(() => {
            expect(router.navigateByUrl).not.toHaveBeenCalledWith('/cart');
          });
          store.dispatch(new ResolveCartSuccess(stubCart));
        });
      });
    });
  });
});

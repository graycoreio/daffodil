import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import {
  DaffCart,
  DaffCartItem,
} from '@daffodil/cart';
import { DaffCartInStockItemsGuardRedirectUrl } from '@daffodil/cart/routing';
import {
  DaffCartLoadSuccess,
  DAFF_CART_STORE_FEATURE_KEY,
  daffCartReducers,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartItemFactory,
} from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { DaffCartInStockItemsGuard } from './in-stock-items.guard';

describe('@daffodil/cart/routing | DaffCartInStockItemsGuard', () => {
  let service: DaffCartInStockItemsGuard;
  let store: Store<any>;
  let router: Router;
  let scheduler: TestScheduler;

  let cartFactory: DaffCartFactory;
  let cartItemFactory: DaffCartItemFactory;

  let cart: DaffCart;
  let cartItems: DaffCartItem[];

  const stubUrl = 'url';

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartInStockItemsGuardRedirectUrl, useValue: stubUrl },
      ],
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: daffComposeReducers<DaffCartReducersState>([
            combineReducers(daffCartReducers),
            combineReducers({
              cart: daffCartRetrievalActionsReducerFactory(daffCartRetrivalActions),
              cartItems: daffCartItemEntitiesRetrievalActionsReducerFactory(daffCartRetrivalActions),
              order: daffIdentityReducer,
            }),
          ]),
        }),
        RouterTestingModule,
      ],
    });

    service = TestBed.inject(DaffCartInStockItemsGuard);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);

    cartFactory = TestBed.inject(DaffCartFactory);
    cartItemFactory = TestBed.inject(DaffCartItemFactory);

    cart = cartFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    describe('when there are only in stock items in the cart', () => {
      beforeEach(() => {
        cartItems = cartItemFactory.createMany(1, {
          in_stock: true,
        });
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          items: cartItems,
        }));
      });

      it('should allow activation', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivate()).toBe('(a|)', { a: true });
        });
      });
    });


    describe('when there are out of stock items in the cart', () => {
      beforeEach(() => {
        cartItems = cartItemFactory.createMany(1, {
          in_stock: false,
        });
        spyOn(router, 'navigateByUrl');
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          items: cartItems,
        }));
      });

      it('should not allow activation', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivate()).toBe('(a|)', { a: false });
        });
      });

      it('should redirect to the given DaffCartInStockItemsGuardRedirectUrl', () => {
        service.canActivate().subscribe();
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });

  describe('canActivateChild', () => {
    describe('when there are only in stock items in the cart', () => {
      beforeEach(() => {
        cartItems = cartItemFactory.createMany(1, {
          in_stock: true,
        });
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          items: cartItems,
        }));
      });

      it('should allow activation', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivateChild()).toBe('(a|)', { a: true });
        });
      });
    });


    describe('when there are out of stock items in the cart', () => {
      beforeEach(() => {
        cartItems = cartItemFactory.createMany(1, {
          in_stock: false,
        });
        spyOn(router, 'navigateByUrl');
        store.dispatch(new DaffCartLoadSuccess({
          ...cart,
          items: cartItems,
        }));
      });

      it('should not allow activation', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivateChild()).toBe('(a|)', { a: false });
        });
      });

      it('should redirect to the given DaffCartInStockItemsGuardRedirectUrl', () => {
        service.canActivate().subscribe();
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });
});

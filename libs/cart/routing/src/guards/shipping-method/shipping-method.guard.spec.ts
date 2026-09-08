import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { TestScheduler } from 'rxjs/testing';

import { DaffCart } from '@daffodil/cart';
import { DaffCartShippingMethodGuardRedirectUrl } from '@daffodil/cart/routing';
import {
  daffCartReducers,
  DaffCartLoadSuccess,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import { DaffCartFactory } from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { DaffShippingMethodGuard } from './shipping-method.guard';

describe('@daffodil/cart/routing | DaffShippingMethodGuard', () => {

  let service: DaffShippingMethodGuard;
  let store: Store<any>;
  let router: Router;
  let scheduler: TestScheduler;
  const stubUrl = 'url';

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: stubUrl },
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
    service = TestBed.inject(DaffShippingMethodGuard);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should allow activation when there is a shipping method', () => {
      const cart: DaffCart = TestBed.inject(DaffCartFactory).create();
      store.dispatch(new DaffCartLoadSuccess(cart));

      scheduler.run(({ expectObservable }) => {
        expectObservable(service.canActivate()).toBe('(a|)', { a: true });
      });
    });

    describe('when there is no shipping method', () => {

      beforeEach(() => {
        spyOn(router, 'navigateByUrl');
        const cart: DaffCart = TestBed.inject(DaffCartFactory).create({
          shipping_information: null,
        });
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should not allow activation', () => {
        scheduler.run(({ expectObservable }) => {
          expectObservable(service.canActivate()).toBe('(a|)', { a: false });
        });
      });

      it('should redirect to the given DaffCartShippingMethodGuardRedirectUrl', () => {
        service.canActivate().subscribe();
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  StoreModule,
  combineReducers,
  Store,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import { DaffCart } from '@daffodil/cart';
import { DaffCartShippingAddressGuardRedirectUrl } from '@daffodil/cart/routing';
import {
  daffCartReducers,
  DaffCartLoadSuccess,
  DAFF_CART_STORE_FEATURE_KEY,
  DaffCartReducersState,
  daffCartItemEntitiesRetrievalActionsReducerFactory,
  daffCartRetrievalActionsReducerFactory,
  daffCartRetrivalActions,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';
import {
  daffComposeReducers,
  daffIdentityReducer,
} from '@daffodil/core/state';

import { DaffShippingAddressGuard } from './shipping-address.guard';

describe('@daffodil/cart/routing | DaffShippingAddressGuard', () => {

  let service: DaffShippingAddressGuard;
  let store: Store<any>;
  let router: Router;
  const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartShippingAddressGuardRedirectUrl, useValue: stubUrl },
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
    service = TestBed.inject(DaffShippingAddressGuard);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should allow activation when there is a shipping address', () => {
      const cart: DaffCart = TestBed.inject(DaffCartFactory).create({
        shipping_address: new DaffCartAddressFactory().create(),
      });
      store.dispatch(new DaffCartLoadSuccess(cart));
      const expected = cold('(a|)', { a: true });

      expect(service.canActivate()).toBeObservable(expected);
    });

    describe('when there is no shipping address', () => {

      beforeEach(() => {
        spyOn(router, 'navigateByUrl');
        const cart: DaffCart = TestBed.inject(DaffCartFactory).create({
          shipping_address: null,
        });
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should not allow activation', () => {
        const expected = cold('(a|)', { a: false });

        expect(service.canActivate()).toBeObservable(expected);
      });

      it('should redirect to the given DaffCartShippingAddressGuardRedirectUrl', () => {
        service.canActivate().subscribe();
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });
});

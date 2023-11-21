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
import { DaffCartShippingMethodGuardRedirectUrl } from '@daffodil/cart/routing';
import {
  daffCartReducers,
  DaffCartLoadSuccess,
  DAFF_CART_STORE_FEATURE_KEY,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartShippingRateFactory,
} from '@daffodil/cart/testing';

import { DaffShippingMethodGuard } from './shipping-method.guard';

describe('Cart | State | Guards | DaffShippingMethodGuard', () => {

  let service: DaffShippingMethodGuard;
  let store: Store<any>;
  let router: Router;
  const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartShippingMethodGuardRedirectUrl, useValue: stubUrl },
      ],
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
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
      const cart: DaffCart = TestBed.inject(DaffCartFactory).create({
        shipping_information: new DaffCartShippingRateFactory().create(),
      });
      store.dispatch(new DaffCartLoadSuccess(cart));
      const expected = cold('(a|)', { a: true });

      expect(service.canActivate()).toBeObservable(expected);
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
        const expected = cold('(a|)', { a: false });

        expect(service.canActivate()).toBeObservable(expected);
      });

      it('should redirect to the given DaffCartShippingMethodGuardRedirectUrl', () => {
        service.canActivate().subscribe();
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });
});

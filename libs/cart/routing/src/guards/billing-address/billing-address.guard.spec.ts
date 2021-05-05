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
import { DaffCartBillingAddressGuardRedirectUrl } from '@daffodil/cart/routing';
import {
  DaffCartLoadSuccess,
  DAFF_CART_STORE_FEATURE_KEY,
  daffCartReducers,
} from '@daffodil/cart/state';
import {
  DaffCartFactory,
  DaffCartAddressFactory,
} from '@daffodil/cart/testing';

import { DaffBillingAddressGuard } from './billing-address.guard';

describe('Cart | State | Guards | DaffBillingAddressGuard', () => {

  let service: DaffBillingAddressGuard;
  let store: Store<any>;
  let router: Router;
  const stubUrl = 'url';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCartBillingAddressGuardRedirectUrl, useValue: stubUrl },
      ],
      imports: [
        StoreModule.forRoot({
          [DAFF_CART_STORE_FEATURE_KEY]: combineReducers(daffCartReducers),
        }),
        RouterTestingModule,
      ],
    });
    service = TestBed.inject(DaffBillingAddressGuard);
    store = TestBed.inject(Store);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('should allow activation when there is a billing address', () => {
      const cart: DaffCart = new DaffCartFactory().create({
        billing_address: new DaffCartAddressFactory().create(),
      });
      store.dispatch(new DaffCartLoadSuccess(cart));
      const expected = cold('(a|)', { a: true });

      expect(service.canActivate()).toBeObservable(expected);
    });

    describe('when there is no billing address', () => {

      beforeEach(() => {
        spyOn(router, 'navigateByUrl');
        const cart: DaffCart = new DaffCartFactory().create({
          billing_address: null,
        });
        store.dispatch(new DaffCartLoadSuccess(cart));
      });

      it('should not allow activation', () => {
        const expected = cold('(a|)', { a: false });

        expect(service.canActivate()).toBeObservable(expected);
      });

      it('should redirect to the given DaffCartBillingAddressGuardRedirectUrl', () => {
        service.canActivate().subscribe();
        expect(router.navigateByUrl).toHaveBeenCalledWith(stubUrl);
      });
    });
  });
});

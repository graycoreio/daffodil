import { TestBed } from '@angular/core/testing';
import {
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {
  combineReducers,
  Store,
  StoreModule,
} from '@ngrx/store';
import { cold } from 'jasmine-marbles';

import {
  DaffPaypalExpressPaymentRequest,
  DAFF_PAYPAL_PAYMENT_KIND,
} from '@daffodil/paypal';
import { DaffPaypalExpressDriverConfig } from '@daffodil/paypal/driver';
import {
  DaffPaypalApplyPayment,
  daffPaypalReducers,
  DaffPaypalStateRootSlice,
  DAFF_PAYPAL_STORE_FEATURE_KEY,
} from '@daffodil/paypal/state';
import { DaffPaypalExpressPaymentRequestFactory } from '@daffodil/paypal/testing';

import { DaffPaypalExpressApplyPaymentGuard } from './guard';

describe('@daffodil/paypal/routing | DaffPaypalExpressApplyPaymentGuard', () => {
  let service: DaffPaypalExpressApplyPaymentGuard;
  let store: Store<DaffPaypalStateRootSlice>;
  let paypalExpressRequestFactory: DaffPaypalExpressPaymentRequestFactory;

  let paypalExpressRequest: DaffPaypalExpressPaymentRequest;
  let config: DaffPaypalExpressDriverConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        StoreModule.forRoot({
          [DAFF_PAYPAL_STORE_FEATURE_KEY]: combineReducers(daffPaypalReducers),
        }),
      ],
    });

    store = TestBed.inject(Store);
    paypalExpressRequestFactory = TestBed.inject(DaffPaypalExpressPaymentRequestFactory);

    paypalExpressRequest = paypalExpressRequestFactory.create();
    config = {
      urls: {
        return: 'return',
        cancel: 'cancel',
      },
      params: {
        token: 'token',
        payerId: 'payerId',
      },
    };
    service = new DaffPaypalExpressApplyPaymentGuard(
      store,
      config,
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    beforeEach(() => {
      spyOn(store, 'dispatch');
    });

    it('should apply the payment using data from the configured route query params', () => {
      const route = new ActivatedRouteSnapshot();
      route.queryParams = {
        [config.params.token]: paypalExpressRequest.data.token,
        [config.params.payerId]: paypalExpressRequest.data.payerId,
      };
      const expected = new DaffPaypalApplyPayment<DaffPaypalExpressPaymentRequest>({
        kind: DAFF_PAYPAL_PAYMENT_KIND,
        data: {
          token: paypalExpressRequest.data.token,
          payerId: paypalExpressRequest.data.payerId,
        },
      });
      service.canActivate(route).subscribe(() => {
        expect(<any>store.dispatch).toHaveBeenCalledWith(expected);
      });
    });
  });
});

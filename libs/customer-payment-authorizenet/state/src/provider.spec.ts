import { TestBed } from '@angular/core/testing';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DAFF_AUTHORIZE_NET_EXTRA_REDUCERS } from '@daffodil/authorizenet/state';
import { DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND } from '@daffodil/customer-payment-authorizenet';
import {
  DAFF_PAYMENT_AVAILABLE_PROCESSORS,
  DAFF_PAYMENT_STORE_FEATURE_KEY,
  DaffPaymentReducersState,
} from '@daffodil/payment/state';

import { provideDaffCustomerPaymentAuthorizeNetPaymentState } from './provider';

describe('@daffodil/customer-payment-authorizenet/state | provideDaffCustomerPaymentAuthorizeNetPaymentState', () => {
  let store: Store<{ [DAFF_PAYMENT_STORE_FEATURE_KEY]: DaffPaymentReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideDaffCustomerPaymentAuthorizeNetPaymentState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the payment feature state', () => {
    let state: DaffPaymentReducersState;
    store.select(DAFF_PAYMENT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.payment).toBeDefined();
  });

  it('should register customer authorizenet as an available payment processor', () => {
    expect(TestBed.inject(DAFF_PAYMENT_AVAILABLE_PROCESSORS).map(({ kind }) => kind)).toContain(DAFF_CUSTOMER_PAYMENT_AUTHORIZENET_PAYMENT_KIND);
  });

  it('should provide an extra authorizenet reducer', () => {
    expect(TestBed.inject(DAFF_AUTHORIZE_NET_EXTRA_REDUCERS).length).toEqual(1);
  });
});

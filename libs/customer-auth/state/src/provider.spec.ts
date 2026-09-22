import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffCustomerTestingDriverModule } from '@daffodil/customer/driver/testing';
import {
  DAFF_CUSTOMER_EXTRA_REDUCERS,
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
  DaffCustomerReducersState,
} from '@daffodil/customer/state';

import { provideDaffCustomerAuthState } from './provider';

describe('@daffodil/customer-auth/state | provideDaffCustomerAuthState', () => {
  let store: Store<{ [DAFF_CUSTOMER_STORE_FEATURE_KEY]: DaffCustomerReducersState }>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffCustomerTestingDriverModule.forRoot()),
        provideDaffCustomerAuthState(),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the customer feature state', () => {
    let state: DaffCustomerReducersState;
    store.select(DAFF_CUSTOMER_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.customer).toBeDefined();
  });

  it('should provide the customer auth extra reducers', () => {
    expect(TestBed.inject(DAFF_CUSTOMER_EXTRA_REDUCERS).length).toEqual(1);
  });
});

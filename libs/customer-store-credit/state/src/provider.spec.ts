import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffCustomerStoreCreditTestingDriverModule } from '@daffodil/customer-store-credit/driver/testing';
import {
  DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY,
  daffCustomerStoreCreditProvideExtraReducers,
  DaffCustomerStoreCreditReducersState,
} from '@daffodil/customer-store-credit/state';

import { provideDaffCustomerStoreCreditState } from './provider';

describe('@daffodil/customer-store-credit/state | provideDaffCustomerStoreCreditState', () => {
  let store: Store<{ [DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY]: DaffCustomerStoreCreditReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffCustomerStoreCreditTestingDriverModule.forRoot()),
        provideDaffCustomerStoreCreditState(),
        ...daffCustomerStoreCreditProvideExtraReducers(extraReducer),
      ],
    });

    store = TestBed.inject(Store);
  });

  it('should register the customer store credit feature state', () => {
    let state: DaffCustomerStoreCreditReducersState;
    store.select(DAFF_CUSTOMER_STORE_CREDIT_STORE_FEATURE_KEY).subscribe((s) => state = s);

    expect(state).toBeDefined();
    expect(state.storeCredit).toBeDefined();
  });

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});

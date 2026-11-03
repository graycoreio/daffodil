import { importProvidersFrom } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideEffects } from '@ngrx/effects';
import {
  provideStore,
  Store,
} from '@ngrx/store';

import { DaffCustomerTestingDriverModule } from '@daffodil/customer/driver/testing';
import {
  DAFF_CUSTOMER_STORE_FEATURE_KEY,
  daffCustomerProvideExtraReducers,
  DaffCustomerReducersState,
} from '@daffodil/customer/state';

import { provideDaffCustomerState } from './provider';

describe('@daffodil/customer/state | provideDaffCustomerState', () => {
  let store: Store<{ [DAFF_CUSTOMER_STORE_FEATURE_KEY]: DaffCustomerReducersState }>;
  let extraReducer: jasmine.Spy;

  beforeEach(() => {
    extraReducer = jasmine.createSpy('extraReducer').and.callFake((state) => state);

    TestBed.configureTestingModule({
      providers: [
        provideStore(),
        provideEffects(),
        importProvidersFrom(DaffCustomerTestingDriverModule.forRoot()),
        provideDaffCustomerState(),
        ...daffCustomerProvideExtraReducers(extraReducer),
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

  it('should compose the extra reducers', () => {
    expect(extraReducer).toHaveBeenCalledWith(jasmine.anything(), jasmine.anything());
  });
});

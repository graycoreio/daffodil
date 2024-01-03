import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCustomerStoreCreditReducersState } from '@daffodil/customer-store-credit/state';

import {
  daffCustomerStoreCreditProvideExtraReducers,
  DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/customer-store-credit/state | daffCustomerStoreCreditProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCustomerStoreCreditReducersState>[];
  let result: ActionReducer<DaffCustomerStoreCreditReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCustomerStoreCreditProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});

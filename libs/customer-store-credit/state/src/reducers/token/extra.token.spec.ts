import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCustomerStoreCreditReducersState } from '@daffodil/customer-store-credit/state';

import {
  daffCustomerProvideExtraReducers,
  DAFF_CUSTOMER_STORE_CREDIT_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/customer-store-credit/state | daffCustomerProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCustomerStoreCreditReducersState>[];
  let result: ActionReducer<DaffCustomerStoreCreditReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCustomerProvideExtraReducers(...reducers),
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

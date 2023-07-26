import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCustomerPaymentReducersState } from '@daffodil/customer-payment/state';

import {
  daffCustomerPaymentProvideExtraReducers,
  DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/customer-payment/state | daffCustomerPaymentProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCustomerPaymentReducersState>[];
  let result: ActionReducer<DaffCustomerPaymentReducersState>[];

  beforeEach(() => {
    reducers = [
      (state, action) => state,
      (state, action) => state,
    ];

    TestBed.configureTestingModule({
      providers: [
        ...daffCustomerPaymentProvideExtraReducers(...reducers),
      ],
    });

    result = TestBed.inject(DAFF_CUSTOMER_PAYMENT_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});

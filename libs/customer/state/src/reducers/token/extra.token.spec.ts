import { TestBed } from '@angular/core/testing';
import { ActionReducer } from '@ngrx/store';

import { DaffCustomerReducersState } from '@daffodil/customer/state';

import {
  daffCustomerProvideExtraReducers,
  DAFF_CUSTOMER_EXTRA_REDUCERS,
} from './extra.token';

describe('@daffodil/customer/state | daffCustomerProvideExtraReducers', () => {
  let reducers: ActionReducer<DaffCustomerReducersState>[];
  let result: ActionReducer<DaffCustomerReducersState>[];

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

    result = TestBed.inject(DAFF_CUSTOMER_EXTRA_REDUCERS);
  });

  it('should provide the reducers to the token', () => {
    reducers.forEach(reducer => {
      expect(result).toContain(reducer);
    });
  });
});

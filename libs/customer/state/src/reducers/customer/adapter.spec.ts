import { TestBed } from '@angular/core/testing';

import {
  DaffState,
  DaffStateError,
} from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';
import {
  daffCustomerInitialState as initialState,
  DaffCustomerReducerState,
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { daffCustomerStateStoreCustomer } from './adapter';

describe('@daffodil/customer/state | daffCustomerStateStoreCustomer', () => {
  let customerFactory: DaffCustomerFactory;
  let mockCustomer: DaffCustomer;
  let mockError: DaffStateError;
  let result: DaffCustomerReducerState;
  let state: DaffCustomerReducerState;

  beforeEach(() => {
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockCustomer = customerFactory.create();
    mockError = {
      code: 'error code',
      message: 'error message',
    };
    state = {
      ...initialState,
      loading: DaffState.Resolving,
      errors: [mockError],
    };

    result = daffCustomerStateStoreCustomer(mockCustomer, state);
  });

  it('should store the customer',  () => {
    expect(result.customer).toEqual(mockCustomer);
  });

  it('sets loading to stable', () => {
    expect(result.loading).toEqual(DaffState.Stable);
  });

  it('should reset errors', () => {
    expect(result.errors).toEqual([]);
  });
});

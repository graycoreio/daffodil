import { TestBed } from '@angular/core/testing';

import { DaffStateError } from '@daffodil/core/state';
import { DaffCustomer } from '@daffodil/customer';
import {
  daffCustomerInitialState,
  daffCustomerInitialState as initialState,
  DaffCustomerReducerState,
} from '@daffodil/customer/state';
import { DaffCustomerFactory } from '@daffodil/customer/testing';

import { DaffCustomerStateReducerAdapter } from './adapter';

describe('@daffodil/customer/state | DaffCustomerStateReducerAdapter', () => {
  let adapter: DaffCustomerStateReducerAdapter;
  let customerFactory: DaffCustomerFactory;
  let mockCustomer: DaffCustomer;

  beforeEach(() => {
    adapter = new DaffCustomerStateReducerAdapter();
    customerFactory = TestBed.inject(DaffCustomerFactory);

    mockCustomer = customerFactory.create();
  });

  describe('loadCustomer', () => {
    let result: DaffCustomerReducerState;

    beforeEach(() => {
      result = adapter.loadCustomer(daffCustomerInitialState);
    });

    it('sets loading state to true', () => {
      expect(result.loading).toEqual(true);
    });
  });

  describe('storeCustomer', () => {
    let mockError: DaffStateError;
    let result: DaffCustomerReducerState;
    let state: DaffCustomerReducerState;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [mockError],
      };

      result = adapter.storeCustomer(mockCustomer, state);
    });

    it('should store the customer',  () => {
      expect(result.customer).toEqual(mockCustomer);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });

    it('should reset errors', () => {
      expect(result.errors).toEqual([]);
    });
  });

  describe('storeError', () => {
    let result;
    let state: DaffCustomerReducerState;
    let mockError: DaffStateError;

    beforeEach(() => {
      mockError = {
        code: 'error code',
        message: 'error message',
      };
      state = {
        ...initialState,
        loading: true,
        errors: [
          { code: 'firstErrorCode', message: 'firstErrorMessage' },
        ],
      };


      result = adapter.storeError(mockError, state);
    });

    it('adds the error in action.payload to state.errors', () => {
      expect(result.errors).toContain(mockError);
      expect(result.errors.length).toEqual(2);
    });

    it('sets loading to false', () => {
      expect(result.loading).toEqual(false);
    });
  });
});

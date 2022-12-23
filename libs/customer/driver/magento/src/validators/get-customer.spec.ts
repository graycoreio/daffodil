import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';
import { MagentoGetCustomerResponse } from '@daffodil/customer/driver/magento';
import { MagentoCustomerFactory } from '@daffodil/customer/driver/magento/testing';

import { validateGetCustomerResponse as validator } from './get-customer';

describe('@daffodil/customer/driver/magento | validateGetCustomerResponse', () => {
  let response: ApolloQueryResult<MagentoGetCustomerResponse>;
  let customerFactory: MagentoCustomerFactory;

  beforeEach(() => {
    customerFactory = TestBed.inject(MagentoCustomerFactory);

    response = {
      data: {
        customer: customerFactory.create(),
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response has a customer', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have customer', () => {
    beforeEach(() => {
      response.data.customer = null;
    });

    it('should throw a DaffCustomerInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerInvalidAPIResponseError));
    });
  });
});

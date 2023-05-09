import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerStoreCreditInvalidAPIResponseError } from '@daffodil/customer-store-credit/driver';
import { MagentoGetCustomerStoreCreditResponse } from '@daffodil/customer-store-credit/driver/magento';
import { MagentoCustomerStoreCreditFactory } from '@daffodil/customer-store-credit/driver/magento/testing';

import { validateGetCustomerStoreCreditResponse as validator } from './get-customer-store-credit';

describe('@daffodil/customer-store-credit/driver/magento | validateGetCustomerStoreCreditResponse', () => {
  let response: ApolloQueryResult<MagentoGetCustomerStoreCreditResponse>;
  let storeCreditFactory: MagentoCustomerStoreCreditFactory;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(MagentoCustomerStoreCreditFactory);

    response = {
      data: {
        customer: {
          store_credit: storeCreditFactory.create({
            enabled: true,
          }),
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response has store credit', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have store credit', () => {
    beforeEach(() => {
      response.data.customer.store_credit.enabled = false;
    });

    it('should throw a DaffCustomerStoreCreditInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerStoreCreditInvalidAPIResponseError));
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';
import { MagentoCreateCustomerAddressResponse } from '@daffodil/customer/driver/magento';
import { MagentoCustomerAddressFactory } from '@daffodil/customer/driver/magento/testing';

import { validateCreateCustomerAddressResponse as validator } from './create-customer-address';

describe('@daffodil/customer/driver/magento | validateCreateCustomerAddressResponse', () => {
  let response: ApolloQueryResult<MagentoCreateCustomerAddressResponse>;
  let customerAddressFactory: MagentoCustomerAddressFactory;

  beforeEach(() => {
    customerAddressFactory = TestBed.inject(MagentoCustomerAddressFactory);

    response = {
      data: {
        createCustomerAddress: customerAddressFactory.create(),
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response is an address', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response is not an address', () => {
    beforeEach(() => {
      response.data.createCustomerAddress = null;
    });

    it('should throw a DaffCustomerInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerInvalidAPIResponseError));
    });
  });
});

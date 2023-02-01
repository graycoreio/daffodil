import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer/driver';
import { MagentoDeleteCustomerAddressResponse } from '@daffodil/customer/driver/magento';

import { validateDeleteCustomerAddressResponse as validator } from './delete-customer-address';

describe('@daffodil/customer/driver/magento | validateDeleteCustomerAddressResponse', () => {
  let response: ApolloQueryResult<MagentoDeleteCustomerAddressResponse>;

  beforeEach(() => {
    response = {
      data: {
        deleteCustomerAddress: true,
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response is true', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response is false', () => {
    beforeEach(() => {
      response.data.deleteCustomerAddress = false;
    });

    it('should throw a DaffCustomerInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerInvalidAPIResponseError));
    });
  });
});

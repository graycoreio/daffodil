import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';
import { MagentoRevokeCustomerTokenResponse } from '@daffodil/auth/driver/magento';

import { validateRevokeTokenResponse as validator } from './revoke-token';

describe('@daffodil/auth/driver/magento | RevokeToken', () => {
  let response: ApolloQueryResult<MagentoRevokeCustomerTokenResponse>;

  beforeEach(() => {
    response = {
      data: {
        revokeCustomerToken: {
          result: true,
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('when the response has a truthy result', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response has a falsey result', () => {
    beforeEach(() => {
      response.data.revokeCustomerToken.result = false;
    });

    it('should throw a DaffAuthInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffAuthInvalidAPIResponseError));
    });
  });
});

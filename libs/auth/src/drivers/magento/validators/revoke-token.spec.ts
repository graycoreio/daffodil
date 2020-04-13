import { ApolloQueryResult } from 'apollo-client';

import { MagentoRevokeCustomerTokenResponse } from '../queries/public_api';
import { validateRevokeTokenResponse as validator } from './revoke-token';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

describe('Driver | Magento | Auth | Validator | RevokeToken', () => {
  let response: ApolloQueryResult<MagentoRevokeCustomerTokenResponse>;

  beforeEach(() => {
    response = {
      data: {
        revokeCustomerToken: {
          result: true
        }
      },
      loading: null,
      networkStatus: null,
      stale: null
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

    it('should throw a DaffInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffInvalidAPIResponseError));
    });
  });
});

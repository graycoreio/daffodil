import { ApolloQueryResult } from 'apollo-client';

import { MagentoCheckTokenResponse } from '../queries/public_api';
import { validateCheckTokenResponse as validator } from './check-token';
import { DaffInvalidAPIResponseError } from '../../../errors/public_api';

describe('Driver | Magento | Auth | Validator | CheckToken', () => {
  let response: ApolloQueryResult<MagentoCheckTokenResponse>;

  beforeEach(() => {
    response = {
      data: {
        customer: {
          id: 5
        }
      },
      loading: null,
      networkStatus: null,
      stale: null
    };
  });

  describe('when the response has a customer ID defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have a customer ID defined', () => {
    beforeEach(() => {
      response.data.customer.id = null;
    });

    it('should throw a DaffInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffInvalidAPIResponseError));
    });
  });
});

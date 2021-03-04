import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';
import { MagentoCheckTokenResponse } from '../queries/public_api';
import { validateCheckTokenResponse as validator } from './check-token';

describe('Driver | Magento | Auth | Validator | CheckToken', () => {
  let response: ApolloQueryResult<MagentoCheckTokenResponse>;

  beforeEach(() => {
    response = {
      data: {
        customer: {
          id: 5,
        },
      },
      loading: null,
      networkStatus: null,
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

    it('should throw a DaffAuthInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffAuthInvalidAPIResponseError));
    });
  });
});

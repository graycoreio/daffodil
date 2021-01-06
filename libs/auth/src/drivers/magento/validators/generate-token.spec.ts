import {ApolloQueryResult} from '@apollo/client/core';

import { MagentoGenerateTokenResponse } from '../queries/public_api';
import { validateGenerateTokenResponse as validator } from './generate-token';
import { DaffAuthInvalidAPIResponseError } from '../../../errors/public_api';

describe('Driver | Magento | Auth | Validator | GenerateToken', () => {
  let response: ApolloQueryResult<MagentoGenerateTokenResponse>;

  beforeEach(() => {
    response = {
      data: {
        generateCustomerToken: {
          token: 'token'
        }
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('when the response has an auth token defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have an auth token defined', () => {
    beforeEach(() => {
      response.data.generateCustomerToken.token = null;
    });

    it('should throw a DaffAuthInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffAuthInvalidAPIResponseError));
    });
  });
});

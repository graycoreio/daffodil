import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';
import { MagentoResetPasswordResponse } from '@daffodil/auth/driver/magento';

import { validateResetPasswordResponse as validator } from './reset-password';

describe('@daffodil/auth/driver/magento | validateResetPasswordResponse', () => {
  let response: ApolloQueryResult<MagentoResetPasswordResponse>;

  beforeEach(() => {
    response = {
      data: {
        resetPassword: true,
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
      response.data.resetPassword = false;
    });

    it('should throw a DaffAuthInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffAuthInvalidAPIResponseError));
    });
  });
});

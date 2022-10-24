import { ApolloQueryResult } from '@apollo/client/core';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';
import { MagentoSendResetEmailResponse } from '@daffodil/auth/driver/magento';

import { validateSendResetEmailResponse as validator } from './send-reset-email';

describe('@daffodil/auth/driver/magento | validateSendResetEmailResponse', () => {
  let response: ApolloQueryResult<MagentoSendResetEmailResponse>;

  beforeEach(() => {
    response = {
      data: {
        requestPasswordResetEmail: true,
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
      response.data.requestPasswordResetEmail = false;
    });

    it('should throw a DaffAuthInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffAuthInvalidAPIResponseError));
    });
  });
});

import { Apollo } from 'apollo-angular';

import { DaffAuthInvalidAPIResponseError } from '@daffodil/auth/driver';
import { MagentoCheckTokenResponse } from '@daffodil/auth/driver/magento';

import { validateCheckTokenResponse as validator } from './check-token';

describe('@daffodil/auth/driver/magento | validateCheckTokenResponse', () => {
  let response: Apollo.QueryResult<MagentoCheckTokenResponse>;

  beforeEach(() => {
    response = {
      data: {
        customer: {
          email: 'email',
        },
      },
    };
  });

  describe('when the response has a customer email defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have a customer email defined', () => {
    beforeEach(() => {
      response.data.customer.email = null;
    });

    it('should throw a DaffAuthInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffAuthInvalidAPIResponseError));
    });
  });
});

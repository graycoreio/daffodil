import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';
import { MagentoDeleteCustomerPaymentResponse } from '@daffodil/customer-payment-authorizenet/driver/magento';

import { validateDeleteCustomerPaymentResponse as validator } from './delete-customer-payment';

describe('@daffodil/customer-payment-authorizenet/driver/magento | validateDeleteCustomerPaymentResponse', () => {
  let response: Apollo.QueryResult<MagentoDeleteCustomerPaymentResponse>;

  beforeEach(() => {
    response = {
      data: {
        deleteTokenBaseCard: true,
      },
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
      response.data.deleteTokenBaseCard = false;
    });

    it('should throw a DaffCustomerPaymentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerPaymentInvalidAPIResponseError));
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';
import { MagentoGetCustomerPaymentsResponse } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { MagentoTokenBaseCardFactory } from '@daffodil/customer-payment-authorizenet/driver/magento/testing';

import { validateGetCustomerPaymentsResponse as validator } from './get-customer-payments';

describe('@daffodil/customer-payment-authorizenet/driver/magento | validateGetCustomerPaymentsResponse', () => {
  let response: Apollo.QueryResult<MagentoGetCustomerPaymentsResponse>;
  let paymentFactory: MagentoTokenBaseCardFactory;

  beforeEach(() => {
    paymentFactory = TestBed.inject(MagentoTokenBaseCardFactory);

    response = {
      data: {
        tokenBaseCards: paymentFactory.createMany(3),
      },
    };
  });

  describe('and when the response has cards', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have cards', () => {
    beforeEach(() => {
      response.data.tokenBaseCards = null;
    });

    it('should throw a DaffCustomerPaymentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerPaymentInvalidAPIResponseError));
    });
  });
});

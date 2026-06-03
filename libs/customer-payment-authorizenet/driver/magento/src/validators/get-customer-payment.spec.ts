import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentNotFoundError } from '@daffodil/customer-payment/driver';
import { MagentoGetCustomerPaymentResponse } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { MagentoTokenBaseCardFactory } from '@daffodil/customer-payment-authorizenet/driver/magento/testing';

import { validateGetCustomerPaymentResponse as validator } from './get-customer-payment';

describe('@daffodil/customer-payment-authorizenet/driver/magento | validateGetCustomerPaymentResponse', () => {
  let response: Apollo.QueryResult<MagentoGetCustomerPaymentResponse>;
  let paymentFactory: MagentoTokenBaseCardFactory;

  beforeEach(() => {
    paymentFactory = TestBed.inject(MagentoTokenBaseCardFactory);

    response = {
      data: {
        tokenBaseCards: [paymentFactory.create()],
      },
    };
  });

  describe('and when the response has a card', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have a card', () => {
    beforeEach(() => {
      response.data.tokenBaseCards = [null];
    });

    it('should throw a DaffCustomerPaymentNotFoundError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerPaymentNotFoundError));
    });
  });
});

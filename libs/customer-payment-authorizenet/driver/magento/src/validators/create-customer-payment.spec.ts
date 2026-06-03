import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';
import { MagentoCreateCustomerPaymentResponse } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { MagentoTokenBaseCardFactory } from '@daffodil/customer-payment-authorizenet/driver/magento/testing';

import { validateCreateCustomerPaymentResponse as validator } from './create-customer-payment';

describe('@daffodil/customer-payment-authorizenet/driver/magento | validateCreateCustomerPaymentResponse', () => {
  let response: Apollo.QueryResult<MagentoCreateCustomerPaymentResponse>;
  let customerPaymentFactory: MagentoTokenBaseCardFactory;

  beforeEach(() => {
    customerPaymentFactory = TestBed.inject(MagentoTokenBaseCardFactory);

    response = {
      data: {
        createTokenBaseCard: customerPaymentFactory.create(),
      },
    };
  });

  describe('and when the response is a payment', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response is not a payment', () => {
    beforeEach(() => {
      response.data.createTokenBaseCard = null;
    });

    it('should throw a DaffCustomerPaymentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerPaymentInvalidAPIResponseError));
    });
  });
});

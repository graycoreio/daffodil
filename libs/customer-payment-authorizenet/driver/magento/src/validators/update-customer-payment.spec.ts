import { TestBed } from '@angular/core/testing';
import { Apollo } from 'apollo-angular';

import { DaffCustomerPaymentInvalidAPIResponseError } from '@daffodil/customer-payment/driver';
import { MagentoUpdateCustomerPaymentResponse } from '@daffodil/customer-payment-authorizenet/driver/magento';
import { MagentoTokenBaseCardFactory } from '@daffodil/customer-payment-authorizenet/driver/magento/testing';

import { validateUpdateCustomerPaymentResponse as validator } from './update-customer-payment';

describe('@daffodil/customer-payment-authorizenet/driver/magento | validateUpdateCustomerPaymentResponse', () => {
  let response: Apollo.QueryResult<MagentoUpdateCustomerPaymentResponse>;
  let customerPaymentFactory: MagentoTokenBaseCardFactory;

  beforeEach(() => {
    customerPaymentFactory = TestBed.inject(MagentoTokenBaseCardFactory);

    response = {
      data: {
        updateTokenBaseCard: customerPaymentFactory.create(),
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
      response.data.updateTokenBaseCard = null;
    });

    it('should throw a DaffCustomerPaymentInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerPaymentInvalidAPIResponseError));
    });
  });
});

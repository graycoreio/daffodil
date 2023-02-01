import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';
import { MagentoGetCustomerOrderResponse } from '@daffodil/customer-order/driver/magento';
import { MagentoCustomerOrderFactory } from '@daffodil/customer-order/driver/magento/testing';

import { validateGetCustomerOrderResponse as validator } from './get-order';

describe('@daffodil/customer-order/driver/magento | validateGetCustomerOrderResponse', () => {
  let response: ApolloQueryResult<MagentoGetCustomerOrderResponse>;
  let orderFactory: MagentoCustomerOrderFactory;

  beforeEach(() => {
    orderFactory = TestBed.inject(MagentoCustomerOrderFactory);

    response = {
      data: {
        customer: {
          orders: {
            items: [orderFactory.create()],
          },
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response has a customer', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have customer', () => {
    beforeEach(() => {
      response.data.customer = null;
    });

    it('should throw a DaffCustomerInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCustomerInvalidAPIResponseError));
    });
  });
});

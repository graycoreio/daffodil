import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCustomerInvalidAPIResponseError } from '@daffodil/customer-order/driver';
import { MagentoGetCustomerOrdersResponse } from '@daffodil/customer-order/driver/magento';
import { MagentoCustomerOrdersFactory } from '@daffodil/customer-order/driver/magento/testing';

import { validateGetCustomerOrdersResponse as validator } from './get-orders';

describe('@daffodil/customer-order/driver/magento | validateGetCustomerOrdersResponse', () => {
  let response: ApolloQueryResult<MagentoGetCustomerOrdersResponse>;
  let ordersFactory: MagentoCustomerOrdersFactory;

  beforeEach(() => {
    ordersFactory = TestBed.inject(MagentoCustomerOrdersFactory);

    response = {
      data: {
        customer: {
          email: 'email',
          orders: ordersFactory.create(),
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

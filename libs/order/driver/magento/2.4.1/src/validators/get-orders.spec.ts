import {ApolloQueryResult} from '@apollo/client/core';

import { DaffOrderInvalidAPIResponseError } from '@daffodil/order/driver';
import { MagentoGetGuestOrdersResponse } from '@daffodil/order/driver/magento/2.4.1';

import { validateGetOrdersResponse as validator } from './get-orders';

describe('Driver | Magento | Order | Validator | GetOrders', () => {
  let response: ApolloQueryResult<MagentoGetGuestOrdersResponse>;

  beforeEach(() => {
    response = {
      data: {
        graycoreGuestOrders: {
          items: []
        }
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('when the response has a order list defined', () => {
    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('when the response does not have a order list defined', () => {
    beforeEach(() => {
      response.data.graycoreGuestOrders.items = null;
    });

    it('should throw a DaffOrderInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffOrderInvalidAPIResponseError));
    });
  });

  describe('when the response has an order without a billing address, shipping address, or payment', () => {
    beforeEach(() => {
      response.data.graycoreGuestOrders.items = [{} as any];
    });

    it('should throw a DaffOrderInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffOrderInvalidAPIResponseError));
    });
  });
});

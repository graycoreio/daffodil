import { ApolloQueryResult } from 'apollo-client';

import { DaffInvalidAPIResponseError } from '@daffodil/order';

import { MagentoGetGuestOrdersResponse } from '../queries/public_api';
import { validateGetOrdersResponse as validator } from './get-orders';

describe('Driver | Magento | Order | Validator | GetOrders', () => {
  let response: ApolloQueryResult<MagentoGetGuestOrdersResponse>;

  beforeEach(() => {
    response = {
      data: {
        graycoreGuestOrders: {
          orders: []
        }
      },
      loading: null,
      networkStatus: null,
      stale: null
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
      response.data.graycoreGuestOrders.orders = null;
    });

    it('should throw a DaffInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffInvalidAPIResponseError));
    });
  });

  describe('when the response has an order without a billing address, shipping address, or payment', () => {
    beforeEach(() => {
      response.data.graycoreGuestOrders.orders = [{} as any];
    });

    it('should throw a DaffInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffInvalidAPIResponseError));
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCartStoreCreditInvalidAPIResponseError } from '@daffodil/cart-store-credit/driver';
import { MagentoRemoveStoreCreditResponse } from '@daffodil/cart-store-credit/driver/magento';
import { MagentoCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/driver/magento/testing';

import { validateRemoveStoreCreditResponse as validator } from './remove-store-credit';

describe('@daffodil/cart-store-credit/driver/magento | validateRemoveStoreCreditResponse', () => {
  let response: ApolloQueryResult<MagentoRemoveStoreCreditResponse>;
  let storeCreditFactory: MagentoCartWithStoreCreditFactory;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(MagentoCartWithStoreCreditFactory);

    response = {
      data: {
        removeStoreCreditFromCart: {
          cart: storeCreditFactory.create(),
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response has store credit', () => {
    beforeEach(() => {
      response.data.removeStoreCreditFromCart.cart.applied_store_credit.enabled = true;
    });

    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have store credit', () => {
    beforeEach(() => {
      response.data.removeStoreCreditFromCart.cart.applied_store_credit.enabled = false;
    });

    it('should throw a DaffCartStoreCreditInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCartStoreCreditInvalidAPIResponseError));
    });
  });
});

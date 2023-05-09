import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffCartStoreCreditInvalidAPIResponseError } from '@daffodil/cart-store-credit/driver';
import { MagentoApplyStoreCreditResponse } from '@daffodil/cart-store-credit/driver/magento';
import { MagentoCartWithStoreCreditFactory } from '@daffodil/cart-store-credit/driver/magento/testing';

import { validateApplyStoreCreditResponse as validator } from './apply-store-credit';

describe('@daffodil/cart-store-credit/driver/magento | validateApplyStoreCreditResponse', () => {
  let response: ApolloQueryResult<MagentoApplyStoreCreditResponse>;
  let storeCreditFactory: MagentoCartWithStoreCreditFactory;

  beforeEach(() => {
    storeCreditFactory = TestBed.inject(MagentoCartWithStoreCreditFactory);

    response = {
      data: {
        applyStoreCreditToCart: {
          cart: storeCreditFactory.create(),
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('and when the response has store credit', () => {
    beforeEach(() => {
      response.data.applyStoreCreditToCart.cart.applied_store_credit.enabled = true;
    });

    it('should return the response and not throw an error', () => {
      const result = validator(response);

      expect(result).toEqual(response);
    });
  });

  describe('and when the response does not have store credit', () => {
    beforeEach(() => {
      response.data.applyStoreCreditToCart.cart.applied_store_credit.enabled = false;
    });

    it('should throw a DaffCartStoreCreditInvalidAPIResponseError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffCartStoreCreditInvalidAPIResponseError));
    });
  });
});

import { ApolloError } from '@apollo/client/core';
import { GraphQLError } from 'graphql';

import {
  DaffCartNotFoundError,
  DaffInvalidCouponCodeError,
  DaffProductOutOfStockError,
  DaffUnauthorizedForCartError,
} from '@daffodil/cart/driver';

import { transformCartMagentoError } from './transform';
import { MagentoCartGraphQlErrorCode } from './codes';

fdescribe('@daffodil/cart/driver/magento | transformCartMagentoError', () => {
  let apolloError: ApolloError;
  let graphQlError: GraphQLError;
  let transformedError: Error;

  it('should transform error codes correctly', () => {
    const errors = [
      { message: 'The coupon code isn\'t valid. Verify the code and try again.', category: undefined, type: DaffInvalidCouponCodeError },
      { message: 'There are no source items with the in stock status', category: undefined, type: DaffProductOutOfStockError },
      { message: 'Could not find a cart with ID "asdasdasd"', category: MagentoCartGraphQlErrorCode.CART_NOT_FOUND, type: DaffCartNotFoundError },
      { message: 'Could not find a cart with ID "asdasdasd"', category: undefined, type: DaffCartNotFoundError },
      { message: 'Cart does not contain products', category: undefined, type: Error },
      { message: 'The current customer isn\'t authorized', category: undefined, type: DaffUnauthorizedForCartError },
    ];

    errors.forEach((el) => {
      graphQlError = new GraphQLError(el.message);
      if(el.category) {
        graphQlError.extensions.category = el.category;
      }
      apolloError = new ApolloError({
        graphQLErrors: [graphQlError],
      });
      transformedError = transformCartMagentoError(apolloError);

      expect(transformedError).toEqual(jasmine.any(el.type));
      expect(transformedError.message).toContain(el.message);
    });
  });
});

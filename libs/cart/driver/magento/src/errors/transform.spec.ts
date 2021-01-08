import { ApolloError } from '@apollo/client/core';
import { GraphQLError } from 'graphql';

import { DaffInvalidCouponCodeError } from '@daffodil/cart/driver';

import { transformCartMagentoError } from './transform';

describe('Cart | Driver | Magento | transformCartMagentoError', () => {
  let apolloError: ApolloError;
  let graphQlError: GraphQLError;
  let transformedError: Error;

  describe('when the GraphQL error is an invalid coupon code error', () => {
    beforeEach(() => {
      graphQlError = new GraphQLError('The coupon code isn\'t valid. Verify the code and try again.');
      apolloError = new ApolloError({
        graphQLErrors: [graphQlError]
      })

      transformedError = transformCartMagentoError(apolloError)
    })

    it('should return a DaffInvalidCouponCodeError', () => {
      expect(transformedError).toEqual(jasmine.any(DaffInvalidCouponCodeError))
    })

    it('should return an error containing the GraphQL error message', () => {
      expect(transformedError.message).toContain(graphQlError.message)
    })
  })
})

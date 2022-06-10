import { ApolloError } from '@apollo/client/core';
import { GraphQLError } from 'graphql';

import { DaffSearchQueryTooShortError } from '@daffodil/search/driver';

import { transformSearchCategoryMagentoError } from './transform';

describe('@daffodil/search-product/driver/magento | transformSearchCategoryMagentoError', () => {
  let apolloError: ApolloError;
  let graphQlError: GraphQLError;
  let transformedError: Error;

  describe('when the GraphQL error is an query too short error', () => {
    beforeEach(() => {
      graphQlError = new GraphQLError('Invalid match filter. Minimum length is 3.');
      apolloError = new ApolloError({
        graphQLErrors: [graphQlError],
      });

      transformedError = transformSearchCategoryMagentoError(apolloError);
    });

    it('should return a DaffSearchQueryTooShortError', () => {
      expect(transformedError).toEqual(jasmine.any(DaffSearchQueryTooShortError));
    });
  });
});

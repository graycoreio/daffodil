import { ApolloError } from '@apollo/client/core';
import { GraphQLError } from 'graphql';

import { DaffCollectionPageOutOfBoundsError } from '@daffodil/core';

import { transformSearchProductMagentoError } from './transform';

describe('@daffodil/search-product/driver/magento | transformSearchProductMagentoError', () => {
  let apolloError: ApolloError;
  let graphQlError: GraphQLError;
  let transformedError: Error;

  describe('when the GraphQL error is an page out of bounds error', () => {
    beforeEach(() => {
      graphQlError = new GraphQLError('The current_page value 5 specified is greater than the 2 page(s) available.');
      apolloError = new ApolloError({
        graphQLErrors: [graphQlError],
      });

      transformedError = transformSearchProductMagentoError(apolloError);
    });

    it('should return a DaffCollectionPageOutOfBoundsError', () => {
      expect(transformedError).toEqual(jasmine.any(DaffCollectionPageOutOfBoundsError));
    });
  });
});

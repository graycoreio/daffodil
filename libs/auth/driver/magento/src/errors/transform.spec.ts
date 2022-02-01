import { ApolloError } from '@apollo/client/core';

import { DaffUnauthorizedError } from '@daffodil/auth';

import { MagentoAuthGraphQlErrorCode } from './codes';
import { transformMagentoAuthError } from './transform';

describe('@daffodil/auth/driver/magento | transformMagentoAuthError', () => {
  const unhandledGraphQlError = {
    message: 'A error we dont handle',
    extensions: {},
    source: null,
    originalError: null,
    name: '',
    locations: [],
    path: [1],
    nodes: [],
    positions: [],
  };

  const handledGraphQlError = {
    message: 'A error we do handle',
    extensions: { category: MagentoAuthGraphQlErrorCode.UNAUTHORIZED },
    source: null,
    originalError: null,
    name: '',
    locations: [],
    path: [1],
    nodes: [],
    positions: [],
  };

  it('should be able to process graphql errors and return the relevant DaffAuth error if a mapping exists', () => {
    const error = new ApolloError({
      graphQLErrors: [handledGraphQlError],
    });
    const result = transformMagentoAuthError(error);

    expect(result).toEqual(jasmine.any(DaffUnauthorizedError));
  });
});

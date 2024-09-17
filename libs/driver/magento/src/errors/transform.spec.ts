import { ApolloError } from '@apollo/client/core';

import {
  DaffError,
  DaffErrorCodeMap,
  DaffInheritableError,
} from '@daffodil/core';
import { DAFF_DRIVER_NETWORK_ERROR_CODE } from '@daffodil/driver';
import { DaffDriverMagentoError } from '@daffodil/driver/magento';

import { daffTransformMagentoError } from './transform';

class MockError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'MOCK';

  constructor(public message: string) {
    super(message);
  }
}

describe('@daffodil/driver/magento | daffTransformMagentoError', () => {
  let unhandledGraphQlError;
  let handledGraphQlError;
  let category;
  let map: DaffErrorCodeMap;

  beforeEach(() => {
    category = 'category';
    unhandledGraphQlError = {
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
    handledGraphQlError = {
      message: 'A error we do handle',
      extensions: { category },
      source: null,
      originalError: null,
      name: '',
      locations: [],
      path: [1],
      nodes: [],
      positions: [],
    };

    map = {
      [category]: MockError,
    };
  });

  describe('if the passed error is a Daffodil error', () => {
    let daffError: MockError;
    let result: DaffError;

    beforeEach(() => {
      daffError = new MockError('A Daffodil error');
      result = daffTransformMagentoError(daffError, map);
    });

    it('should return the passed error', () => {
      expect(result).toEqual(daffError);
    });
  });

  it('should be able to process graphql errors and return the relevant error if a mapping exists', () => {
    const error = new ApolloError({
      graphQLErrors: [handledGraphQlError],
    });
    const result = daffTransformMagentoError(error, map);

    expect(result).toEqual(jasmine.any(MockError));
  });

  it('should be able to process Apollo network errors and return the DaffDriverNetworkError', () => {
    const error = new ApolloError({
      networkError: {
        name: 'Error',
        message: 'message',
      },
    });
    const result = daffTransformMagentoError(error, map);

    expect(result.code).toEqual(DAFF_DRIVER_NETWORK_ERROR_CODE);
  });

  describe('when there are no GraphQL error', () => {
    it('should fall back to the generic driver Magento error', () => {
      const error = new Error('an error');
      expect(daffTransformMagentoError(error, map)).toEqual(new DaffDriverMagentoError('an error'));
    });
  });
});

import { ApolloError } from 'apollo-client';

import { DaffErrorCodeMap } from '@daffodil/core';

import { daffTransformMagentoError } from './transform';

class MockError extends Error {
  readonly name = 'MockError';
  readonly code: string = 'MOCK';

	constructor(public message: string) {
		super(message);
	}
}

describe('Driver | Magento | Errors | daffTransformMagentoError', () => {
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
      [category]: MockError
    };
  })

	it('should be able to process graphql errors and return the relevant error if a mapping exists', () => {
		const error = new ApolloError({
			graphQLErrors: [handledGraphQlError],
    });
    const result = daffTransformMagentoError(error, map);

		expect(result).toEqual(jasmine.any(MockError));
	});

	it('should not handle a graphql error if the first error is not a handled type', () => {
		const error = new ApolloError({
			graphQLErrors: [unhandledGraphQlError, handledGraphQlError],
		});
		expect(daffTransformMagentoError(error, map)).toEqual(error);
	});

	it('should not crash if the extension is not defined', () => {
		const error = new ApolloError({
			graphQLErrors: [{ ...unhandledGraphQlError, extensions: {} }],
		});
		expect(daffTransformMagentoError(error, map)).toEqual(error);
	});

	it('should not touch the error if there is no mapping', () => {
		const error = new ApolloError({
			graphQLErrors: [
				{
					...unhandledGraphQlError,
					extensions: { category: 'an-unmanaged-error' },
				},
			],
		});
		expect(daffTransformMagentoError(error, map)).toEqual(error);
	});

	it('should not touch errors that are not GraphQl errors', () => {
		const error = new Error('an error');
		expect(daffTransformMagentoError(error, map)).toEqual(error);
	});
});

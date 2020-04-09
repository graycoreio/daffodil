import { ApolloError } from 'apollo-client';

import { DaffUnauthorizedError } from '../../../errors/public_api';
import { MagentoAuthGraphQlErrorCode } from './codes';
import { transformError } from './transform';

describe('Transforming Magento GraphQlErrors into DaffAuthErrors', () => {
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
    const result = transformError(error);

		expect(result).toEqual(jasmine.any(DaffUnauthorizedError));
	});

	it('should not handle a graphql error if the first error is not a handled type', () => {
		const error = new ApolloError({
			graphQLErrors: [unhandledGraphQlError, handledGraphQlError],
		});
		expect(transformError(error)).toEqual(error);
	});

	it('should not crash if the extension is not defined', () => {
		const error = new ApolloError({
			graphQLErrors: [{ ...unhandledGraphQlError, extensions: {} }],
		});
		expect(transformError(error)).toEqual(error);
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
		expect(transformError(error)).toEqual(error);
	});

	it('should not touch errors that are not GraphQl errors', () => {
		const error = new Error('an error');
		expect(transformError(error)).toEqual(error);
	});
});

import { ApolloError } from 'apollo-client';
import { MagentoCartGraphQlErrorCode } from './codes';
import { transformError, lookupDaffCartError } from './transform';
import { DaffCartNotFoundError } from 'libs/cart/src/errors/not-found';

describe('Transforming Magento GraphQlErrors into DaffCartErrors', () => {
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
		extensions: { category: MagentoCartGraphQlErrorCode.CART_NOT_FOUND },
		source: null,
		originalError: null,
		name: '',
		locations: [],
		path: [1],
		nodes: [],
		positions: [],
	};

	it('should be able to process graphql errors and return the relevant DaffCart error if a mapping exists', () => {
		const error = new ApolloError({
			graphQLErrors: [handledGraphQlError],
		});

		expect(transformError(error) instanceof DaffCartNotFoundError).toBe(true);
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

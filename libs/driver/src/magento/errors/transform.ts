import { ApolloError } from 'apollo-client';

import { DaffErrorCodeMap } from '@daffodil/core';

function transformGraphQlError<T extends DaffErrorCodeMap>(
	error: ApolloError,
	map: T,
): Error {
	if (!error.graphQLErrors.length) return error;
	const lookup = map[error.graphQLErrors[0].extensions.category];
	return lookup ? new lookup(error.message) : error;
};

/**
 * Transforms the passed error according to the lookup in the passed map.
 */
export function daffTransformMagentoError<T extends DaffErrorCodeMap>(error: any, map: T): Error {
  // TODO: handle network errors
	if (error.graphQLErrors) {
		return transformGraphQlError<T>(error, map);
	} else {
		return error;
	}
};

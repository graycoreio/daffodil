import { ApolloError } from 'apollo-client';
import { DaffCartMagentoErrorMap } from './map';
import { DaffErrorCodeMap } from '@daffodil/core';

const transformGraphQlError = (
	error: ApolloError,
	map: DaffErrorCodeMap,
): Error => {
	if (!error.graphQLErrors.length) return error;
	const lookup = map[error.graphQLErrors[0].extensions.category];
	return lookup ? new lookup(error.message) : error;
};

export const transformError = (error: any): Error => {
	if (error.graphQLErrors) {
		return transformGraphQlError(error, DaffCartMagentoErrorMap);
	} else {
		return error;
	}
};

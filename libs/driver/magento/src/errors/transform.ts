import { ApolloError } from '@apollo/client/core';

import {
  DaffError,
  DaffErrorCodeMap,
  daffIsError,
} from '@daffodil/core';
import { DaffDriverNetworkError } from '@daffodil/driver';

import { DaffDriverMagentoError } from './error.class';
import { daffMagentoTransformGraphQlError } from './transform-graphql';

/**
 * Transforms the passed error according to the lookup in the passed map.
 */
// TODO: return array of errors
export function daffTransformMagentoError<T extends DaffErrorCodeMap>(error: any, map: T): DaffError {
  if (error.graphQLErrors?.length > 0) {
    return (<ApolloError>error).graphQLErrors.map(err => daffMagentoTransformGraphQlError<T>(err, map))[0];
  } else if (error.networkError) {
    return new DaffDriverNetworkError((<ApolloError>error).networkError.message);
  } else if (daffIsError(error)) {
    return error;
  } else {
    return new DaffDriverMagentoError(error.message);
  }
};

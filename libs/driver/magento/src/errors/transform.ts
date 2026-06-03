import { CombinedGraphQLErrors } from '@apollo/client';

import {
  DaffError,
  DaffErrorCodeMap,
  daffIsError,
} from '@daffodil/core';

import { DaffDriverMagentoError } from './error.class';
import { daffMagentoTransformGraphQlError } from './transform-graphql';

/**
 * Transforms the passed error according to the lookup in the passed map.
 */
// TODO: return array of errors
export function daffTransformMagentoError<T extends DaffErrorCodeMap>(error: any, map: T): DaffError {
  if (CombinedGraphQLErrors.is(error)) {
    return error.errors.map(err => daffMagentoTransformGraphQlError<T>(err, map))[0];
  } else if (daffIsError(error)) {
    return error;
  } else {
    // TODO: how do we determine which error to return?
    // https://www.apollographql.com/docs/react/data/error-handling#identifying-error-types
    // return new DaffDriverNetworkError((<ApolloError>error).networkError.message);
    return new DaffDriverMagentoError(error.message);
  }
}

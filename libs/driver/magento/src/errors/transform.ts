import {
  DaffError,
  DaffErrorCodeMap,
} from '@daffodil/core';

import { DaffDriverMagentoError } from './error.class';
import { daffMagentoTransformGraphQlError } from './transform-graphql';

/**
 * Transforms the passed error according to the lookup in the passed map.
 */
// TODO: return array of errors
export function daffTransformMagentoError<T extends DaffErrorCodeMap>(error: any, map: T): DaffError {
  // TODO: handle network errors
  if (error.graphQLErrors) {
    return error.graphQLErrors.map(err => daffMagentoTransformGraphQlError<T>(err, map))[0];
  } else {
    return new DaffDriverMagentoError(error.message);
  }
};

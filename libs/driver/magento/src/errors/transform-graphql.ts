import { GraphQLError } from 'graphql';

import {
  DaffError,
  DaffErrorCodeMap,
} from '@daffodil/core';

import { DaffDriverMagentoError } from './error.class';

export function daffMagentoTransformGraphQlError<T extends DaffErrorCodeMap>(
  error: GraphQLError,
  map: T,
): DaffError {
  const ErrorClass = map[error?.extensions?.category] || DaffDriverMagentoError;

  return new ErrorClass(error.message) ;
};

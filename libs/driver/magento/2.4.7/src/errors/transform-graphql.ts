import { GraphQLFormattedError } from 'graphql';

import {
  DaffError,
  DaffErrorCodeMap,
} from '@daffodil/core';

import { DaffDriverMagentoError } from './error.class';

export function daffMagentoTransformGraphQlError<T extends DaffErrorCodeMap>(
  error: GraphQLFormattedError,
  map: T,
): DaffError {
  const ErrorClass = map[<string>error?.extensions?.category] || DaffDriverMagentoError;

  return new ErrorClass(error.message) ;
};

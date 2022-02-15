import { DaffError } from '@daffodil/core';

import { DaffStateError } from './state-error.interface';

export type ErrorTransformer = (DaffError) => DaffStateError;

/**
 * Transforms an error instance to a state error object.
 */
export function daffTransformErrorToStateError({ code, message, recoverable }: DaffError): DaffStateError {
  return { code, message, recoverable };
}

import { DaffError } from '@daffodil/core';

import { DaffStateError } from './state-error.interface';

/**
 * Transforms an error instance to a state error object.
 */
export function daffTransformErrorToStateError(error: DaffError): DaffStateError {
  return error;
}

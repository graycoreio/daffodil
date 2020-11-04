import { DaffError } from '@daffodil/core';

import { DaffStateError } from './state-error.interface';

export function daffTransformErrorToStateError(error: DaffError): DaffStateError {
  return error;
}

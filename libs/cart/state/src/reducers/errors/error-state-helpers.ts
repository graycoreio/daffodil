import { DaffStateError } from '@daffodil/core/state';

import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartErrors } from './cart-errors.type';

export const initializeErrorAdder = (errorSpace: DaffCartOperationType) =>
  (errors: DaffCartErrors, error: DaffStateError) => ({
    errors: {
      ...errors,
      [errorSpace]: errors[errorSpace].concat(new Array(error)),
    },
  });

export const initializeErrorResetter = (errorSpace: DaffCartOperationType) =>
  (errors: DaffCartErrors) => ({
    errors: {
      ...errors,
      [errorSpace]: [],
    },
  });

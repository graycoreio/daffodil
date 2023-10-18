import { DaffStateError } from '@daffodil/core/state';

import { DaffCartErrors } from './cart-errors.type';
import { DaffCartOperationType } from '../cart-operation-type.enum';

export const initializeErrorAdder = (errorSpace: DaffCartOperationType) =>
  (errors: DaffCartErrors, ...errorsToAdd: DaffStateError[]) => ({
    errors: {
      ...errors,
      [errorSpace]: errors[errorSpace].concat(errorsToAdd),
    },
  });

export const initializeErrorResetter = (errorSpace: DaffCartOperationType) =>
  (errors: DaffCartErrors) => ({
    errors: {
      ...errors,
      [errorSpace]: [],
    },
  });

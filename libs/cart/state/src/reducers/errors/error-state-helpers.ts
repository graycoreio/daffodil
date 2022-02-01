import { DaffStateError } from '@daffodil/core/state';

import { DaffCartOperationType } from '../cart-operation-type.enum';
import { DaffCartErrors } from './cart-errors.type';

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

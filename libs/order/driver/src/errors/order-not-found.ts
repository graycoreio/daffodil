import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * @inheritdoc
 */
export class DaffOrderNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_ORDER_NOT_FOUND';

  constructor(public message: string) {
    super(message);
  }
}

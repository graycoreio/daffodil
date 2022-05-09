import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export class DaffContentNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_CONTENT_NOT_FOUND';

  constructor(public message: string) {
    super(message);
  }
}

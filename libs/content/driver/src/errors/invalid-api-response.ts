import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export class DaffContentInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_CONTENT_INVALID_API_RESPONSE';

  constructor(public message: string) {
    super(message);
  }
}

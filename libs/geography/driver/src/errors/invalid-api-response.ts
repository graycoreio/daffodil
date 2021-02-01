import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export class DaffGeographyInvalidAPIResponseError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_GEOGRAPHY_INVALID_API_RESPONSE';

  constructor(public message: string) {
    super(message);
  }
}

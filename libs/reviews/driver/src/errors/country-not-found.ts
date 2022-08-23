import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

export class DaffProductReviewsNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_GEOGRAPHY_COUNTRY_NOT_FOUND';

  constructor(public message: string) {
    super(message);
  }
}

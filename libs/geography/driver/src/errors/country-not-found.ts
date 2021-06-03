import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * @inheritdoc
 */
export class DaffCountryNotFoundError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_GEOGRAPHY_COUNTRY_NOT_FOUND';

  constructor(public message: string) {
    super(message);
  }
}

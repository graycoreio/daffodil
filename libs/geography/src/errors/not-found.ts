import { DaffInheritableError } from '@daffodil/core';

export class DaffCountryNotFoundError extends DaffInheritableError {
  public static readonly code: string = 'COUNTRY_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}

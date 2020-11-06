import { DaffError, DaffInheritableError } from '@daffodil/core';

export class DaffBadInputError extends DaffInheritableError implements DaffError {
  public readonly code: string = 'DAFF_BAD_INPUT';

	constructor(public message: string) {
		super(message);
	}
}

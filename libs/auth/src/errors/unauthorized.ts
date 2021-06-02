import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * @inheritdoc
 */
export class DaffUnauthorizedError extends DaffInheritableError implements DaffError {
	public readonly code: string = 'DAFF_AUTH_UNAUTHORIZED';

	constructor(public message: string) {
	  super(message);
	}
}

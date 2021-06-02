import {
  DaffError,
  DaffInheritableError,
} from '@daffodil/core';

/**
 * @inheritdoc
 */
export class DaffAuthenticationFailedError extends DaffInheritableError implements DaffError {
	public readonly code: string = 'DAFF_AUTH_AUTHENTICATION_FAILED';

	constructor(public message: string) {
	  super(message);
	}
}

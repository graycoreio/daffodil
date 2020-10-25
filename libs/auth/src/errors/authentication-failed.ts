import { DaffInheritableError } from '@daffodil/core';

export class DaffAuthenticationFailedError extends DaffInheritableError {
	public readonly code: string = 'AUTHENTICATION_FAILED';

	constructor(public message: string) {
		super(message);
	}
}

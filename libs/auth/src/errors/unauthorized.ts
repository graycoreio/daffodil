import { DaffInheritableError } from '@daffodil/core';

export class DaffUnauthorizedError extends DaffInheritableError {
	public readonly code: string = 'UNAUTHORIZED';

	constructor(public message: string) {
		super(message);
	}
}

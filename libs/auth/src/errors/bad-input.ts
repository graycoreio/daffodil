import { DaffInheritableError } from '@daffodil/core';

export class DaffBadInputError extends DaffInheritableError {
	public readonly code: string = 'BAD_INPUT';

	constructor(public message: string) {
		super(message);
	}
}

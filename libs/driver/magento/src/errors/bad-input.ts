export class DaffBadInputError extends Error {
	readonly name = 'DaffBadInputError';
  readonly code: string = 'BAD_INPUT';

	constructor(public message: string) {
		super(message);
	}
}

export class DaffUnauthorizedError extends Error {
	readonly name = 'DaffUnauthorizedError';
  readonly code: string = 'UNAUTHORIZED';

	constructor(public message: string) {
		super(message);
	}
}

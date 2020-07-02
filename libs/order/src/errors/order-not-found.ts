export class DaffOrderNotFoundError extends Error {
	readonly name = 'DaffOrderNotFoundError';
  readonly code: string = 'ORDER_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}

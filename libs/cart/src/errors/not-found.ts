export class DaffCartNotFoundError extends Error {
	readonly name = 'DaffCartNotFoundError';
  readonly code: string = 'CART_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}

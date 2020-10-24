export class DaffCartNotFoundError extends Error {
  public static readonly code: string = 'CART_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}

export class DaffOrderNotFoundError extends Error {
  public static readonly code: string = 'ORDER_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}

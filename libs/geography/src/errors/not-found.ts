export class DaffCountryNotFoundError extends Error {
	readonly name = 'DaffCountryNotFoundError';
  readonly code: string = 'COUNTRY_NOT_FOUND';

	constructor(public message: string) {
		super(message);
	}
}

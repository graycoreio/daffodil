import { DaffCountry } from '../../models/country';

export interface DaffGeographyServiceInterface {
	/**
	 * Retrieves the list of countries available to the given store.
	 */
	list(): DaffCountry[];

	/**
	 * Retrieve precise information about a specific country.
	 */
	get(id: DaffCountry['id']): DaffCountry;
}

import { DaffCountry } from '../../models/country';
import { InjectionToken } from '@angular/core';

export const DaffGeopgraphyDriver = new InjectionToken('DaffGeographyDriver');
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

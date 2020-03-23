import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCountry } from '../../models/country';

export const DaffGeographyDriver = new InjectionToken('DaffGeographyDriver');

export interface DaffGeographyServiceInterface<T extends DaffCountry> {
	/**
	 * Retrieves the list of countries available to the given store.
	 */
	list(): Observable<T[]>;

	/**
	 * Retrieve precise information about a specific country.
	 */
	get(id: T['id']): Observable<T>;
}

import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffCountry } from '@daffodil/geography';

export const DaffGeographyDriver = new InjectionToken<DaffGeographyServiceInterface>('DaffGeographyDriver');

export interface DaffGeographyServiceInterface<T extends DaffCountry = DaffCountry> {
  /**
   * Retrieves the list of countries available to the given store.
   */
  list(): Observable<T[]>;

  /**
   * Retrieve precise information about a specific country.
   */
  get(id: T['id']): Observable<T>;
}

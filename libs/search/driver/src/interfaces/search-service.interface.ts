import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

/**
 * An injection token for the search driver.
 */
export const DaffSearchDriver = new InjectionToken<DaffSearchDriverInterface>('DaffSearchDriver');

/**
 * The search driver is responsible for interfacing with a platform to search for entites.
 */
export interface DaffSearchDriverInterface<
  T extends DaffSearchResult = DaffSearchResult,
> {
  /**
   * Searches for entities according to the specified query.
   */
  search(query: string): Observable<DaffSearchResultCollection<T>>;
}

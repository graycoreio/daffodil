import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { DaffSearchResult } from '@daffodil/search';

import type { DaffSearchDriverResponse } from './response.interface';

/**
 * An injection token for the search driver.
 */
export const DaffSearchDriver = new InjectionToken<DaffSearchDriverInterface>('DaffSearchDriver');

/**
 * The options for making a search.
 */
export interface DaffSearchDriverOptions {
  /**
   * The number of results to request from the platform.
   *
   * There is an important caveat for this option.
   * This value only controls the requested number of results
   * from the platform *per request*.
   *
   * For drivers that might make multiple requests in the background, e.g. the federated driver,
   * this value will not match the actual number of results returned.
   *
   * This should be used as a performance option rather than controlling the result list size.
   */
  limit?: number;
}

/**
 * The search driver is responsible for interfacing with a platform to search for entites.
 */
export interface DaffSearchDriverInterface<
  T extends DaffSearchResult = DaffSearchResult,
> {
  /**
   * Searches for entities according to the specified query.
   */
  search(query: string, options?: DaffSearchDriverOptions): Observable<DaffSearchDriverResponse<T>>;
}

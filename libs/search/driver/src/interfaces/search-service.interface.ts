import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';
import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

import type { DaffSearchDriverResponse } from './response.interface';

export const {
  /**
   * An injection token for the search driver.
   */
  token: DaffSearchDriver,
  /**
   * Provider function for {@link DaffSearchDriver}.
   */
  provider: provideDaffSearchDriver,
} = createSingletonInjectionToken<DaffSearchDriverInterface>('DaffSearchDriver');

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
   * This method provides substantially more information than `incremental`.
   * Its intended use is populating a page of search results.
   */
  search(query: string, options?: DaffSearchDriverOptions): Observable<DaffSearchDriverResponse<T>>;

  /**
   * Rapidly searches for entities. This is intended to be called as the user types their search query.
   * Less information is requested in comparison to `search`.
   */
  incremental(query: string, options?: DaffSearchDriverOptions): Observable<DaffSearchResultCollection<T>>;
}

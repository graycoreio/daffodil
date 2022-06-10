import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '@daffodil/search';

export interface DaffSearchDriverResponse<
  T extends DaffSearchResult = DaffSearchResult,
> {
  /**
   * The collection of search result entities.
   */
  collection: DaffSearchResultCollection<T>;
  /**
   * A place for specific drivers to return extra info that applies to the entire response.
   * For example, this could be pagination, sorting, or filtering.
   */
  metadata: unknown;
}

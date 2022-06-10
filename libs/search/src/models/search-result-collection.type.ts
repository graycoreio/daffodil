import { DaffSearchResult } from './search-result.type';

/**
 * A dictionary of search results keyed by the search result kind.
 */
export type DaffSearchResultCollection<T extends DaffSearchResult = DaffSearchResult> = Record<T['kind'], T[]>;

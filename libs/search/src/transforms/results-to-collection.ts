import {
  DaffSearchResult,
  DaffSearchResultCollection,
} from '../models/public_api';

/**
 * Transforms a list of search results into a collection, keying by the result kind.
 */
export const daffSearchTransformResultsToCollection = <T extends DaffSearchResult = DaffSearchResult>(searchResults: T[]): DaffSearchResultCollection<T> =>
  searchResults.reduce((collection, result) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    collection[result.kind] ? collection[result.kind].push(result) : collection[result.kind] = [result];
    return collection;
  }, <DaffSearchResultCollection<T>>{});

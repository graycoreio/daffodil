import { DaffSearchResult } from './search-result.type';

type DaffGeneralSearchResultType = DaffSearchResult & {'@type': 'Thing'};

/**
 * An extension of the schema.org `Thing` that includes a result `kind`.
 * This represents the result for a searchable entity.
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DaffGeneralSearchResult extends DaffGeneralSearchResultType {}

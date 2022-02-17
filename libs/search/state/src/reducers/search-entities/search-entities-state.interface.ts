import { EntityState } from '@ngrx/entity';

import { DaffSearchResult } from '@daffodil/search';

/**
 * Interface for search result entity state.
 */
export type DaffSearchEntityState<T extends DaffSearchResult = DaffSearchResult> = EntityState<T>;

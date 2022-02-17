import { DaffStateError } from '@daffodil/core/state';
import { DaffSearchResult } from '@daffodil/search';

/**
 * The main search state.
 * Contains info about the current or most recent search operation.
 */
export interface DaffSearchReducerState<T extends DaffSearchResult = DaffSearchResult> {
  /**
   * Whether there is a pending search operation.
   */
  loading: boolean;
  /**
   * A list of search errors, if any.
   */
  errors: DaffStateError[];
  /**
   * The result IDs of the most recent search grouped by kind.
   */
  results: Record<T['kind'], T['id'][]>;
}

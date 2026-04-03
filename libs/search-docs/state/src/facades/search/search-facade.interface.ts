import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';

import { DaffStoreFacade } from '@daffodil/core/state';
import { DaffSearchDocsResult } from '@daffodil/search-docs';

/**
 * Exposes the search state selectors.
 */
export interface DaffSearchDocsFacadeInterface extends DaffStoreFacade<Action> {
  /**
   * The docsEntities returned in the most recent search.
   */
  docsResults$: Observable<Array<DaffSearchDocsResult>>;
}

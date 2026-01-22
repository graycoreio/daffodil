import { DaffFailable } from '@daffodil/core/state';
import { DaffDocsItem } from '@daffodil/docs-utils';

/**
 * Triggers the loading of the specified docs.
 *
 * @param docsId The docs ID.
 */
export interface DaffDocsLoadAction<
  T extends DaffDocsItem = DaffDocsItem,
> {
  docsId: T['id'];
}

export interface DaffDocsLoadSuccessAction<T extends DaffDocsItem = DaffDocsItem> {
  payload: Array<T>;
}

export const DAFF_DOCS_LOAD = 'DAFF_DOCS_LOAD_ACTIONS';
export const DAFF_DOCS_LOAD_SUCCESS = 'DAFF_DOCS_LOAD_SUCCESS_ACTIONS';
export const DAFF_DOCS_LOAD_FAILURE = 'DAFF_DOCS_LOAD_FAILURE_ACTIONS';

export interface DaffDocsActions<T extends DaffDocsItem = DaffDocsItem> {
  [DAFF_DOCS_LOAD]: DaffDocsLoadAction<T>;
  [DAFF_DOCS_LOAD_SUCCESS]: DaffDocsLoadSuccessAction<T>;
  [DAFF_DOCS_LOAD_FAILURE]: DaffFailable;
}

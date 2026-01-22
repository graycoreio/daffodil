import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { getDaffDocsSelectors } from '@daffodil/docs/state';
import { DaffDocsItem } from '@daffodil/docs-utils';
import { DaffSearchSelectors } from '@daffodil/search/state';
import {
  DaffSearchDocsResult,
  DAFF_SEARCH_DOCS_RESULT_KIND,
} from '@daffodil/search-docs';

import { DaffSearchDocsStateRootSlice } from '../reducers/public_api';

/**
 * Selectors for docs results on a search page.
 */
export interface DaffSearchDocsSelectors {
  /**
   * Select the docs search result IDs from the main search state.
   */
  selectDocsResultIds: MemoizedSelector<DaffSearchDocsStateRootSlice, Array<DaffSearchDocsResult['id']>>;

  /**
   * Select the docs search results from the main docs state.
   */
  selectDocsResults: MemoizedSelector<DaffSearchDocsStateRootSlice, Array<DaffSearchDocsResult>>;
}

export const daffSearchDocsCreateSelectors = (
  selectSearchResultIds: DaffSearchSelectors['selectSearchResultIds'],
) => {
  const { selectDocsEntities } = getDaffDocsSelectors();

  const selectDocsResultIds = createSelector(
    selectSearchResultIds,
    state => state[DAFF_SEARCH_DOCS_RESULT_KIND] || [],
  );

  const selectDocsResults = createSelector<DaffSearchDocsStateRootSlice, [string[], Dictionary<DaffDocsItem>], Array<DaffSearchDocsResult>>(
    selectDocsResultIds,
    selectDocsEntities,
    (resultIds, docsEntities) => resultIds.reduce<Array<DaffSearchDocsResult>>((acc, id) => {
      const docs = docsEntities[id];
      if (docs) {
        acc.push({
          ...docs,
          url: docs.path,
          kind: 'kind' in docs ? docs.kind : DAFF_SEARCH_DOCS_RESULT_KIND,
        });
      }

      return acc;
    }, []),
  );

  return {
    selectDocsResultIds,
    selectDocsResults,
  };
};

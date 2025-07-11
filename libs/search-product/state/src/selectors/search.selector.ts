import { Dictionary } from '@ngrx/entity';
import {
  createSelector,
  MemoizedSelector,
} from '@ngrx/store';

import { DaffProduct } from '@daffodil/product';
import { getDaffProductSelectors } from '@daffodil/product/state';
import { DaffSearchSelectors } from '@daffodil/search/state';
import {
  DaffSearchProductResult,
  DAFF_SEARCH_PRODUCT_RESULT_KIND,
} from '@daffodil/search-product';

import { DaffSearchProductStateRootSlice } from '../reducers/public_api';

/**
 * Selectors for product results on a search page.
 */
export interface DaffSearchProductSelectors {
  /**
   * Select the product search result IDs from the main search state.
   */
  selectProductResultIds: MemoizedSelector<DaffSearchProductStateRootSlice, Array<DaffSearchProductResult['id']>>;

  /**
   * Select the product search results from the main product state.
   */
  selectProductResults: MemoizedSelector<DaffSearchProductStateRootSlice, Array<DaffSearchProductResult>>;
}

export const daffSearchProductCreateSelectors = (
  selectSearchResultIds: DaffSearchSelectors['selectSearchResultIds'],
) => {
  const { selectProductEntities } = getDaffProductSelectors();

  const selectProductResultIds = createSelector(
    selectSearchResultIds,
    state => state[DAFF_SEARCH_PRODUCT_RESULT_KIND] || [],
  );

  const selectProductResults = createSelector<DaffSearchProductStateRootSlice, [string[], Dictionary<DaffProduct>], Array<DaffSearchProductResult>>(
    selectProductResultIds,
    selectProductEntities,
    (resultIds, products) => resultIds.reduce<Array<DaffSearchProductResult>>((acc, id) => {
      const product = products[id];
      if (product) {
        acc.push({
          ...product,
          kind: DAFF_SEARCH_PRODUCT_RESULT_KIND,
        });
      }

      return acc;
    }, []),
  );

  return {
    selectProductResultIds,
    selectProductResults,
  };
};

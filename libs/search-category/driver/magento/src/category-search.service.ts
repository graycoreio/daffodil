import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffMagentoCategoryTransformerService,
  MagentoGetACategoryResponse,
} from '@daffodil/category/driver/magento';
import {
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchCategoryResult,
  daffTransformCategoriesToSearchResults,
  DAFF_SEARCH_CATEGORY_RESULT_KIND,
} from '@daffodil/search-category';
import { DaffSearchCategoryDriverInterface } from '@daffodil/search-category/driver';

import { categorySearch } from './queries/category-search';

/**
 * A service for searching categories in Magento.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchCategoryMagentoDriver implements DaffSearchCategoryDriverInterface {
  constructor(
    private apollo: Apollo,
    private categoryTransform: DaffMagentoCategoryTransformerService,
  ) {}

  kind = DAFF_SEARCH_CATEGORY_RESULT_KIND;

  search(query: string): Observable<DaffSearchResultCollection<DaffSearchCategoryResult>> {
    return this.apollo.query<MagentoGetACategoryResponse>({
      query: categorySearch(),
      variables: {
        query,
      },
    }).pipe(
      map(result => result.data.categoryList.map(item => this.categoryTransform.transform(item, item.products.items))),
      map(categories => daffTransformCategoriesToSearchResults(categories)),
      map(searchResults => daffSearchTransformResultsToCollection(searchResults)),
    );
  }
}

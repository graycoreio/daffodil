import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  DaffSearchResultCollection,
  daffSearchTransformResultsToCollection,
} from '@daffodil/search';
import {
  DaffSearchCategoryResult,
  DAFF_SEARCH_CATEGORY_RESULT_KIND,
} from '@daffodil/search-category';
import { DaffSearchCategoryDriverInterface } from '@daffodil/search-category/driver';

import { MagentoSearchForCategoriesResponse } from './models/public_api';
import { categorySearch } from './queries/category-search';
import { magentoSearchCategoryResultTransform } from './transforms/public_api';

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
  ) {}

  kind = DAFF_SEARCH_CATEGORY_RESULT_KIND;

  search(query: string): Observable<DaffSearchResultCollection<DaffSearchCategoryResult>> {
    return this.apollo.query<MagentoSearchForCategoriesResponse>({
      query: categorySearch(),
      variables: {
        query,
      },
    }).pipe(
      map(result => result.data.categoryList.map(category => magentoSearchCategoryResultTransform(category))),
      map(searchResults => daffSearchTransformResultsToCollection(searchResults)),
    );
  }
}

import { Injectable } from '@angular/core';

import { DaffCategoryFactory } from '@daffodil/category/testing';
import { DaffModelFactory } from '@daffodil/core/testing';
import {
  DaffSearchCategoryResult,
  daffTransformCategoriesToSearchResults,
} from '@daffodil/search-category';

/**
 * Factory for creating {@link DaffSearchCategoryResult}s.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffSearchCategoryResultFactory extends DaffModelFactory<DaffSearchCategoryResult>{
  constructor(
    private categoryFactory: DaffCategoryFactory,
  ) {
    super();
  }

  create(partial = {}): DaffSearchCategoryResult {
    return daffTransformCategoriesToSearchResults(this.categoryFactory.createMany(1))[0];
  }
}

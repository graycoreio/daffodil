import { TestBed } from '@angular/core/testing';

import { DaffCategory } from '@daffodil/category';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import {
  DaffSearchCategoryResult,
  DAFF_SEARCH_CATEGORY_RESULT_KIND,
} from '@daffodil/search-category';

import { daffTransformCategoriesToSearchResults } from './categories-to-result';

describe('@daffodil/search-category | daffTransformCategoriesToSearchResults', () => {
  let categoryFactory: DaffCategoryFactory;
  let mockCategory: DaffCategory;
  let result: DaffSearchCategoryResult[];

  beforeEach(() => {
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    mockCategory = categoryFactory.create();

    result = daffTransformCategoriesToSearchResults([mockCategory]);
  });

  it('should set search result fields from the category', () => {
    expect(result[0].id).toEqual(mockCategory.id);
    expect(result[0].url).toEqual(mockCategory.url);
    expect(result[0].description).toEqual(mockCategory.description);
    expect(result[0].name).toEqual(mockCategory.name);
  });

  it('should set the kind to category', () => {
    expect(result[0].kind).toEqual(DAFF_SEARCH_CATEGORY_RESULT_KIND);
  });
});

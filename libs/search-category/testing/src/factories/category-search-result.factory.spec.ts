import { TestBed } from '@angular/core/testing';

import { DaffSearchCategoryResult } from '@daffodil/search-category';

import { DaffSearchCategoryResultFactory } from './category-search-result.factory';

describe('@daffodil/search-category/testing | DaffSearchCategoryResultFactory', () => {
  let categoryFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffSearchCategoryResultFactory,
      ],
    });

    categoryFactory = TestBed.inject(DaffSearchCategoryResultFactory);
  });

  it('should be created', () => {
    expect(categoryFactory).toBeTruthy();
  });

  describe('create', () => {
    let result: DaffSearchCategoryResult;

    beforeEach(() => {
      result = categoryFactory.create();
    });

    it('should return a DaffSearchCategoryResult with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.kind).toBeDefined();
      expect(result.description).toBeDefined();
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { DaffCategoryFilterEqualOption } from '@daffodil/category';

import { DaffCategoryFilterEqualOptionFactory } from './category-equal-filter-option.factory';

describe('@daffodil/category/testing | Factories | DaffCategoryFilterEqualOptionFactory', () => {

  let categoryEqualFilterOptionFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryFilterEqualOptionFactory],
    });

    categoryEqualFilterOptionFactory = TestBed.inject(DaffCategoryFilterEqualOptionFactory);
  });

  it('should be created', () => {
    expect(categoryEqualFilterOptionFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryFilterEqualOption;

    beforeEach(() => {
      result = categoryEqualFilterOptionFactory.create();
    });

    it('should return a CategoryFilterEqualOption with all required fields defined', () => {
      expect(result.applied).toBeDefined();
      expect(result.label).toBeDefined();
      expect(result.value).toBeDefined();
      expect(result.count).toBeDefined();
    });
  });
});

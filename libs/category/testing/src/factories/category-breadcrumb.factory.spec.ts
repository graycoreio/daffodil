import { TestBed } from '@angular/core/testing';

import { DaffCategoryBreadcrumb } from '@daffodil/category';

import { DaffCategoryBreadcrumbFactory } from './category-breadcrumb.factory';

describe('@daffodil/category | DaffCategoryBreadcrumbFactory', () => {

  let categoryFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryBreadcrumbFactory],
    });

    categoryFactory = TestBed.inject(DaffCategoryBreadcrumbFactory);
  });

  it('should be created', () => {
    expect(categoryFactory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryBreadcrumb;

    beforeEach(() => {
      result = categoryFactory.create();
    });

    it('should return a Category with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.level).toBeDefined();
    });
  });
});

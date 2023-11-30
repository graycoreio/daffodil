import { TestBed } from '@angular/core/testing';

import { DaffCategoryBreadcrumb } from '@daffodil/category';

import { DaffCategoryBreadcrumbFactory } from './category-breadcrumb.factory';

describe('@daffodil/category/testing | DaffCategoryBreadcrumbFactory', () => {
  let factory: DaffCategoryBreadcrumbFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryBreadcrumbFactory],
    });

    factory = TestBed.inject(DaffCategoryBreadcrumbFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: DaffCategoryBreadcrumb;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a Category with all required fields defined', () => {
      expect(result.id).toBeDefined();
      expect(result.url).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.level).toBeDefined();
    });
  });
});

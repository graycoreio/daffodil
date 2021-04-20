import { TestBed } from '@angular/core/testing';

import {
  MagentoAggregation,
  MagentoCategory,
} from '@daffodil/category/driver/magento-replacement';

import { DaffCategoryDriverMagentoCategoryFactory } from './category.factory';

describe('Category | Driver | Magento | Testing | Factories | DaffCategoryDriverMagentoCategoryFactory', () => {

  let factory: DaffCategoryDriverMagentoCategoryFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffCategoryDriverMagentoCategoryFactory],
    });

    factory = TestBed.inject(DaffCategoryDriverMagentoCategoryFactory);
  });

  it('should be created', () => {
    expect(factory).toBeTruthy();
  });

  describe('create', () => {

    let result: MagentoCategory;

    beforeEach(() => {
      result = factory.create();
    });

    it('should return a category', () => {
      expect(result.id).toBeDefined();
      expect(result.name).toBeDefined();
      expect(result.description).toBeDefined();
      expect(result.breadcrumbs).toBeDefined();
      expect(result.level).toBeDefined();
      expect(result.children_count).toBeDefined();
      expect(result.children).toBeDefined();
      expect(result.products).toBeDefined();
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { DaffInMemoryBackendCategoryService } from './category.service';

import { isCategory } from '../helpers/category-helper';

describe('Driver | InMemory | Category | DaffInMemoryBackendCategoryService', () => {
  let categoryTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DaffInMemoryBackendCategoryService]
    });

    categoryTestingService = TestBed.get(DaffInMemoryBackendCategoryService);
  });

  it('should be created', () => {
    expect(categoryTestingService).toBeTruthy();
  });

  describe('createDb', () => {
    let result;

    beforeEach(() => {
      result = categoryTestingService.createDb();
    });

    it('should return a category with an array of productIds', () => {
      expect(isCategory(result.category)).toBeTruthy();
      expect(result.category.productIds.length).toBeGreaterThan(1);
    });
  });
});

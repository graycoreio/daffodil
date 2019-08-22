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

    it('should return a object with an array of Categorys', () => {
      expect(Array.isArray(result.categories)).toEqual(true);
      expect(result.categories.length).toBeGreaterThan(2);
      expect(isCategory(result.categories[0])).toBeTruthy();
    });
  });
});

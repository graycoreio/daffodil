import { TestBed } from '@angular/core/testing';

import { DaffTestingCategoryService } from './category.service';
import { isCategory } from '../../helpers/category-helper';

describe('Driver | Testing | Category | CategoryService', () => {
  let categoryService;

  beforeEach(() => {
    categoryService = TestBed.get(DaffTestingCategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('getAll', () => {

    it('should return a list of categories', () => {
      categoryService.getAll().subscribe(categories => {
        expect(isCategory(categories[0])).toBeTruthy();
      });
    });
  });

  describe('get', () => {

    it('should return a single category with images', () => {
      categoryService.get('id').subscribe(category => {
        expect(isCategory(category)).toBeTruthy();
      });
    });
  });
});

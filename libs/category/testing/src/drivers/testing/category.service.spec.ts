import { TestBed } from '@angular/core/testing';

import { DaffTestingCategoryService } from './category.service';
import { cold } from 'jasmine-marbles';
import { DaffCategoryFactory } from '../../factories/category.factory';

describe('Driver | Testing | Category | CategoryService', () => {
  let categoryService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const category = categoryFactory.create();
  const mockCategoryFactory = jasmine.createSpyObj('DaffCategoryFactory', ['create']);
  mockCategoryFactory.create.and.returnValue(category);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCategoryFactory, useValue: mockCategoryFactory },
        DaffTestingCategoryService
      ]
    });
    categoryService = TestBed.get(DaffTestingCategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get', () => {

    it('should return a single category', () => {
      const expected = cold('(a|)', { a: category });
      expect(categoryService.get('id')).toBeObservable(expected);
    });
  });
});

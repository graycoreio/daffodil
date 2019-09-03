import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffTestingCategoryService } from './category.service';
import { DaffCategoryFactory } from '../../factories/category.factory';

describe('Driver | Testing | Category | CategoryService', () => {
  let categoryService;

  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const category = categoryFactory.create();
  const mockCategoryFactory = jasmine.createSpyObj('DaffCategoryFactory', ['create']);
  mockCategoryFactory.create.and.returnValue(category);

  const productFactory: DaffProductFactory = new DaffProductFactory();
  const products = productFactory.createMany(3);
  const mockProductFactory = jasmine.createSpyObj('DaffProductFactory', ['createMany']);
  mockProductFactory.createMany.and.returnValue(products);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCategoryFactory, useValue: mockCategoryFactory },
        { provide: DaffProductFactory, useValue: mockProductFactory },
        DaffTestingCategoryService
      ]
    });
    categoryService = TestBed.get(DaffTestingCategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get', () => {

    it('should return a DaffGetCategoryResponse', () => {
      const expected = cold('(a|)', { a: {category: category, products: products }});
      expect(categoryService.get('id')).toBeObservable(expected);
    });
  });
});

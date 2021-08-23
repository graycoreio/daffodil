import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffTestingCategoryService } from './category.service';

describe('Driver | Testing | Category | CategoryService', () => {
  let categoryService;

  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const category = categoryFactory.create();
  const mockCategoryFactory = jasmine.createSpyObj('DaffCategoryFactory', ['create']);
  mockCategoryFactory.create.and.returnValue(category);

  const categoryPageMetadataFactory: DaffCategoryPageMetadataFactory = new DaffCategoryPageMetadataFactory();
  const categoryPageMetadata = categoryPageMetadataFactory.create();
  const mockCategoryPageMetadataFactory = jasmine.createSpyObj('DaffCategoryPageMetadataFactory', ['create']);
  mockCategoryPageMetadataFactory.create.and.returnValue(categoryPageMetadata);

  let productFactory: DaffProductFactory;
  const products = productFactory.createMany(3);
  const mockProductFactory = jasmine.createSpyObj('DaffProductFactory', ['createMany']);
  mockProductFactory.createMany.and.returnValue(products);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCategoryFactory, useValue: mockCategoryFactory },
        { provide: DaffCategoryPageMetadataFactory, useValue: mockCategoryPageMetadataFactory },
        { provide: DaffProductFactory, useValue: mockProductFactory },
        DaffTestingCategoryService,
      ],
    });
    categoryService = TestBed.inject(DaffTestingCategoryService);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get', () => {

    it('should return a DaffGetCategoryResponse', () => {
      const expected = cold('(a|)', { a: { category, categoryPageMetadata, products }});
      expect(categoryService.get('id')).toBeObservable(expected);
    });
  });

  describe('getByUrl', () => {

    it('should return a DaffGetCategoryResponse', () => {
      const expected = cold('(a|)', { a: { category, categoryPageMetadata, products }});
      expect(categoryService.getByUrl('url')).toBeObservable(expected);
    });
  });
});

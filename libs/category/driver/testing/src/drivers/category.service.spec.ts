import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProduct } from '@daffodil/product';
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
  let products: DaffProduct[];
  let mockProductFactory: jasmine.SpyObj<DaffProductFactory>;

  beforeEach(() => {
    mockProductFactory = jasmine.createSpyObj('DaffProductFactory', ['createMany']);

    TestBed.configureTestingModule({
      providers: [
        { provide: DaffCategoryFactory, useValue: mockCategoryFactory },
        { provide: DaffCategoryPageMetadataFactory, useValue: mockCategoryPageMetadataFactory },
        { provide: DaffProductFactory, useValue: mockProductFactory },
        DaffTestingCategoryService,
      ],
    });

    productFactory = TestBed.inject(DaffProductFactory);
    categoryService = TestBed.inject(DaffTestingCategoryService);

    products = productFactory.createMany(3);
    mockProductFactory.createMany.and.returnValue(products);
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

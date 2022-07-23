import { TestBed } from '@angular/core/testing';
import { cold } from 'jasmine-marbles';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryRequestKind,
} from '@daffodil/category';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffProduct } from '@daffodil/product';
import {
  DaffProductFactory,
  DaffProductTestingModule,
} from '@daffodil/product/testing';

import { DaffTestingCategoryService } from './category.service';

describe('@daffodil/category/driver/testing | DaffTestingCategoryService', () => {
  let categoryService: DaffTestingCategoryService;

  let categoryFactory: DaffCategoryFactory;
  let productFactory: DaffProductFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;

  let categoryPageMetadata: DaffCategoryPageMetadata;
  let category: DaffCategory;
  let products: DaffProduct[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DaffProductTestingModule,
      ],
      providers: [
        DaffTestingCategoryService,
      ],
    });

    categoryService = TestBed.inject(DaffTestingCategoryService);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    productFactory = TestBed.inject(DaffProductFactory);

    products = productFactory.createMany(3);
    category = categoryFactory.create();
    categoryPageMetadata = categoryPageMetadataFactory.create();

    spyOn(categoryPageMetadataFactory, 'create').and.returnValue(categoryPageMetadata);
    spyOn(categoryFactory, 'create').and.returnValue(category);
    spyOn(productFactory, 'createMany').and.returnValue(products);
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get', () => {

    it('should return a DaffGetCategoryResponse', () => {
      const expected = cold('(a|)', { a: { category, categoryPageMetadata, products }});
      expect(categoryService.get({
        kind: DaffCategoryRequestKind.ID,
        id: 'id',
      })).toBeObservable(expected);
    });
  });

  describe('getByUrl', () => {

    it('should return a DaffGetCategoryResponse', () => {
      const expected = cold('(a|)', { a: { category, categoryPageMetadata, products }});
      expect(categoryService.getByUrl({
        kind: DaffCategoryRequestKind.URL,
        url: 'url',
      })).toBeObservable(expected);
    });
  });
});

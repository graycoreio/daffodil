import { TestBed } from '@angular/core/testing';
import { TestScheduler } from 'rxjs/testing';

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
  let scheduler: TestScheduler;

  beforeEach(() => {
    scheduler = new TestScheduler((actual, expected) => {
      expect(actual).toEqual(expected);
    });

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
      scheduler.run(({ expectObservable }) => {
        expectObservable(categoryService.get({
          kind: DaffCategoryRequestKind.ID,
          id: 'id',
        })).toBe('(a|)', { a: { category, categoryPageMetadata, products }});
      });
    });
  });

  describe('getByUrl', () => {

    it('should return a DaffGetCategoryResponse', () => {
      scheduler.run(({ expectObservable }) => {
        expectObservable(categoryService.getByUrl({
          kind: DaffCategoryRequestKind.URL,
          url: 'url',
        })).toBe('(a|)', { a: { category, categoryPageMetadata, products }});
      });
    });
  });
});

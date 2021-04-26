import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryBreadcrumb,
} from '@daffodil/category';
import { MagentoCategory } from '@daffodil/category/driver/magento';
import { DaffCategoryFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryTransformerService } from './category-transformer.service';

describe('DaffMagentoCategoryTransformerService', () => {

  let service: DaffMagentoCategoryTransformerService;
  let categoryFactory: DaffCategoryFactory;
  let stubCategory: DaffCategory;

  let uri: DaffCategory['uri'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryTransformerService,
      ],
    });

    service = TestBed.inject(DaffMagentoCategoryTransformerService);
    categoryFactory = TestBed.inject(DaffCategoryFactory);

    uri = 'uri';
    stubCategory = categoryFactory.create({
      id: '1',
      uri: `${uri}.html`,
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    let magentoCategory: MagentoCategory;

    beforeEach(() => {
      magentoCategory = {
        id: Number(stubCategory.id),
        url_path: uri,
        url_suffix: '.html',
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: Number(stubCategory.breadcrumbs[0].categoryId),
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey,
        }],
        description: stubCategory.description,
        products: {
          items: [{
            __typename: 'simple',
            uid: '1',
            name: 'name',
            sku: stubCategory.product_ids[0],
            url_key: 'url_key',
            url_suffix: '.html',
            image: null,
            price_range: null,
            thumbnail: {
              url: 'url',
              label: 'label',
            },
          }],
        },
        children_count: stubCategory.children_count,
      };
    });

    it('should return a DaffCategory', () => {
      expect(service.transform(magentoCategory)).toEqual(stubCategory);
    });

    it('should return breadcrumbs in order of category_level', () => {
      magentoCategory.breadcrumbs = [{
        category_id: 3,
        category_name: 'category3',
        category_level: 3,
        category_url_key: 'urlKey3',
      },
      {
        category_id: 1,
        category_name: 'category1',
        category_level: 1,
        category_url_key: 'urlKey1',
      },
      {
        category_id: 2,
        category_name: 'category2',
        category_level: 2,
        category_url_key: 'urlKey2',
      }];
      const expectedBreadcrumbs: DaffCategoryBreadcrumb[] = [{
        categoryId: '1',
        categoryName: 'category1',
        categoryLevel: 1,
        categoryUrlKey: 'urlKey1',
      },
      {
        categoryId: '2',
        categoryName: 'category2',
        categoryLevel: 2,
        categoryUrlKey: 'urlKey2',
      },
      {
        categoryId: '3',
        categoryName: 'category3',
        categoryLevel: 3,
        categoryUrlKey: 'urlKey3',
      }];

      expect(service.transform(magentoCategory).breadcrumbs).toEqual(expectedBreadcrumbs);
    });
  });
});

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

  let url: DaffCategory['url'];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryTransformerService,
      ],
    });

    service = TestBed.inject(DaffMagentoCategoryTransformerService);
    categoryFactory = TestBed.inject(DaffCategoryFactory);

    url = 'url';
    stubCategory = categoryFactory.create({
      id: '1',
      url: `${url}.html`,
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    let magentoCategory: MagentoCategory;

    beforeEach(() => {
      magentoCategory = {
        uid: stubCategory.id,
        url_path: url,
        url_suffix: '.html',
        name: stubCategory.name,
        breadcrumbs: [{
          category_uid: stubCategory.breadcrumbs[0].id,
          category_name: stubCategory.breadcrumbs[0].name,
          category_level: stubCategory.breadcrumbs[0].level,
          category_url_path: stubCategory.breadcrumbs[0].url,
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

      stubCategory.breadcrumbs[0].url = `/${stubCategory.breadcrumbs[0].url}.html`;
    });

    it('should return a DaffCategory', () => {
      expect(service.transform(magentoCategory)).toEqual(stubCategory);
    });

    it('should return breadcrumbs in order of category_level', () => {
      magentoCategory.breadcrumbs = [{
        category_uid: '3',
        category_name: 'category3',
        category_level: 3,
        category_url_path: 'urlKey3',
      },
      {
        category_uid: '1',
        category_name: 'category1',
        category_level: 1,
        category_url_path: 'urlKey1',
      },
      {
        category_uid: '2',
        category_name: 'category2',
        category_level: 2,
        category_url_path: 'urlKey2',
      }];
      const expectedBreadcrumbs: DaffCategoryBreadcrumb[] = [{
        id: '1',
        name: 'category1',
        level: 1,
        url: '/urlKey1.html',
      },
      {
        id: '2',
        name: 'category2',
        level: 2,
        url: '/urlKey2.html',
      },
      {
        id: '3',
        name: 'category3',
        level: 3,
        url: '/urlKey3.html',
      }];

      expect(service.transform(magentoCategory).breadcrumbs).toEqual(expectedBreadcrumbs);
    });
  });
});

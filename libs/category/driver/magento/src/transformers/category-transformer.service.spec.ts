import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryBreadcrumb,
} from '@daffodil/category';
import { MagentoCategory } from '@daffodil/category/driver/magento';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import { MagentoProduct } from '@daffodil/product/driver/magento';

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
      url: `/${url}.html`,
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    let result: DaffCategory;
    let magentoCategory: MagentoCategory;

    beforeEach(() => {
      magentoCategory = {
        uid: stubCategory.id,
        url_path: url,
        url_suffix: '.html',
        canonical_url: stubCategory.canonicalUrl,
        name: stubCategory.name,
        meta_title: stubCategory.meta_title,
        meta_description: stubCategory.meta_description,
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
            price_range: null,
            image: {
              url: 'url',
              label: 'label',
            },
          }],
        },
        children_count: stubCategory.children_count,
      };

      stubCategory.breadcrumbs[0].url = `/${stubCategory.breadcrumbs[0].url}.html`;
      result = service.transform(magentoCategory, magentoCategory.products.items);
    });

    describe('when the products are different than those nested in the category', () => {
      let newProducts: MagentoProduct[];

      beforeEach(() => {
        newProducts = [{
          __typename: 'simple',
          uid: '1',
          name: 'name',
          sku: 'a different SKU',
          url_key: 'url_key',
          url_suffix: '.html',
          price_range: null,
          image: {
            url: 'url',
            label: 'label',
          },
        }];
        result = service.transform(magentoCategory, newProducts);
      });

      it('should set product_ids from the products response, not the category', () => {
        expect(result.product_ids).toContain(newProducts[0].sku);
        expect(result.product_ids).not.toContain(magentoCategory.products.items[0].sku);
      });
    });

    it('should return a DaffCategory', () => {
      expect(result).toEqual(stubCategory);
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

      result = service.transform(magentoCategory, magentoCategory.products.items);
      expect(result.breadcrumbs).toEqual(expectedBreadcrumbs);
    });

    it('should set a leading slash for the URL', () => {
      expect(result.url[0]).toEqual('/');
    });
  });
});

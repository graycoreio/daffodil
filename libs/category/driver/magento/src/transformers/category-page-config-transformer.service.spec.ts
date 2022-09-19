import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  MagentoCompleteCategoryResponse,
  MagentoCategory,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { DaffFilterType } from '@daffodil/core';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductPageInfo,
  MagentoProductSortFields,
} from '@daffodil/product/driver/magento';
import {
  MagentoProductAggregationSelectFactory,
  MagentoProductAggregationPriceFactory,
} from '@daffodil/product/driver/magento/testing';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';


describe('@daffodil/category/driver/magento | DaffMagentoCategoryPageConfigTransformerService', () => {

  let service: DaffMagentoCategoryPageConfigTransformerService;

  let url: DaffCategory['url'];
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  let aggregation: MagentoAggregation;

  let priceAggregateFactory: MagentoProductAggregationPriceFactory;
  let selectAggregateFactory: MagentoProductAggregationSelectFactory;
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryPageConfigTransformerService,
      ],
    });

    service = TestBed.inject(DaffMagentoCategoryPageConfigTransformerService);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    selectAggregateFactory = TestBed.inject(MagentoProductAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(MagentoProductAggregationPriceFactory);

    url = 'url';
    stubCategory = categoryFactory.create({
      id: '1',
      url: `${url}.html`,
    });
    stubCategoryPageMetadata = categoryPageMetadataFactory.create();

    stubCategoryPageMetadata.id = stubCategory.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    let completeCategoryResponse: MagentoCompleteCategoryResponse;
    let category: MagentoCategory;
    let aggregates: MagentoAggregation[];
    let page_info: MagentoProductPageInfo;
    let sort_fields: MagentoProductSortFields;
    let products: MagentoProduct[];
    let result: DaffCategoryPageMetadata;

    beforeEach(() => {
      category = {
        uid: stubCategory.id,
        url_path: stubCategory.url,
        url_suffix: '.html',
        canonical_url: stubCategory.canonicalUrl,
        name: stubCategory.name,
        breadcrumbs: [{
          category_uid: stubCategory.breadcrumbs[0].id,
          category_name: stubCategory.breadcrumbs[0].name,
          category_level: stubCategory.breadcrumbs[0].level,
          category_url_path: stubCategory.breadcrumbs[0].url,
        }],
        children_count: stubCategory.children_count,
      };

      page_info = {
        page_size: stubCategoryPageMetadata.pageSize,
        current_page: stubCategoryPageMetadata.currentPage,
        total_pages: stubCategoryPageMetadata.totalPages,
      };

      sort_fields = {
        default: stubCategoryPageMetadata.sortOptions.options[0].value,
        options: stubCategoryPageMetadata.sortOptions.options,
      };

      products = [new MagentoProductFactory().create({ sku: stubCategoryPageMetadata.ids[0] })];

      completeCategoryResponse = {
        category,
        aggregates: [],
        page_info,
        sort_fields,
        products,
        total_count: stubCategoryPageMetadata.count,
        appliedSortOption: stubCategoryPageMetadata.appliedSortOption,
        appliedSortDirection: stubCategoryPageMetadata.appliedSortDirection,
      };
    });

    it('should transform applied sorting', () => {
      result = service.transform(completeCategoryResponse);

      expect(result.appliedSortOption).toEqual(stubCategoryPageMetadata.appliedSortOption);
      expect(result.appliedSortDirection).toEqual(stubCategoryPageMetadata.appliedSortDirection);
    });

    describe('when the sort options are immutable', () => {
      beforeEach(() => {
        Object.freeze(sort_fields.options);
      });

      it('should complete successfully', () => {
        expect(service.transform(completeCategoryResponse)).toBeTruthy();
      });
    });

    describe('when the aggregate is for category_id', () => {
      beforeEach(() => {
        aggregation = selectAggregateFactory.create({
          attribute_code: 'category_id',
        });
        result = service.transform({
          ...completeCategoryResponse,
          aggregates: [aggregation],
        });
      });

      it('should not include that filter in the result', () => {
        expect(result.filters['category_id']).toBeUndefined();
      });
    });

    describe('when the aggregate is a select', () => {
      beforeEach(() => {
        aggregation = selectAggregateFactory.create();
        result = service.transform({
          ...completeCategoryResponse,
          aggregates: [aggregation],
        });
      });

      it('should return a DaffCategoryPageMetadata with an equal filter type', () => {
        expect(result.filters[aggregation.attribute_code].type).toEqual(DaffFilterType.Equal);
      });
    });

    describe('when the aggregate is a price', () => {
      beforeEach(() => {
        aggregation = priceAggregateFactory.create();
        result = service.transform({
          ...completeCategoryResponse,
          aggregates: [aggregation],
        });
      });

      it('should return a DaffCategoryPageMetadata with a range filter type', () => {
        expect(result.filters[aggregation.attribute_code].type).toEqual(DaffFilterType.RangeNumeric);
      });
    });
  });
});

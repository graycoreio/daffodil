import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryFilterType,
} from '@daffodil/category';
import {
  MagentoCompleteCategoryResponse,
  MagentoCategory,
  MagentoAggregation,
  MagentoPageInfo,
  MagentoSortFields,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryDriverMagentoAggregationSelectFactory,
  DaffCategoryDriverMagentoAggregationPriceFactory,
} from '@daffodil/category/driver/magento/testing';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';

describe('DaffMagentoCategoryPageConfigTransformerService', () => {

  let service: DaffMagentoCategoryPageConfigTransformerService;

  let url: DaffCategory['url'];
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;
  let aggregation: MagentoAggregation;

  let priceAggregateFactory: DaffCategoryDriverMagentoAggregationPriceFactory;
  let selectAggregateFactory: DaffCategoryDriverMagentoAggregationSelectFactory;
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
    selectAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationPriceFactory);

    url = 'url';
    stubCategory = categoryFactory.create({
      id: '1',
      url: `${url}.html`,
    });
    stubCategoryPageMetadata = categoryPageMetadataFactory.create();

    delete stubCategoryPageMetadata.filters;
    delete stubCategoryPageMetadata.applied_sort_direction;
    delete stubCategoryPageMetadata.applied_sort_option;
    stubCategoryPageMetadata.id = stubCategory.id;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    let completeCategoryResponse: MagentoCompleteCategoryResponse;
    let category: MagentoCategory;
    let aggregates: MagentoAggregation[];
    let page_info: MagentoPageInfo;
    let sort_fields: MagentoSortFields;
    let products: MagentoProduct[];
    let result: DaffCategoryPageMetadata;

    beforeEach(() => {
      category = {
        uid: stubCategory.id,
        url_path: stubCategory.url,
        url_suffix: '.html',
        name: stubCategory.name,
        breadcrumbs: [{
          category_uid: stubCategory.breadcrumbs[0].id,
          category_name: stubCategory.breadcrumbs[0].name,
          category_level: stubCategory.breadcrumbs[0].level,
          category_url_key: stubCategory.breadcrumbs[0].url,
        }],
        children_count: stubCategory.children_count,
      };

      page_info = {
        page_size: stubCategoryPageMetadata.page_size,
        current_page: stubCategoryPageMetadata.current_page,
        total_pages: stubCategoryPageMetadata.total_pages,
      };

      sort_fields = {
        default: stubCategoryPageMetadata.sort_options.options[0].value,
        options: stubCategoryPageMetadata.sort_options.options,
      };

      products = [new MagentoProductFactory().create({ sku: stubCategoryPageMetadata.product_ids[0] })];

      completeCategoryResponse = {
        category,
        aggregates: [],
        page_info,
        sort_fields,
        products,
        total_count: stubCategoryPageMetadata.total_products,
      };
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
        expect(result.filters[aggregation.attribute_code].type).toEqual(DaffCategoryFilterType.Equal);
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
        expect(result.filters[aggregation.attribute_code].type).toEqual(DaffCategoryFilterType.RangeNumeric);
      });
    });
  });
});

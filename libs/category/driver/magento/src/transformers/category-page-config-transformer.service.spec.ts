import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
  DaffCategoryRequest,
  DaffCategoryFilterType,
  DaffCategoryFromToFilterSeparator,
} from '@daffodil/category';
import {
  MagentoCompleteCategoryResponse,
  MagentoCategory,
  MagentoAggregation,
  MagentoPageInfo,
  MagentoSortFields,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';

xdescribe('DaffMagentoCategoryPageConfigTransformerService', () => {

  let service: DaffMagentoCategoryPageConfigTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create({
    id: '1',
  });

  const categoryPageMetadataFactory: DaffCategoryPageMetadataFactory = new DaffCategoryPageMetadataFactory();
  const stubCategoryPageMetadata: DaffCategoryPageMetadata = categoryPageMetadataFactory.create();
  delete stubCategoryPageMetadata.filters;
  delete stubCategoryPageMetadata.applied_sort_direction;
  delete stubCategoryPageMetadata.applied_sort_option;
  stubCategoryPageMetadata.id = stubCategory.id;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryPageConfigTransformerService,
      ],
    });
    service = TestBed.inject(DaffMagentoCategoryPageConfigTransformerService);
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

    beforeEach(() => {
      category = {
        id: Number(stubCategory.id),
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: Number(stubCategory.breadcrumbs[0].categoryId),
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey,
        }],
        children_count: stubCategory.children_count,
      };

      aggregates = [{
        attribute_code: stubCategoryPageMetadata.filters[0].name,
        label: stubCategoryPageMetadata.filters[0].label,
        options: [],
      }];

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
        aggregates,
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

    describe('when the filter type is select', () => {

      // it('should return a DaffCategoryPageMetadata with an equal filter type', () => {
      //   aggregates[0].type = 'select';
      //   stubCategoryPageMetadata.filters[0].type = DaffCategoryFilterType.Equal;

      //   expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageMetadata);
      // });
    });

    describe('when the filter type is boolean', () => {

      // it('should return a DaffCategoryPageMetadata with a equal filter type', () => {
      //   aggregates[0].type = 'boolean';
      //   stubCategoryPageMetadata.filters[0].type = DaffCategoryFilterType.Equal;

      //   expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageMetadata);
      // });
    });

    describe('when the filter type is multiselect', () => {

      // it('should return a DaffCategoryPageMetadata with a equal filter type', () => {
      //   aggregates[0].type = 'multiselect';
      //   stubCategoryPageMetadata.filters[0].type = DaffCategoryFilterType.Equal;

      //   expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageMetadata);
      // });
    });

    describe('when the filter type is price', () => {

      // it('should return a DaffCategoryPageMetadata with a range filter type', () => {
      //   aggregates[0].type = 'price';
      //   stubCategoryPageMetadata.filters[0].type = DaffCategoryFilterType.RangeNumeric;

      //   expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageMetadata);
      // });

      // it('should transform the price range', () => {
      //   aggregates[0].type = 'price';
      //   aggregates[0].options[0].value = '70_80';
      //   stubCategoryPageMetadata.filters[0].type = DaffCategoryFilterType.RangeNumeric;
      //   stubCategoryPageMetadata.filters[0].options[0].value = '70' + DaffCategoryFromToFilterSeparator + '80';

      //   expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageMetadata);
      // });
    });

    describe('when the filter type is anything else', () => {

      // it('should return a DaffCategoryPageMetadata with a Equal filter type', () => {
      //   aggregates[0].type = 'textfield';
      //   stubCategoryPageMetadata.filters[0].type = DaffCategoryFilterType.Equal;

      //   expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageMetadata);
      // });
    });
  });
});

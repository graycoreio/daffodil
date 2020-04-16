import { TestBed } from '@angular/core/testing';

import { MagentoProductFactory } from '@daffodil/product/testing';
import { MagentoProduct } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffCategory } from '../../../models/category';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { MagentoCategory } from '../models/category';
import { MagentoAggregation } from '../models/aggregation';
import { MagentoPageInfo } from '../models/page-info';
import { MagentoSortFields } from '../models/sort-fields';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';
import { DaffCategoryFromToFilterSeparator } from 'libs/category/src/models/requests/filter-request';
import { DaffCategoryFilterType } from '../../../models/category-filter-base';
import { DaffCategoryRequest } from '../../../models/requests/category-request';

describe('DaffMagentoCategoryPageConfigTransformerService', () => {

  let service: DaffMagentoCategoryPageConfigTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create();

  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest> = categoryPageConfigurationStateFactory.create();
  delete stubCategoryPageConfigurationState.filter_requests;
  delete stubCategoryPageConfigurationState.applied_sort_direction;
  delete stubCategoryPageConfigurationState.applied_sort_option;
	stubCategoryPageConfigurationState.id = stubCategory.id;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryPageConfigTransformerService
      ]
    });
    service = TestBed.get(DaffMagentoCategoryPageConfigTransformerService);
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
        id: stubCategory.id,
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: stubCategory.breadcrumbs[0].categoryId,
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey
        }],
        children_count: stubCategory.children_count
			}

			aggregates = [{
				attribute_code: stubCategoryPageConfigurationState.filters[0].name,
				label: stubCategoryPageConfigurationState.filters[0].label,
				options: [
					{
						value: stubCategoryPageConfigurationState.filters[0].options[0].value,
						count: stubCategoryPageConfigurationState.filters[0].options[0].count,
						label: stubCategoryPageConfigurationState.filters[0].options[0].label
					},
					{
						value: stubCategoryPageConfigurationState.filters[0].options[1].value,
						count: stubCategoryPageConfigurationState.filters[0].options[1].count,
						label: stubCategoryPageConfigurationState.filters[0].options[1].label
					}
				]
			}];

			page_info = {
				page_size: stubCategoryPageConfigurationState.page_size,
				current_page: stubCategoryPageConfigurationState.current_page,
				total_pages: stubCategoryPageConfigurationState.total_pages
			};

			sort_fields = {
				default: stubCategoryPageConfigurationState.sort_options[0].value,
				options: stubCategoryPageConfigurationState.sort_options
			};

			products = [new MagentoProductFactory().create({ sku: stubCategoryPageConfigurationState.product_ids[0]})];

			completeCategoryResponse = {
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				products: products,
				total_count: stubCategoryPageConfigurationState.total_products
			}
		});

		describe('when the filter type is select', () => {

			it('should return a DaffCategoryPageConfigurationState with an equal filter type', () => {
				aggregates[0].type = 'select';
				stubCategoryPageConfigurationState.filters[0].type = DaffCategoryFilterType.Equal;

				expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
			});
		});

		describe('when the filter type is boolean', () => {

			it('should return a DaffCategoryPageConfigurationState with a equal filter type', () => {
				aggregates[0].type = 'boolean';
				stubCategoryPageConfigurationState.filters[0].type = DaffCategoryFilterType.Equal;

				expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
			});
		});

		describe('when the filter type is multiselect', () => {

			it('should return a DaffCategoryPageConfigurationState with a equal filter type', () => {
				aggregates[0].type = 'multiselect';
				stubCategoryPageConfigurationState.filters[0].type = DaffCategoryFilterType.Equal;

				expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
			});
		});

		describe('when the filter type is price', () => {

			it('should return a DaffCategoryPageConfigurationState with a range filter type', () => {
				aggregates[0].type = 'price';
				stubCategoryPageConfigurationState.filters[0].type = DaffCategoryFilterType.Range;

				expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
			});

			it('should transform the price range', () => {
				aggregates[0].type = 'price';
				aggregates[0].options[0].value = '70_80';
				stubCategoryPageConfigurationState.filters[0].type = DaffCategoryFilterType.Range;
				stubCategoryPageConfigurationState.filters[0].options[0].value = '70' + DaffCategoryFromToFilterSeparator + '80';

				expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
			});
		});

		describe('when the filter type is anything else', () => {

			it('should return a DaffCategoryPageConfigurationState with a match filter type', () => {
				aggregates[0].type = 'textfield';
				stubCategoryPageConfigurationState.filters[0].type = DaffCategoryFilterType.Match;

				expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
			});
		});
  });
});

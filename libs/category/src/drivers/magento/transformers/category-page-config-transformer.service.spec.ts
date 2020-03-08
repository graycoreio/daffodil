import { TestBed } from '@angular/core/testing';

import { ProductNode } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffCategory } from '../../../models/category';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { MagentoCategory } from '../models/category';
import { MagentoAggregation } from '../models/aggregation';
import { MagentoPageInfo } from '../models/page-info';
import { MagentoSortFields } from '../models/sort-fields';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';

describe('DaffMagentoCategoryPageConfigTransformerService', () => {

  let service: DaffMagentoCategoryPageConfigTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create();

  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
  delete stubCategoryPageConfigurationState.applied_filters;
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
    
    it('should return a DaffCategoryPageConfigurationState', () => {
      const category: MagentoCategory = {
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
			
			const aggregates: MagentoAggregation[] = [{
				attribute_code: stubCategoryPageConfigurationState.filters[0].name,
				count: stubCategoryPageConfigurationState.filters[0].items_count,
				label: stubCategoryPageConfigurationState.filters[0].label,
				options: [
					{
						value: stubCategoryPageConfigurationState.filters[0].options[0].value,
						count: stubCategoryPageConfigurationState.filters[0].options[0].items_count,
						label: stubCategoryPageConfigurationState.filters[0].options[0].label
					},
					{
						value: stubCategoryPageConfigurationState.filters[0].options[1].value,
						count: stubCategoryPageConfigurationState.filters[0].options[1].items_count,
						label: stubCategoryPageConfigurationState.filters[0].options[1].label
					}
				]
			}];
			
			const page_info: MagentoPageInfo = {
				page_size: stubCategoryPageConfigurationState.page_size,
				current_page: stubCategoryPageConfigurationState.current_page,
				total_pages: stubCategoryPageConfigurationState.total_pages
			};

			const sort_fields: MagentoSortFields = {
				default: stubCategoryPageConfigurationState.sort_options[0].value,
				options: stubCategoryPageConfigurationState.sort_options
			};

			const products: ProductNode[] = [
				{
					sku: stubCategoryPageConfigurationState.product_ids[0],
					id: 2,
					name: 'name',
					price: {
						regularPrice: 123
					},
					url_key: 'url_key',
					image: {
						url: 'url',
						label: 'label'
					}
				}
			];

			completeCategoryResponse = {
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				products: products,
				total_count: stubCategoryPageConfigurationState.total_products
			}

      expect(service.transform(completeCategoryResponse)).toEqual(stubCategoryPageConfigurationState);
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { ProductNode } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffCategory } from '../../../models/inputs/category';
import { DaffCategoryPageConfigurationState } from '../../../models/inputs/category-page-configuration-state';
import { MagentoAggregation } from '../models/inputs/products/aggregation';
import { MagentoPageInfo } from '../models/inputs/products/page-info';
import { MagentoSortFields } from '../models/inputs/products/sort-fields';

describe('DaffMagentoCategoryPageConfigTransformerService', () => {

  let service: DaffMagentoCategoryPageConfigTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create();

  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
	stubCategoryPageConfigurationState.id = stubCategory.id;
	delete stubCategoryPageConfigurationState.applied_filters;
	delete stubCategoryPageConfigurationState.applied_sort_option;
	delete stubCategoryPageConfigurationState.applied_sort_direction;
  
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
    
    it('should return a DaffCategoryPageConfigurationState', () => {
      const aggregates: MagentoAggregation[] = [{
				attribute_code: stubCategoryPageConfigurationState.filters[0].attribute_name,
				count: stubCategoryPageConfigurationState.filters[0].count,
				label: stubCategoryPageConfigurationState.filters[0].label,
				options: [{
					value: stubCategoryPageConfigurationState.filters[0].options[0].value,
					count: stubCategoryPageConfigurationState.filters[0].options[0].count,
					label: stubCategoryPageConfigurationState.filters[0].options[0].label
				},
				{
					value: stubCategoryPageConfigurationState.filters[0].options[1].value,
					count: stubCategoryPageConfigurationState.filters[0].options[1].count,
					label: stubCategoryPageConfigurationState.filters[0].options[1].label
				}]
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

      expect(service.transform(
				stubCategoryPageConfigurationState.id,
				aggregates,
				page_info,
				sort_fields,
				stubCategoryPageConfigurationState.total_products,
				products
			)).toEqual(stubCategoryPageConfigurationState);
    });
  });
});

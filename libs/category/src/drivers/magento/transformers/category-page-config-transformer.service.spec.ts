import { TestBed } from '@angular/core/testing';

import { SortFieldsAndFiltersProductNode } from '@daffodil/product';
import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { DaffCategory } from '../../../models/category';
import { CategoryNode } from '../models/outputs/category-node';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';

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
	stubCategoryPageConfigurationState.product_ids = null;
	stubCategoryPageConfigurationState.total_products = null;
  
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
      const categoryNodeInput: CategoryNode = {
        id: stubCategory.id,
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: stubCategory.breadcrumbs[0].categoryId,
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey
        }],
        products: {
          total_count: stubCategory.total_products,
          page_info: {
            current_page: stubCategoryPageConfigurationState.current_page,
            page_size: stubCategoryPageConfigurationState.page_size,
            total_pages: stubCategoryPageConfigurationState.total_pages 
          },
          items: [
            {
              id: parseInt(stubCategory.productIds[0], 10),
              name: 'name',
              sku: 'sku',
              url_key: 'url_key',
              image: null,
              price: null
            }
          ]
        },
        children_count: stubCategory.children_count
      }

      const sortsAndFilters: SortFieldsAndFiltersProductNode = {
        filters: [{
          name: stubCategoryPageConfigurationState.filters[0].name,
          request_var: stubCategoryPageConfigurationState.filters[0].attribute_name,
          filter_items_count: stubCategoryPageConfigurationState.filters[0].items_count,
          __typename: stubCategoryPageConfigurationState.filters[0].type,
          filter_items: [{
            label: stubCategoryPageConfigurationState.filters[0].options[0].label,
            value_string: stubCategoryPageConfigurationState.filters[0].options[0].value,
            items_count: stubCategoryPageConfigurationState.filters[0].options[0].items_count
          },
          {
            label: stubCategoryPageConfigurationState.filters[0].options[1].label,
            value_string: stubCategoryPageConfigurationState.filters[0].options[1].value,
            items_count: stubCategoryPageConfigurationState.filters[0].options[1].items_count
          }
        ]
        }],
        sort_fields: {
          default: '',
          options: stubCategoryPageConfigurationState.sort_options
        }
      }

      expect(service.transform(categoryNodeInput, sortsAndFilters)).toEqual(stubCategoryPageConfigurationState);
    });
  });
});

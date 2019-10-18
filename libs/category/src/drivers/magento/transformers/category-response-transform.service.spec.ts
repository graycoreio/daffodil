import { TestBed } from '@angular/core/testing';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { 
  DaffProduct,
  SortFieldsAndFiltersNode,
  DaffProductTransformer
} from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoCategoryResponseTransformService } from './category-response-transform.service';
import { DaffCategory } from '../../../models/category';
import { CategoryNode } from '../models/outputs/category-node';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';

describe('DaffMagentoCategoryResponseTransformService', () => {

  let service: DaffMagentoCategoryResponseTransformService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create();
  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
  const productFactory: DaffProductFactory = new DaffProductFactory();
  const stubProducts: DaffProduct[] = productFactory.createMany(4);

  const magentoCategoryTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCategoryTransformerService', ['transform']);
  const magentoCategoryPageConfigurationTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCategoryPageConfigTransformerService', ['transform']);
  const magentoProductTransformerServiceSpy = jasmine.createSpyObj('DaffProductTransformerInterface', ['transformMany']);

  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryResponseTransformService,
        { provide: DaffMagentoCategoryTransformerService, useValue: magentoCategoryTransformerServiceSpy },
        { provide: DaffMagentoCategoryPageConfigTransformerService, useValue: magentoCategoryPageConfigurationTransformerServiceSpy },
        { provide: DaffProductTransformer, useValue: magentoProductTransformerServiceSpy }
      ]
    });
    service = TestBed.get(DaffMagentoCategoryResponseTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    let categoryNodeInput: CategoryNode;
    let sortsAndFilters: SortFieldsAndFiltersNode;

    beforeEach(() => {
      magentoCategoryTransformerServiceSpy.transform.and.returnValue(stubCategory);
      magentoCategoryPageConfigurationTransformerServiceSpy.transform.and.returnValue(stubCategoryPageConfigurationState);
      magentoProductTransformerServiceSpy.transformMany.and.returnValue(stubProducts);
  
      categoryNodeInput = {
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
  
      sortsAndFilters = {
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
        sortFields: {
          default: '',
          options: stubCategoryPageConfigurationState.sort_options
        }
      }
    });

    it('should call transform on the magentoCategoryTransformerService', () => {
      service.transform({category: categoryNodeInput, sortsAndFilters: sortsAndFilters});

      expect(magentoCategoryTransformerServiceSpy.transform).toHaveBeenCalledWith(categoryNodeInput);
    });

    it('should call transform on the magentoCategoryPageConfigurationService', () => {
      service.transform({category: categoryNodeInput, sortsAndFilters: sortsAndFilters});
      
      expect(magentoCategoryPageConfigurationTransformerServiceSpy.transform).toHaveBeenCalledWith(categoryNodeInput, sortsAndFilters);
    });

    it('should call transformMany on the magentoCategoryTransformerService', () => {
      service.transform({category: categoryNodeInput, sortsAndFilters: sortsAndFilters});
      
      expect(magentoProductTransformerServiceSpy.transformMany).toHaveBeenCalledWith(categoryNodeInput.products.items);
    });
    
    it('should return a DaffGetCategoryResponse compiled from the other injected transformers', () => {

      expect(service.transform({category: categoryNodeInput, sortsAndFilters: sortsAndFilters})).toEqual(
        {
          category: stubCategory,
          products: stubProducts,
          categoryPageConfigurationState: stubCategoryPageConfigurationState
        }
      );
    });
  });
});

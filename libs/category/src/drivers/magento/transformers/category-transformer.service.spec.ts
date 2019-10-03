import { TestBed } from '@angular/core/testing';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';

import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { DaffCategory } from '../../../models/category';
import { CategoryNode } from '../models/outputs/category-node';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';

describe('DaffMagentoCategoryTransformerService', () => {

  let service: DaffMagentoCategoryTransformerService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create();

  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState = categoryPageConfigurationStateFactory.create();
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DaffMagentoCategoryTransformerService
      ]
    });
    service = TestBed.get(DaffMagentoCategoryTransformerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {
    
    it('should return a DaffCategory', () => {
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

      expect(service.transform(categoryNodeInput)).toEqual(stubCategory);
    });
  });
});

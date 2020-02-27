import { TestBed } from '@angular/core/testing';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { 
  DaffProduct,
  DaffProductTransformer,
	ProductNode
} from '@daffodil/product';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoCategoryResponseTransformService } from './category-response-transform.service';
import { DaffCategory } from '../../../models/inputs/category';
import { MagentoCategory } from '../models/inputs/category/category';
import { DaffCategoryPageConfigurationState } from '../../../models/inputs/category-page-configuration-state';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { MagentoAggregation } from '../models/inputs/products/aggregation';
import { MagentoPageInfo } from '../models/inputs/products/page-info';
import { MagentoSortFields } from '../models/inputs/products/sort-fields';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';

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

    let category: MagentoCategory;
		let aggregates: MagentoAggregation[];
		let page_info: MagentoPageInfo;
		let sort_fields: MagentoSortFields;
		let products: ProductNode[];

    beforeEach(() => {
      magentoCategoryTransformerServiceSpy.transform.and.returnValue(stubCategory);
      magentoCategoryPageConfigurationTransformerServiceSpy.transform.and.returnValue(stubCategoryPageConfigurationState);
      magentoProductTransformerServiceSpy.transformMany.and.returnValue(stubProducts);
  
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
				attribute_code: stubCategoryPageConfigurationState.filters[0].attribute_name,
				count: stubCategoryPageConfigurationState.filters[0].count,
				label: stubCategoryPageConfigurationState.filters[0].label
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

			products = [
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
    });

    it('should call transform on the magentoCategoryTransformerService', () => {
      service.transform({
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				total_count: products.length,
				products: products
			});

      expect(magentoCategoryTransformerServiceSpy.transform).toHaveBeenCalledWith(category);
    });

    it('should call transform on the magentoCategoryPageConfigurationService', () => {
      service.transform({
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				total_count: products.length,
				products: products
			});
      
      expect(magentoCategoryPageConfigurationTransformerServiceSpy.transform).toHaveBeenCalledWith(
				category.id,
				aggregates,
				page_info,
				sort_fields,
				products.length,
				products
			);
    });

    it('should call transformMany on the magentoCategoryTransformerService', () => {
      service.transform({
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				total_count: products.length,
				products: products
			});
      
      expect(magentoProductTransformerServiceSpy.transformMany).toHaveBeenCalledWith(products);
    });
    
    it('should return a DaffGetCategoryResponse compiled from the other injected transformers', () => {

      expect(service.transform({
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				total_count: products.length,
				products: products
			})).toEqual(
        {
          category: stubCategory,
          products: stubProducts,
          categoryPageConfigurationState: stubCategoryPageConfigurationState
        }
      );
    });
  });
});

import { TestBed } from '@angular/core/testing';

import { DaffCategoryFactory, DaffCategoryPageConfigurationStateFactory } from '@daffodil/category/testing';
import { DaffProductFactory, MagentoProductFactory } from '@daffodil/product/testing';
import { DaffProduct, MagentoProduct, transformManyMagentoProducts } from '@daffodil/product';

import { DaffMagentoCategoryResponseTransformService } from './category-response-transform.service';
import { DaffCategory } from '../../../models/category';
import { DaffCategoryPageConfigurationState } from '../../../models/category-page-configuration-state';
import { MagentoCategory } from '../models/category';
import { DaffMagentoCategoryPageConfigTransformerService } from './category-page-config-transformer.service';
import { MagentoAggregation } from '../models/aggregation';
import { MagentoPageInfo } from '../models/page-info';
import { MagentoSortFields } from '../models/sort-fields';
import { DaffMagentoCategoryTransformerService } from './category-transformer.service';
import { MagentoCompleteCategoryResponse } from '../models/complete-category-response';
import { DaffCategoryRequest } from '../../../models/requests/category-request';

describe('DaffMagentoCategoryResponseTransformService', () => {

  let service: DaffMagentoCategoryResponseTransformService;
  const categoryFactory: DaffCategoryFactory = new DaffCategoryFactory();
  const stubCategory: DaffCategory = categoryFactory.create({
    id: '1'
  });
  const categoryPageConfigurationStateFactory: DaffCategoryPageConfigurationStateFactory = new DaffCategoryPageConfigurationStateFactory();
  const stubCategoryPageConfigurationState: DaffCategoryPageConfigurationState<DaffCategoryRequest> = categoryPageConfigurationStateFactory.create();
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
        { provide: DaffMagentoCategoryPageConfigTransformerService, useValue: magentoCategoryPageConfigurationTransformerServiceSpy }
      ]
    });
    service = TestBed.inject(DaffMagentoCategoryResponseTransformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

		let completeCategory: MagentoCompleteCategoryResponse;

    beforeEach(() => {
      magentoCategoryTransformerServiceSpy.transform.and.returnValue(stubCategory);
      magentoCategoryPageConfigurationTransformerServiceSpy.transform.and.returnValue(stubCategoryPageConfigurationState);
      magentoProductTransformerServiceSpy.transformMany.and.returnValue(stubProducts);

      const category: MagentoCategory = {
        id: Number(stubCategory.id),
        name: stubCategory.name,
        breadcrumbs: [{
          category_id: Number(stubCategory.breadcrumbs[0].categoryId),
          category_name: stubCategory.breadcrumbs[0].categoryName,
          category_level: stubCategory.breadcrumbs[0].categoryLevel,
          category_url_key: stubCategory.breadcrumbs[0].categoryUrlKey
        }],
        children_count: stubCategory.children_count
			}
			const aggregates: MagentoAggregation[] = [{
				attribute_code: stubCategoryPageConfigurationState.filters[0].name,
				label: stubCategoryPageConfigurationState.filters[0].label
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

			const products: MagentoProduct[] = new MagentoProductFactory().createMany(1);

			completeCategory = {
				category: category,
				aggregates: aggregates,
				page_info: page_info,
				sort_fields: sort_fields,
				products: products,
				total_count: products.length
			}
    });

    it('should call transform on the magentoCategoryTransformerService', () => {
      service.transform(completeCategory);

      expect(magentoCategoryTransformerServiceSpy.transform).toHaveBeenCalledWith(completeCategory.category);
    });

    it('should call transform on the magentoCategoryPageConfigurationService', () => {
      service.transform(completeCategory);

      expect(magentoCategoryPageConfigurationTransformerServiceSpy.transform).toHaveBeenCalledWith(completeCategory);
    });

    it('should return the same number of products it receives', () => {
      expect(service.transform(completeCategory).products.length).toEqual(completeCategory.products.length);
    });

    it('should return a DaffGetCategoryResponse', () => {
      expect(service.transform(completeCategory)).toEqual(
        {
					...{ magentoCompleteCategoryResponse: completeCategory },
          category: stubCategory,
          products: transformManyMagentoProducts(completeCategory.products),
          categoryPageConfigurationState: stubCategoryPageConfigurationState
        }
      );
		});

		it('should return the magento MagentoCompleteCategoryResponse on the daffodil response', () => {
			expect((<any>service.transform(completeCategory)).magentoCompleteCategoryResponse).toEqual(completeCategory);
		});
  });
});

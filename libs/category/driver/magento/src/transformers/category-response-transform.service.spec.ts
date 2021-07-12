import { TestBed } from '@angular/core/testing';

import {
  DaffCategory,
  DaffCategoryPageMetadata,
} from '@daffodil/category';
import {
  DaffMagentoCategoryTransformerService,
  DaffMagentoCategoryPageConfigTransformerService,
  MagentoCompleteCategoryResponse,
  MagentoCategory,
  MagentoAggregation,
  MagentoPageInfo,
  MagentoSortFields,
} from '@daffodil/category/driver/magento';
import { DaffCategoryDriverMagentoAggregationFactory } from '@daffodil/category/driver/magento/testing';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
} from '@daffodil/category/testing';
import {
  DaffMagentoProductsTransformer,
  MAGENTO_PRODUCT_CONFIG_TOKEN,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoCategoryResponseTransformService } from './category-response-transform.service';

describe('DaffMagentoCategoryResponseTransformService', () => {

  let service: DaffMagentoCategoryResponseTransformService;

  let url: DaffCategory['url'];
  let stubCategory: DaffCategory;
  let stubCategoryPageMetadata: DaffCategoryPageMetadata;

  let productFactory: DaffProductFactory;
  let magentoProductFactory: MagentoProductFactory;
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let aggregateFactory: DaffCategoryDriverMagentoAggregationFactory;

  let magentoCategoryTransformerServiceSpy: jasmine.SpyObj<DaffMagentoCategoryTransformerService>;
  let magentoCategoryPageConfigurationTransformerServiceSpy: jasmine.SpyObj<DaffMagentoCategoryPageConfigTransformerService>;
  const stubMediaUrl = 'mediaUrl';
  let magentoProductsTransformService: DaffMagentoProductsTransformer;

  beforeEach(() => {
    magentoCategoryTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCategoryTransformerService', ['transform']);
    magentoCategoryPageConfigurationTransformerServiceSpy = jasmine.createSpyObj('DaffMagentoCategoryPageConfigTransformerService', ['transform']);

    TestBed.configureTestingModule({
      providers: [
        DaffMagentoProductsTransformer,
        DaffMagentoCategoryResponseTransformService,
        { provide: DaffMagentoCategoryTransformerService, useValue: magentoCategoryTransformerServiceSpy },
        { provide: DaffMagentoCategoryPageConfigTransformerService, useValue: magentoCategoryPageConfigurationTransformerServiceSpy },
        { provide: MAGENTO_PRODUCT_CONFIG_TOKEN, useValue: { baseMediaUrl: stubMediaUrl }},
      ],
    });

    service = TestBed.inject(DaffMagentoCategoryResponseTransformService);
    magentoProductsTransformService = TestBed.inject(DaffMagentoProductsTransformer);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    categoryFactory = TestBed.inject(DaffCategoryFactory);
    productFactory = TestBed.inject(DaffProductFactory);
    magentoProductFactory = TestBed.inject(MagentoProductFactory);
    aggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationFactory);

    url = 'url';
    stubCategory = categoryFactory.create({
      id: '1',
      url: `${url}.html`,
    });
    stubCategoryPageMetadata = categoryPageMetadataFactory.create();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('transform', () => {

    let completeCategory: MagentoCompleteCategoryResponse;

    beforeEach(() => {
      magentoCategoryTransformerServiceSpy.transform.and.returnValue(stubCategory);
      magentoCategoryPageConfigurationTransformerServiceSpy.transform.and.returnValue(stubCategoryPageMetadata);

      const category: MagentoCategory = {
        url_path: url,
        url_suffix: '.html',
        uid: stubCategory.id,
        name: stubCategory.name,
        breadcrumbs: [{
          category_uid: stubCategory.breadcrumbs[0].id,
          category_name: stubCategory.breadcrumbs[0].name,
          category_level: stubCategory.breadcrumbs[0].level,
          category_url_path: stubCategory.breadcrumbs[0].url,
        }],
        children_count: stubCategory.children_count,
      };
      const aggregates: MagentoAggregation[] = aggregateFactory.createMany(1);

      const page_info: MagentoPageInfo = {
        page_size: stubCategoryPageMetadata.page_size,
        current_page: stubCategoryPageMetadata.current_page,
        total_pages: stubCategoryPageMetadata.total_pages,
      };

      const sort_fields: MagentoSortFields = {
        default: stubCategoryPageMetadata.sort_options.options[0].value,
        options: stubCategoryPageMetadata.sort_options.options,
      };

      const products = magentoProductFactory.createMany(1);

      completeCategory = {
        category,
        aggregates,
        page_info,
        sort_fields,
        products,
        total_count: products.length,
      };
    });

    it('should call transform on the magentoCategoryTransformerService', () => {
      service.transform(completeCategory, stubMediaUrl);

      expect(magentoCategoryTransformerServiceSpy.transform).toHaveBeenCalledWith(completeCategory.category);
    });

    it('should call transform on the magentoCategoryPageConfigurationService', () => {
      service.transform(completeCategory, stubMediaUrl);

      expect(magentoCategoryPageConfigurationTransformerServiceSpy.transform).toHaveBeenCalledWith(completeCategory);
    });

    it('should return the same number of products it receives', () => {
      expect(service.transform(completeCategory, stubMediaUrl).products.length).toEqual(completeCategory.products.length);
    });

    it('should return a DaffGetCategoryResponse', () => {
      expect(service.transform(completeCategory, stubMediaUrl)).toEqual(
        {
          ...{ magentoCompleteCategoryResponse: completeCategory },
          category: stubCategory,
          products: magentoProductsTransformService.transformManyMagentoProducts(completeCategory.products, stubMediaUrl),
          categoryPageMetadata: stubCategoryPageMetadata,
        },
      );
    });

    it('should return the magento MagentoCompleteCategoryResponse on the daffodil response', () => {
      expect((<any>service.transform(completeCategory, stubMediaUrl)).magentoCompleteCategoryResponse).toEqual(completeCategory);
    });
  });
});

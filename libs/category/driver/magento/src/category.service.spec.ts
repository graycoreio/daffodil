import {
  TestBed,
  fakeAsync,
  tick,
  flush,
} from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from '@damienwebdev/apollo-angular/testing';
import { Observable } from 'rxjs';

import {
  DaffCategoryIdRequest,
  DaffCategory,
  DaffCategoryFilterEqualRequest,
  DaffCategoryFilterRangeRequestOption,
  daffCategoryComputeFilterRangePairLabel,
  DaffGetCategoryResponse,
  DaffCategoryRequestKind,
  DaffCategoryFilterRangeNumericRequest,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import {
  MagentoGetCategoryFilterTypesResponse,
  MagentoCategory,
  MagentoSortFields,
  MagentoAggregation,
  MagentoCategoryFilterTypeField,
  MagentoPageInfo,
  MagentoGetCategoryFilterTypes,
  MagentoGetCategoryAndProductsResponse,
  MagentoGetCategoryAndProductsQuery,
  MagentoCategoryUrlResolverResponse,
} from '@daffodil/category/driver/magento';
import {
  DaffCategoryDriverMagentoCategoryFactory,
  DaffCategoryDriverMagentoSortFieldsFactory,
  DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory,
  DaffCategoryDriverMagentoPageInfoFactory,
  DaffCategoryDriverMagentoAggregationPriceFactory,
  DaffCategoryDriverMagentoAggregationSelectFactory,
} from '@daffodil/category/driver/magento/testing';
import {
  DaffCategoryFactory,
  DaffCategoryPageMetadataFactory,
  DaffCategoryFilterRequestEqualFactory,
  DaffCategoryFilterRequestRangeNumericFactory,
  DaffCategoryFilterRangeNumericRequestOptionFactory,
} from '@daffodil/category/testing';
import { MagentoProduct } from '@daffodil/product/driver/magento';
import { MagentoSimpleProductFactory } from '@daffodil/product/driver/magento/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffMagentoCategoryService } from './category.service';
import { MagentoGetCategoryAndProductsRequest } from './models/public_api';
import { MagentoResolveCategoryUrl } from './queries/public_api';

describe('@daffodil/category/driver/magento | DaffMagentoCategoryService', () => {
  let categoryService: DaffMagentoCategoryService;
  let categoryFactory: DaffCategoryFactory;
  let categoryPageMetadataFactory: DaffCategoryPageMetadataFactory;
  let controller: ApolloTestingController;
  let productFactory: DaffProductFactory;
  let equalFilterRequestFactory: DaffCategoryFilterRequestEqualFactory;
  let rangeFilterRequestFactory: DaffCategoryFilterRequestRangeNumericFactory;
  let rangeFilterRequestOptionFactory: DaffCategoryFilterRangeNumericRequestOptionFactory;
  let magentoCategoryFactory: DaffCategoryDriverMagentoCategoryFactory;
  let magentoSortFieldsFactory: DaffCategoryDriverMagentoSortFieldsFactory;
  let priceAggregateFactory: DaffCategoryDriverMagentoAggregationPriceFactory;
  let selectAggregateFactory: DaffCategoryDriverMagentoAggregationSelectFactory;
  let magentoFilterTypeFieldFactory: DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory;
  let magentoProductFactory: MagentoSimpleProductFactory;
  let magentoPageInfoFactory: DaffCategoryDriverMagentoPageInfoFactory;

  let mockCategoryRequest: DaffCategoryIdRequest;
  let mockCategory: DaffCategory;
  let equalFilterRequest: DaffCategoryFilterEqualRequest;
  let rangeFilterRequest: DaffCategoryFilterRangeNumericRequest;
  let rangeFilterRequestOption: DaffCategoryFilterRangeRequestOption<number>;
  let rangeFilterRequestOptionLabel: string;
  let mockMagentoCategory: MagentoCategory;
  let mockMagentoSortFields: MagentoSortFields;
  let mockMagentoSelectAggregation: MagentoAggregation;
  let mockMagentoPriceAggregation: MagentoAggregation;
  let mockMagentoSelectFilterTypeField: MagentoCategoryFilterTypeField;
  let mockMagentoPriceFilterTypeField: MagentoCategoryFilterTypeField;
  let mockMagentoProduct: MagentoProduct;
  let mockMagentoPageInfo: MagentoPageInfo;
  let mockGetFilterTypesResponse: MagentoGetCategoryFilterTypesResponse;
  let mockGetCategoryAndProductsResponse: MagentoGetCategoryAndProductsResponse;
  let mockCategoryUrlResolverResponse: MagentoCategoryUrlResolverResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffMagentoCategoryService,
      ],
    });

    categoryService = TestBed.inject(DaffMagentoCategoryService);
    controller = TestBed.inject(ApolloTestingController);

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    categoryPageMetadataFactory = TestBed.inject(DaffCategoryPageMetadataFactory);
    productFactory = TestBed.inject(DaffProductFactory);
    equalFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestEqualFactory);
    rangeFilterRequestFactory = TestBed.inject(DaffCategoryFilterRequestRangeNumericFactory);
    rangeFilterRequestOptionFactory = TestBed.inject(DaffCategoryFilterRangeNumericRequestOptionFactory);
    magentoCategoryFactory = TestBed.inject(DaffCategoryDriverMagentoCategoryFactory);
    magentoSortFieldsFactory = TestBed.inject(DaffCategoryDriverMagentoSortFieldsFactory);
    selectAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(DaffCategoryDriverMagentoAggregationPriceFactory);
    rangeFilterRequestOptionFactory = TestBed.inject(DaffCategoryFilterRangeNumericRequestOptionFactory);
    magentoProductFactory = TestBed.inject(MagentoSimpleProductFactory);
    magentoPageInfoFactory = TestBed.inject(DaffCategoryDriverMagentoPageInfoFactory);
    magentoFilterTypeFieldFactory = TestBed.inject(DaffCategoryDriverMagentoCategoryFilterTypeFieldFactory);

    mockCategory = categoryFactory.create();
    mockCategoryRequest = {
      kind: DaffCategoryRequestKind.ID,
      id: mockCategory.id,
    };
    mockMagentoProduct = magentoProductFactory.create();
    mockMagentoCategory = magentoCategoryFactory.create({
      uid: mockCategory.id,
      products: {
        items: [
          mockMagentoProduct,
        ],
      },
    });
    mockMagentoSortFields = magentoSortFieldsFactory.create();
    mockMagentoPriceAggregation = priceAggregateFactory.create();
    mockMagentoSelectAggregation = selectAggregateFactory.create();
    mockMagentoSelectFilterTypeField = magentoFilterTypeFieldFactory.create({
      name: mockMagentoSelectAggregation.attribute_code,
      type: {
        name: mockMagentoSelectAggregation.type,
      },
    });
    mockMagentoPriceFilterTypeField = magentoFilterTypeFieldFactory.create({
      name: mockMagentoPriceAggregation.attribute_code,
      type: {
        name: mockMagentoPriceAggregation.type,
      },
    });
    mockMagentoPageInfo = magentoPageInfoFactory.create();

    // transformedCategory = categoryFactory.create();
    // transformedCategoryPageMetadata =  categoryPageMetadataFactory.create();
    // transformedProducts =  productFactory.createMany(3);

    mockGetFilterTypesResponse = {
      __type: {
        inputFields: [
          mockMagentoPriceFilterTypeField,
          mockMagentoSelectFilterTypeField,
        ],
      },
    };
    mockGetCategoryAndProductsResponse = {
      categoryList: [
        mockMagentoCategory,
      ],
      products: {
        // items: [
        //   mockMagentoProduct,
        // ],
        // TODO: fixme
        items: [],
        total_count: 1,
        page_info: mockMagentoPageInfo,
        aggregations: [
          mockMagentoPriceAggregation,
          mockMagentoSelectAggregation,
        ],
        sort_fields: mockMagentoSortFields,
      },
    };
    mockCategoryUrlResolverResponse = {
      urlResolver: {
        entity_uid: mockMagentoCategory.uid,
      },
    };
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a category by ID', () => {
    let result: Observable<DaffGetCategoryResponse>;

    beforeEach(() => {
      result = categoryService.get(mockCategoryRequest);
    });

    it('should return a category with the correct info', done => {
      result.subscribe(res => {
        expect(res.category.id).toEqual(mockMagentoCategory.uid);
        expect(res.category.name).toEqual(mockMagentoCategory.name);
        done();
      });

      const filterTypesOp = controller.expectOne(MagentoGetCategoryFilterTypes);
      const categoryAndProductsOp = controller.expectOne(MagentoGetCategoryAndProductsQuery());

      filterTypesOp.flushData(mockGetFilterTypesResponse);
      categoryAndProductsOp.flushData(mockGetCategoryAndProductsResponse);
    });

    describe('when filters are requested', () => {
      beforeEach(() => {
        equalFilterRequest = equalFilterRequestFactory.create({
          name: mockMagentoSelectFilterTypeField.name,
          value: mockMagentoSelectAggregation.options.map(agg => agg.value),
        });
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterRequest = rangeFilterRequestFactory.create({
          name: mockMagentoPriceFilterTypeField.name,
          value: rangeFilterRequestOption,
        });
        rangeFilterRequestOptionLabel = daffCategoryComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
        mockCategoryRequest = {
          ...mockCategoryRequest,
          kind: DaffCategoryRequestKind.ID,
          filter_requests: [
            equalFilterRequest,
            rangeFilterRequest,
          ],
        };

        result = categoryService.get(mockCategoryRequest);
      });

      it('should apply those filters', done => {
        result.subscribe(res => {
          equalFilterRequest.value.forEach(option => {
            expect(res.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
          });
          expect(res.categoryPageMetadata.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
          done();
        });

        const filterTypesOp = controller.expectOne(MagentoGetCategoryFilterTypes);
        const categoryAndProductsOp = controller.expectOne(MagentoGetCategoryAndProductsQuery());

        filterTypesOp.flushData(mockGetFilterTypesResponse);
        categoryAndProductsOp.flushData(mockGetCategoryAndProductsResponse);
      });
    });
  });

  describe('getByUrl | getting a category by URL', () => {
    let mockCategoryUrlRequest: DaffCategoryUrlRequest;
    let url: string;
    let result: Observable<DaffGetCategoryResponse>;

    beforeEach(() => {
      url = '/test/url?with=query#fragment';
      mockCategoryUrlRequest = {
        kind: DaffCategoryRequestKind.URL,
        url,
      };
      result = categoryService.getByUrl(mockCategoryUrlRequest);
    });

    it('should return a category with the correct info', fakeAsync(() => {
      result.subscribe(res => {
        expect(res.category.id).toEqual(mockMagentoCategory.uid);
        expect(res.category.name).toEqual(mockMagentoCategory.name);
        flush();
      });

      const resolveUrlOp = controller.expectOne(MagentoResolveCategoryUrl);
      const filterTypesOp = controller.expectOne(MagentoGetCategoryFilterTypes);

      resolveUrlOp.flushData(mockCategoryUrlResolverResponse);
      filterTypesOp.flushData(mockGetFilterTypesResponse);

      tick();

      const categoryAndProductsOp = controller.expectOne(MagentoGetCategoryAndProductsQuery());
      categoryAndProductsOp.flushData(mockGetCategoryAndProductsResponse);
    }));

    it('should query the category and products with the category ID', fakeAsync(() => {
      result.subscribe();

      const resolveUrlOp = controller.expectOne(MagentoResolveCategoryUrl);
      const filterTypesOp = controller.expectOne(MagentoGetCategoryFilterTypes);

      resolveUrlOp.flushData(mockCategoryUrlResolverResponse);
      filterTypesOp.flushData(mockGetFilterTypesResponse);

      tick();

      const categoryAndProductsOp = controller.expectOne(MagentoGetCategoryAndProductsQuery());
      categoryAndProductsOp.flushData(mockGetCategoryAndProductsResponse);

      expect((<MagentoGetCategoryAndProductsRequest>categoryAndProductsOp.operation.variables).productFilter.category_uid.eq).toEqual(mockMagentoCategory.uid);
      expect((<MagentoGetCategoryAndProductsRequest>categoryAndProductsOp.operation.variables).categoryFilters.category_uid.eq).toEqual(mockMagentoCategory.uid);

      flush();
    }));

    describe('when the request applied a filter', () => {
      beforeEach(() => {
        equalFilterRequest = equalFilterRequestFactory.create({
          name: mockMagentoSelectFilterTypeField.name,
          value: mockMagentoSelectAggregation.options.map(agg => agg.value),
        });
        rangeFilterRequestOption = rangeFilterRequestOptionFactory.create();
        rangeFilterRequest = rangeFilterRequestFactory.create({
          name: mockMagentoPriceFilterTypeField.name,
          value: rangeFilterRequestOption,
        });
        rangeFilterRequestOptionLabel = daffCategoryComputeFilterRangePairLabel(rangeFilterRequestOption.min, rangeFilterRequestOption.max);
        mockCategoryUrlRequest = {
          ...mockCategoryUrlRequest,
          filter_requests: [
            equalFilterRequest,
            rangeFilterRequest,
          ],
        };

        result = categoryService.getByUrl(mockCategoryUrlRequest);
      });

      it('should apply those filters in the response', fakeAsync(() => {
        result.subscribe(res => {
          equalFilterRequest.value.forEach(option => {
            expect(res.categoryPageMetadata.filters[equalFilterRequest.name].options[option].applied).toBeTrue();
          });
          expect(res.categoryPageMetadata.filters[rangeFilterRequest.name].options[rangeFilterRequestOptionLabel].applied).toBeTrue();
          flush();
        });

        const resolveUrlOp = controller.expectOne(MagentoResolveCategoryUrl);
        const filterTypesOp = controller.expectOne(MagentoGetCategoryFilterTypes);

        resolveUrlOp.flushData(mockCategoryUrlResolverResponse);
        filterTypesOp.flushData(mockGetFilterTypesResponse);

        tick();

        const categoryAndProductsOp = controller.expectOne(MagentoGetCategoryAndProductsQuery());
        categoryAndProductsOp.flushData(mockGetCategoryAndProductsResponse);
      }));
    });
  });

  afterEach(() => {
    controller.verify();
  });
});

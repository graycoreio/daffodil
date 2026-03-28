import {
  TestBed,
  fakeAsync,
  flush,
} from '@angular/core/testing';
import {
  ApolloTestingModule,
  ApolloTestingController,
} from 'apollo-angular/testing';
import { Observable } from 'rxjs';

import {
  DaffCategoryIdRequest,
  DaffCategory,
  DaffGetCategoryResponse,
  DaffCategoryRequestKind,
  DaffCategoryUrlRequest,
} from '@daffodil/category';
import { DaffCategoryFactory } from '@daffodil/category/testing';
import {
  DaffFilterEqual,
  DaffFilterType,
} from '@daffodil/core';
import {
  ShopifyCategory,
  ShopifyFilterType,
  shopifyUrlTransformer,
} from '@daffodil/driver/shopify';
import {
  DaffCategoryDriverShopifyCategoryFactory,
  ShopifyProductNodeFactory as ShopifyProductFactory,
} from '@daffodil/driver/shopify/testing';
import { DaffProductFactory } from '@daffodil/product/testing';

import { DaffShopifyCategoryService } from './category.service';
import {
  getCategory,
  getCategoryByUrl,
} from './queries/public_api';

describe('@daffodil/category/driver/shopify | DaffShopifyCategoryService', () => {
  let categoryService: DaffShopifyCategoryService;
  let categoryFactory: DaffCategoryFactory;
  let controller: ApolloTestingController;
  let productFactory: DaffProductFactory;
  let shopifyCategoryFactory: DaffCategoryDriverShopifyCategoryFactory;
  let shopifyProductFactory: ShopifyProductFactory;

  let mockCategoryIdRequest: DaffCategoryIdRequest;
  let mockCategoryUrlRequest: DaffCategoryUrlRequest;
  let mockCategory: DaffCategory;
  let mockShopifyCategory: ShopifyCategory;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffShopifyCategoryService,
      ],
    });

    categoryService = TestBed.inject(DaffShopifyCategoryService);
    controller = TestBed.inject(ApolloTestingController);

    categoryFactory = TestBed.inject(DaffCategoryFactory);
    productFactory = TestBed.inject(DaffProductFactory);
    shopifyCategoryFactory = TestBed.inject(DaffCategoryDriverShopifyCategoryFactory);
    shopifyProductFactory = TestBed.inject(ShopifyProductFactory);

    mockCategory = categoryFactory.create();
    mockCategoryIdRequest = {
      kind: DaffCategoryRequestKind.ID,
      id: mockCategory.id,
      filterRequests: [],
    };
    mockCategoryUrlRequest = {
      kind: DaffCategoryRequestKind.URL,
      url: mockCategory.url,
      filterRequests: [],
    };
    mockShopifyCategory = shopifyCategoryFactory.create({
      id: mockCategory.id,
      title: mockCategory.name,
    });
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });

  describe('get | getting a category by ID', () => {
    let result: Observable<DaffGetCategoryResponse>;

    beforeEach(() => {
      result = categoryService.get(mockCategoryIdRequest);
    });

    it('should return a category with the correct info', done => {
      result.subscribe(res => {
        expect(res.category.name).toEqual(mockShopifyCategory.title);
        done();
      });

      const op = controller.expectOne(getCategory);
      expect(op.operation.variables.id).toEqual(`gid://shopify/Collection/${mockCategory.id}`);
      op.flush({
        data: {
          collection: {
            __typename: 'Collection',
            handle: '',
            id: mockCategory.id,
            title: mockCategory.name,
            description: mockCategory.description,
            onlineStoreUrl: mockCategory.canonicalUrl,
            image: {
              altText: '',
              id: '',
              url: '',
            },
            products: {
              nodes: [],
              filters: [],
            },
          },
        },
      });
    });
  });

  describe('getByUrl | getting a category by URL', () => {
    let result: Observable<DaffGetCategoryResponse>;

    beforeEach(() => {
      result = categoryService.getByUrl(mockCategoryUrlRequest);
    });

    it('should return a category with the correct info', fakeAsync(() => {
      result.subscribe(res => {
        expect(res.category.name).toEqual(mockShopifyCategory.title);
        flush();
      });
      const op = controller.expectOne(getCategoryByUrl);
      expect(op.operation.variables.handle).toEqual(shopifyUrlTransformer(mockCategory.url));
      op.flush({
        data: {
          collection: {
            __typename: 'Collection',
            handle: '',
            id: mockCategory.id,
            title: mockCategory.name,
            description: mockCategory.description,
            onlineStoreUrl: mockCategory.canonicalUrl,
            image: {
              altText: '',
              id: '',
              url: '',
            },
            products: {
              nodes: [],
              filters: [],
            },
          },
        },
      });
    }));
  });

  describe('filter transformations', () => {
    const flushCollectionResponse = (op, filters = []) => {
      op.flush({
        data: {
          collection: {
            __typename: 'Collection',
            handle: '',
            id: mockCategory.id,
            title: mockCategory.name,
            description: mockCategory.description,
            onlineStoreUrl: mockCategory.canonicalUrl,
            image: {
              altText: '',
              id: '',
              url: '',
            },
            products: {
              nodes: [],
              filters,
            },
          },
        },
      });
    };

    it('should parse response filters correctly for display', done => {
      const colorFilter = {
        __typename: 'Filter',
        id: 'filter.v.option.color',
        label: 'Color',
        presentation: null,
        type: ShopifyFilterType.List,
        values: [
          { __typename: 'FilterValue', count: 5, id: 'red-1', label: 'Red', input: '{"variantOption":{"name":"Color","value":"Red"}}' },
          { __typename: 'FilterValue', count: 3, id: 'blue-1', label: 'Blue', input: '{"variantOption":{"name":"Color","value":"Blue"}}' },
        ],
      };

      const result = categoryService.get({
        ...mockCategoryIdRequest,
        filterRequests: [],
      });

      result.subscribe(res => {
        const filterEntry = <DaffFilterEqual>res.categoryPageMetadata.filters['Color'];
        expect(filterEntry.type).toEqual(DaffFilterType.Equal);
        expect(filterEntry.name).toEqual('filter.v.option.color');
        expect(filterEntry.options['Red'].value).toEqual('{"variantOption":{"name":"Color","value":"Red"}}');
        expect(filterEntry.options['Blue'].value).toEqual('{"variantOption":{"name":"Color","value":"Blue"}}');
        expect(filterEntry.options['Red'].applied).toBe(false);
        expect(filterEntry.options['Blue'].applied).toBe(false);
        done();
      });

      const op = controller.expectOne(getCategory);
      flushCollectionResponse(op, [colorFilter]);
    });

    it('should produce correct GraphQL variables from filter requests', done => {
      const result = categoryService.get({
        ...mockCategoryIdRequest,
        filterRequests: [{
          type: DaffFilterType.Equal,
          name: 'filter.v.option.color',
          value: ['{"variantOption":{"name":"Color","value":"Red"}}'],
        }],
      });

      result.subscribe(() => {
        done();
      });

      const op = controller.expectOne(getCategory);
      expect(op.operation.variables.filters).toEqual([
        { variantOption: { name: 'Color', value: 'Red' }},
      ]);
      flushCollectionResponse(op);
    });

    it('should mark applied filters correctly after a filtered query', done => {
      const colorFilter = {
        __typename: 'Filter',
        id: 'filter.v.option.color',
        label: 'Color',
        presentation: null,
        type: ShopifyFilterType.List,
        values: [
          { __typename: 'FilterValue', count: 5, id: 'red-1', label: 'Red', input: '{"variantOption":{"name":"Color","value":"Red"}}' },
          { __typename: 'FilterValue', count: 3, id: 'blue-1', label: 'Blue', input: '{"variantOption":{"name":"Color","value":"Blue"}}' },
        ],
      };

      const result = categoryService.get({
        ...mockCategoryIdRequest,
        filterRequests: [{
          type: DaffFilterType.Equal,
          name: 'filter.v.option.color',
          value: ['{"variantOption":{"name":"Color","value":"Red"}}'],
        }],
      });

      result.subscribe(res => {
        const filterEntry = <DaffFilterEqual>res.categoryPageMetadata.filters['Color'];
        expect(filterEntry.options['Red'].applied).toBe(true);
        expect(filterEntry.options['Blue'].applied).toBe(false);
        done();
      });

      const op = controller.expectOne(getCategory);
      flushCollectionResponse(op, [colorFilter]);
    });

    it('should produce correct GraphQL variables for a price range filter', done => {
      const result = categoryService.get({
        ...mockCategoryIdRequest,
        filterRequests: [{
          type: DaffFilterType.RangeNumeric,
          name: 'filter.v.price',
          value: { min: 20, max: 80 },
        }],
      });

      result.subscribe(() => {
        done();
      });

      const op = controller.expectOne(getCategory);
      expect(op.operation.variables.filters).toEqual([
        { price: { min: 20, max: 80 }},
      ]);
      flushCollectionResponse(op);
    });

    it('should produce correct GraphQL variables for mixed filters', done => {
      const result = categoryService.get({
        ...mockCategoryIdRequest,
        filterRequests: [
          {
            type: DaffFilterType.Equal,
            name: 'filter.v.option.color',
            value: ['{"variantOption":{"name":"Color","value":"Red"}}'],
          },
          {
            type: DaffFilterType.RangeNumeric,
            name: 'filter.v.price',
            value: { min: 10, max: 50 },
          },
        ],
      });

      result.subscribe(() => {
        done();
      });

      const op = controller.expectOne(getCategory);
      expect(op.operation.variables.filters).toEqual([
        { variantOption: { name: 'Color', value: 'Red' }},
        { price: { min: 10, max: 50 }},
      ]);
      flushCollectionResponse(op);
    });
  });

  afterEach(() => {
    controller.verify();
  });
});

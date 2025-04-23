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
  ShopifyCategory,
  shopifyUrlTransformer,
} from '@daffodil/driver/shopify';
import { DaffCategoryDriverShopifyCategoryFactory } from '@daffodil/driver/shopify/testing';
import { ShopifyProductNodeFactory as ShopifyProductFactory } from '@daffodil/driver/shopify/testing';
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

  afterEach(() => {
    controller.verify();
  });
});

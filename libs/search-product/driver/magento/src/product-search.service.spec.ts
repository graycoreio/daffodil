import { TestBed } from '@angular/core/testing';
import { InMemoryCache } from '@apollo/client/core';
import { addTypenameToDocument } from '@apollo/client/utilities';
import {
  ApolloTestingController,
  ApolloTestingModule,
  APOLLO_TESTING_CACHE,
} from 'apollo-angular/testing';
import { GraphQLError } from 'graphql';
import { catchError } from 'rxjs/operators';

import { DaffCollectionMetadata } from '@daffodil/core';
import { schema } from '@daffodil/driver/magento';
import {
  MagentoAggregation,
  MagentoProduct,
  MagentoProductFilterTypeField,
  MagentoProductGetFilterTypes,
  MagentoProductGetFilterTypesResponse,
  MagentoProductPageInfo,
  MagentoProductSortFields,
  MagentoSimpleProduct,
} from '@daffodil/product/driver/magento';
import {
  MagentoProductAggregationPriceFactory,
  MagentoProductAggregationSelectFactory,
  MagentoProductFactory,
  MagentoProductFilterTypeFieldFactory,
  MagentoProductPageInfoFactory,
  MagentoProductSortFieldsFactory,
  MagentoSimpleProductFactory,
} from '@daffodil/product/driver/magento/testing';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';
import { MagentoSearchForProductsResponse } from '@daffodil/search-product/driver/magento';

import { DaffSearchProductMagentoDriver } from './product-search.service';
import { productSearch } from './queries/product-search';

describe('@daffodil/search-product/driver/magento | DaffSearchProductMagentoDriver', () => {
  let service: DaffSearchProductMagentoDriver;
  let controller: ApolloTestingController;

  let magentoSimpleProductFactory: MagentoProductFactory;
  let magentoSortFieldsFactory: MagentoProductSortFieldsFactory;
  let priceAggregateFactory: MagentoProductAggregationPriceFactory;
  let selectAggregateFactory: MagentoProductAggregationSelectFactory;
  let magentoFilterTypeFieldFactory: MagentoProductFilterTypeFieldFactory;
  let magentoProductFactory: MagentoSimpleProductFactory;
  let magentoPageInfoFactory: MagentoProductPageInfoFactory;

  let mockSimpleProduct: MagentoSimpleProduct;
  let mockSearchProductsResponse: MagentoSearchForProductsResponse;
  let mockMagentoProductSortFields: MagentoProductSortFields;
  let mockMagentoSelectAggregation: MagentoAggregation;
  let mockMagentoPriceAggregation: MagentoAggregation;
  let mockMagentoSelectFilterTypeField: MagentoProductFilterTypeField;
  let mockMagentoPriceFilterTypeField: MagentoProductFilterTypeField;
  let mockMagentoProduct: MagentoProduct;
  let mockMagentoProductPageInfo: MagentoProductPageInfo;
  let mockGetFilterTypesResponse: MagentoProductGetFilterTypesResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffSearchProductMagentoDriver,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffSearchProductMagentoDriver);
    controller = TestBed.inject(ApolloTestingController);
    magentoSimpleProductFactory = TestBed.inject(MagentoProductFactory);
    magentoSortFieldsFactory = TestBed.inject(MagentoProductSortFieldsFactory);
    selectAggregateFactory = TestBed.inject(MagentoProductAggregationSelectFactory);
    priceAggregateFactory = TestBed.inject(MagentoProductAggregationPriceFactory);
    magentoProductFactory = TestBed.inject(MagentoSimpleProductFactory);
    magentoPageInfoFactory = TestBed.inject(MagentoProductPageInfoFactory);
    magentoFilterTypeFieldFactory = TestBed.inject(MagentoProductFilterTypeFieldFactory);

    mockSimpleProduct = magentoSimpleProductFactory.create();
    mockMagentoProductSortFields = magentoSortFieldsFactory.create();
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
    mockMagentoProductPageInfo = magentoPageInfoFactory.create();
    mockGetFilterTypesResponse = {
      __type: {
        inputFields: [
          mockMagentoPriceFilterTypeField,
          mockMagentoSelectFilterTypeField,
        ],
      },
    };
    mockSearchProductsResponse = {
      products: {
        __typename: 'Products',
        items: [mockSimpleProduct],
        total_count: 1,
        page_info: mockMagentoProductPageInfo,
        aggregations: [
          mockMagentoPriceAggregation,
          mockMagentoSelectAggregation,
        ],
        sort_fields: mockMagentoProductSortFields,
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('search | searching for products', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return a collection of product search results', done => {
        service.search('query').subscribe(result => {
          expect(result.collection[DAFF_SEARCH_PRODUCT_RESULT_KIND][0].id).toEqual(mockSimpleProduct.sku);
          expect((<DaffCollectionMetadata>result.metadata).count).toEqual(mockSearchProductsResponse.products.total_count);
          done();
        });

        const searchOp = controller.expectOne(addTypenameToDocument(productSearch()));
        const filterOp = controller.expectOne(addTypenameToDocument(MagentoProductGetFilterTypes));

        searchOp.flush({
          data: mockSearchProductsResponse,
        });
        filterOp.flush({
          data: mockGetFilterTypesResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw an Error', done => {
        service.search('query').pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(Error));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(productSearch()));

        op.graphqlErrors([new GraphQLError(
          'Can\'t find any products matching that query.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql-no-such-entity' },
        )]);
      });
    });
  });
});

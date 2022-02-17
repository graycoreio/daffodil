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

import { schema } from '@daffodil/driver/magento';
import {
  MagentoGetProductResponse,
  MagentoSimpleProduct,
} from '@daffodil/product/driver/magento';
import { MagentoProductFactory } from '@daffodil/product/driver/magento/testing';
import { DAFF_SEARCH_PRODUCT_RESULT_KIND } from '@daffodil/search-product';

import { DaffSearchProductMagentoDriver } from './product-search.service';
import { productSearch } from './queries/product-search';

describe('@daffodil/search-product/driver/magento | DaffSearchProductMagentoDriver', () => {
  let service: DaffSearchProductMagentoDriver;
  let controller: ApolloTestingController;

  let magentoSimpleProductFactory: MagentoProductFactory;
  let mockSimpleProduct: MagentoSimpleProduct;
  let mockGetProductsResponse: MagentoGetProductResponse;

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

    mockSimpleProduct = magentoSimpleProductFactory.create();
    mockGetProductsResponse = {
      products: {
        __typename: 'Products',
        items: [mockSimpleProduct],
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
          expect(result[DAFF_SEARCH_PRODUCT_RESULT_KIND][0].id).toEqual(mockSimpleProduct.sku);
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(productSearch));

        op.flush({
          data: mockGetProductsResponse,
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

        const op = controller.expectOne(addTypenameToDocument(productSearch));

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

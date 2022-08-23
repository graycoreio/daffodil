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

import {
  DaffDriverMagentoError,
  schema,
} from '@daffodil/driver/magento';
import { DaffProduct } from '@daffodil/product';
import {
  getProductReviews,
  MagentoGetProductReviewsResponse,
  MagentoProductReviews,
} from '@daffodil/reviews/driver/magento';
import { MagentoProductReviewsFactory } from '@daffodil/reviews/driver/magento/testing';

import { DaffReviewsMagentoService } from './reviews.service';

describe('@daffodil/reviews/driver/magento | DaffReviewsMagentoService', () => {
  let service: DaffReviewsMagentoService;
  let controller: ApolloTestingController;

  let magentoReviewsFactory: MagentoProductReviewsFactory;

  let productId: DaffProduct['id'];
  let mockMagentoReviews: MagentoProductReviews;
  let mockGetProductReviewsResponse: MagentoGetProductReviewsResponse;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ApolloTestingModule,
      ],
      providers: [
        DaffReviewsMagentoService,
        {
          provide: APOLLO_TESTING_CACHE,
          useValue: new InMemoryCache({
            addTypename: true,
            possibleTypes: schema.possibleTypes,
          }),
        },
      ],
    });

    service = TestBed.inject(DaffReviewsMagentoService);
    controller = TestBed.inject(ApolloTestingController);

    magentoReviewsFactory = TestBed.inject(MagentoProductReviewsFactory);

    productId = 'productId';
    mockMagentoReviews = magentoReviewsFactory.create();
    mockGetProductReviewsResponse = {
      products: {
        items: [{
          reviews: mockMagentoReviews,
        }],
      },
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('list | listing the available countries', () => {
    describe('when the call to the Magento API is successful', () => {
      it('should return the list of Daffodil countries', done => {
        service.list(productId).subscribe((result) => {
          expect(Object.values(result.data)).toEqual(jasmine.arrayContaining(mockMagentoReviews.items.map(e => jasmine.objectContaining({
            productId: e.product.sku,
          }))));
          done();
        });

        const op = controller.expectOne(addTypenameToDocument(getProductReviews));

        op.flush({
          data: mockGetProductReviewsResponse,
        });
      });
    });

    describe('when the call to the Magento API is unsuccessful', () => {
      it('should throw a general Magento driver error', done => {
        service.list(productId).pipe(
          catchError(err => {
            expect(err).toEqual(jasmine.any(DaffDriverMagentoError));
            done();
            return [];
          }),
        ).subscribe();

        const op = controller.expectOne(addTypenameToDocument(getProductReviews));

        op.graphqlErrors([new GraphQLError(
          'Generic error.',
          null,
          null,
          null,
          null,
          null,
          { category: 'graphql' },
        )]);
      });
    });

    afterEach(() => {
      controller.verify();
    });
  });
});

import { TestBed } from '@angular/core/testing';
import { ApolloQueryResult } from '@apollo/client/core';

import { DaffProductNotFoundError } from '@daffodil/product/driver';
import { DaffReviewsInvalidAPIResponseError } from '@daffodil/reviews/driver';
import { MagentoGetProductReviewsResponse } from '@daffodil/reviews/driver/magento';
import { MagentoProductReviewsFactory } from '@daffodil/reviews/driver/magento/testing';

import { validateGetProductReviewsResponse as validator } from './get-reviews';

describe('@daffodil/reviews/driver/magento | validateGetProductReviewsResponse', () => {
  let response: ApolloQueryResult<MagentoGetProductReviewsResponse>;
  let reviewsFactory: MagentoProductReviewsFactory;

  beforeEach(() => {
    reviewsFactory = TestBed.inject(MagentoProductReviewsFactory);

    response = {
      data: {
        products: {
          items: [{
            reviews: reviewsFactory.create(),
          }],
        },
      },
      loading: null,
      networkStatus: null,
    };
  });

  describe('when the response has the requested product', () => {
    describe('and when the response has reviews', () => {
      it('should return the response and not throw an error', () => {
        const result = validator(response);

        expect(result).toEqual(response);
      });
    });

    describe('and when the response does not have reviews', () => {
      beforeEach(() => {
        response.data.products.items[0].reviews = null;
      });

      it('should throw a DaffReviewsInvalidAPIResponseError', () => {
        expect(() => validator(response)).toThrow(jasmine.any(DaffReviewsInvalidAPIResponseError));
      });
    });
  });

  describe('when the response does not have the requested product', () => {
    beforeEach(() => {
      response.data.products.items = [];
    });

    it('should throw a DaffProductNotFoundError', () => {
      expect(() => validator(response)).toThrow(jasmine.any(DaffProductNotFoundError));
    });
  });
});

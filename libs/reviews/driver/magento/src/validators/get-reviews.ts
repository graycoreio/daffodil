import { ApolloQueryResult } from '@apollo/client/core';

import { DaffProductNotFoundError } from '@daffodil/product/driver';
import { DaffReviewsInvalidAPIResponseError } from '@daffodil/reviews/driver';

import { MagentoGetProductReviewsResponse } from '../models/public_api';

export const validateGetProductReviewsResponse = (response: ApolloQueryResult<MagentoGetProductReviewsResponse>) => {
  if (response.data.products.items?.[0]) {
    if (response.data.products.items[0].reviews) {
      return response;
    } else {
      throw new DaffReviewsInvalidAPIResponseError('Get product reviews response does not contain a valid list of reviews.');
    }
  } else {
    throw new DaffProductNotFoundError('The requested product was not found.');
  }
};

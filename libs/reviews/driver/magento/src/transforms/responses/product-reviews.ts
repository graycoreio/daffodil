import { daffIdentifiableArrayToDict } from '@daffodil/core';
import { DaffProductReviews } from '@daffodil/reviews';

import { MagentoGetProductReviewsResponse } from '../../models/public_api';
import { magentoProductReviewTransform } from './product-review';
import { magentoProductReviewCollectionMetadataTransform } from './product-review-collection-metadata';

export const magentoProductReviewsTransform = (productReviews: MagentoGetProductReviewsResponse): DaffProductReviews => {
  const reviews = productReviews.products.items?.[0]?.reviews;
  const data = daffIdentifiableArrayToDict(reviews.items.map(review => magentoProductReviewTransform(review, productReviews.products.items?.[0].sku)) || []);

  return {
    data,
    metadata: magentoProductReviewCollectionMetadataTransform(reviews, Object.values(data)),
  };
};

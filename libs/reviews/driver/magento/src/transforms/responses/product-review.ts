import { DaffProductReview } from '@daffodil/reviews';

import { MagentoProductReview } from '../../models/public_api';
import { magentoProductRatingTransform } from './product-rating';

export const magentoProductReviewTransform = (review: MagentoProductReview, productSku: string): DaffProductReview => ({
  // TODO: use real ID when available
  id: `${productSku}-${review.nickname}-${review.summary}`,
  overallRating: review.average_rating,
  productId: productSku,
  // TODO: investigate timezones issue
  // magento does not give timezone info in the string
  // figure out way to infer it
  createdAt: new Date(review.created_at).toISOString(),
  customer: {
    name: review.nickname,
  },
  title: review.summary,
  body: review.text,
  ratings: review.ratings_breakdown.map(magentoProductRatingTransform),
});

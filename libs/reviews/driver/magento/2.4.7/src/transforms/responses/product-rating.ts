import { DaffReviewRating } from '@daffodil/reviews';

import { MagentoProductReviewRating } from '../../models/public_api';

export const magentoProductRatingTransform = (rating: MagentoProductReviewRating): DaffReviewRating => ({
  label: rating.name,
  value: Number(rating.value),
});

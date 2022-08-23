import { DaffMagentoProductPreviewExtraTransform } from '@daffodil/product/driver/magento';
import { DaffReviewedProduct } from '@daffodil/reviews';

import { MagentoReviewedProduct } from '../../models/public_api';

export const magentoReviewedProductTransform: DaffMagentoProductPreviewExtraTransform<MagentoReviewedProduct, DaffReviewedProduct> = (daffProduct, magentoProduct) => ({
  ...daffProduct,
  aggregateReview: magentoProduct.rating_summary,
  reviewCount: magentoProduct.review_count,
});

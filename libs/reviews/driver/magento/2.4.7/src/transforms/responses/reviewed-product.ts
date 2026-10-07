import { DaffMagentoProductExtraTransform } from '@daffodil/product/driver/magento';
import { DaffReviewedProduct } from '@daffodil/reviews';

import { MagentoReviewedProduct } from '../../models/public_api';

export const magentoReviewedProductTransform: DaffMagentoProductExtraTransform<MagentoReviewedProduct, DaffReviewedProduct> = (daffProduct, magentoProduct) => ({
  ...daffProduct,
  aggregateReview: magentoProduct.rating_summary,
  reviewCount: magentoProduct.review_count,
});

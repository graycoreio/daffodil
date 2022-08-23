import { MagentoProduct } from '@daffodil/product/driver/magento';

export interface MagentoReviewedProduct extends MagentoProduct {
  review_count: number;
  rating_summary: number;
}

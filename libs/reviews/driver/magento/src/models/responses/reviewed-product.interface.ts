import { MagentoProduct } from '@daffodil/product/driver/magento';

export interface MagentoReviewedProduct extends MagentoProduct {
  sku: string;
  review_count: number;
  rating_summary: number;
}

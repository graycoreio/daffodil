import { MagentoProduct } from '@daffodil/product/driver/magento/2.4.7';

export interface MagentoReviewedProduct extends MagentoProduct {
  sku: string;
  review_count: number;
  rating_summary: number;
}

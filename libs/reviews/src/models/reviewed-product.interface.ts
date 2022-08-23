import { DaffProduct } from '@daffodil/product';

export interface DaffReviewedProduct extends DaffProduct {
  aggregateReview: number;
  reviewCount: number;
}

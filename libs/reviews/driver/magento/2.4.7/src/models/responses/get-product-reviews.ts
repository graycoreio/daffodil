import { MagentoProductReviews } from './product-reviews';

export interface MagentoGetProductReviewsResponse {
  products: {
    items?: ({
      sku: string;
      reviews: MagentoProductReviews;
    } | null)[];
  };
}

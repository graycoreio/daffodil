import { MagentoProductReviews } from './product-reviews';

export interface MagentoGetProductReviewsResponse {
  products: {
    items?: ({
      reviews: MagentoProductReviews;
    } | null)[];
  };
}

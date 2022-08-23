import { MagentoProductReviewRating } from './product-review-rating.interface';

export interface MagentoProductReview {
  __typename?: 'ProductReview';
  average_rating: number;
  created_at: string;
  nickname: string;
  product: {
    sku: string;
  };
  ratings_breakdown: MagentoProductReviewRating[];
  summary: string;
  text: string;
}

/**
 * A short excerpt of a review or a rating from a review website.
 */
export interface SchemaReview {
  '@type': 'Review';
  reviewRating: {
    '@type': 'Rating';
    ratingValue: number;
    bestRating: number;
  };
  author: {
    '@type': 'Person';
    name: string;
  };
}

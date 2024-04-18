/*
 * Aggregates ratings and reviews.
 * It's like the backbone of user feedback, providing a clear picture of item quality.
 *
 * See https://developers.google.com/search/docs/appearance/structured-data/review-snippet
 */
export interface SchemaAggregateRating {
  '@type': 'AggregateRating';
  ratingValue: number;
  reviewCount: number;
};

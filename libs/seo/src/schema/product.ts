import { SchemaAggregateRating } from './aggregate-rating';
import { SchemaContext } from './context';
import { SchemaOffers } from './offer';
import { SchemaReview } from './review';

export interface SchemaProductBase {
  '@type': 'Product';
  name: string;
  image?: string[] | string;
  description?: string;
  sku?: string;
  mpn?: string;
  gtin?: string;
};

export type SchemaProductWithOffer = SchemaProductBase | {
  offers: SchemaOffers;
};

export type SchemaProductWithAggregateRating = SchemaProductBase | {
  aggregateRating: SchemaAggregateRating;
};

export type SchemaProductWithReview = SchemaProductBase | {
  review: SchemaReview;
};

/**
 * Any offered product or service.
 * For example: a pair of shoes; a concert ticket; the rental of a car; a haircut; or an episode of a TV show streamed online.
 *
 * This schema only supports a specific subset of the full product schema.
 * See: https://schema.org/Product for the full definition.
 */
export type SchemaProduct = SchemaProductWithOffer | SchemaProductWithAggregateRating | SchemaProductWithReview;

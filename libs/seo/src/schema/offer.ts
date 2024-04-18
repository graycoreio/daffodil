type priceValidUntilDate = `${number}-${number}-${number}`;
type priceValidUntilTime = `${number}:${number}:${number}.${number}`;
type priceValidUntilWithTime = `${priceValidUntilDate}T${priceValidUntilTime}Z`;

type SchemaCondition = 'https://schema.org/DamagedCondition'
| 'https://schema.org/NewCondition'
| 'https://schema.org/RefurbishedCondition'
| 'https://schema.org/UsedCondition';

type SchemaAvailability = 'https://schema.org/BackOrder'
| 'https://schema.org/Discontinued'
| 'https://schema.org/InStock'
| 'https://schema.org/InStoreOnly'
| 'https://schema.org/LimitedAvailability'
| 'https://schema.org/OnlineOnly'
| 'https://schema.org/OutOfStock'
| 'https://schema.org/PreOrder'
| 'https://schema.org/PreSale'
| 'https://schema.org/SoldOut';

/**
 * An offer for a product or service.
 */
export interface SchemaOffers {
  '@type': 'Offer';
  url?: string;
  price: number;
  /**
   *  ISO 4217 currency format
   */
  priceCurrency: string;
  itemCondition: SchemaCondition;
  availability: SchemaAvailability;
  priceValidUntil?: priceValidUntilDate | priceValidUntilWithTime;
}

import { SchemaProduct } from '../product';
import { Schema } from '../schema';

const mySchema: Schema<SchemaProduct> = {
  '@context': 'https://schema.org/',
  '@type': 'Product',
  name: 'Text',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    price: 10.99,
    priceCurrency: 'USD',
    itemCondition: 'https://schema.org/NewCondition',
  },
};

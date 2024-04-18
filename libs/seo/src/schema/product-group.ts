import { SchemaProduct } from './product';

/*
* Products that vary based upon certain properties like size or color.
*/
export type SchemaProductGroup = ({ [key: string]: any } & {
  '@type': 'ProductGroup';
  name: string;
  url: string;
  image?: string[];
  description?: string;
  sku?: string;
  productGroupID: string;
  variesBy: `https://schema.org/${string}`[];
  hasVariant: Omit<SchemaProduct, '@context'>[];
});


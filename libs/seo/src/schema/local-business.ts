/**
 * Represents a local business such as a store.
 *
 * See https://developers.google.com/search/docs/appearance/structured-data/local-business
 */
export interface SchemaLocalBusiness {
  '@type': 'Store';
  'image': string | string[];
  'name': string;
  'address': {
    '@type': 'PostalAddress';
    'streetAddress': string;
    'addressLocality': string;
    'addressRegion': string;
    'postalCode': string;
    'addressCountry': string;
  };
  'url': string;
  'priceRange': '$' | '$$' | '$$$' | '$$$$';
  'telephone': string;
}

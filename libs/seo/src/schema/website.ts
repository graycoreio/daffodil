/**
 * A set of related web pages and other items typically served from a single web domain and accessible via URLs.
 *
 * See: https://developers.google.com/search/docs/appearance/structured-data/sitelinks-searchbox for more information.
 */
export interface SchemaWebsite<T extends string = 'search_term_string'> {
  '@type': 'WebSite';
  'url': string;
  'potentialAction': [
    {
      '@type': 'SearchAction';
      'target': {
        '@type': 'EntryPoint';
        'urlTemplate': `${string}${T}${string}`;
      };
      'query-input': `required name=${T}`;
    }
  ];
}

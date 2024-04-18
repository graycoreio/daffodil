import { SchemaWebsite } from '../website';

const website: SchemaWebsite = {
  '@type': 'WebSite',
  url: 'https://www.example.com',
  potentialAction: [
    {
      '@type': 'SearchAction',
      'query-input': 'required name=search_term_string',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.example.com/search?query=search_term_string',
      },
    },
  ],
};

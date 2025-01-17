import { inject } from '@angular/core';
import { InMemoryCache } from '@apollo/client/cache';
import { ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { HttpLink } from 'apollo-angular/http';

// Should be a generic factory function whenever Apollo Clients need to be created (i.e. Shopify, Magento, etc.)
export function createApolloConfig({
  uri,
  headers,
}: {
  uri: string;
  headers: { [key: string]: string };
}) {
  // Another option is to let DemoDriverModule handle the httplink injection
  const httpLink = inject(HttpLink);

  // Middleware for attaching headers
  const authLink = setContext(() => ({
    headers: {
      ...headers, // Include all provided headers dynamically
    },
  }));

  return {
    link: ApolloLink.from([authLink, httpLink.create({ uri })]),
    cache: new InMemoryCache(),
  };
}

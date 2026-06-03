import { HttpHeaders } from '@angular/common/http';
import { inject } from '@angular/core';
import { ApolloLink } from '@apollo/client';
import { HttpLink } from 'apollo-angular/http';

import { UrlFunction } from '../../config';

/**
 * Creates an Apollo HTTP link for GraphQL requests.
 *
 * @param url - The Shopify Storefront API endpoint URL for GraphQL requests.
 * @returns An ApolloLink instance configured with the provided URL.
 */
export function createHttpLink(url: string | UrlFunction): ApolloLink {
  const httpLink = inject(HttpLink);
  if(typeof url === 'function') {
    return httpLink.create({
      uri: () => `${url()}/api/2025-01/graphql.json`,
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }
  return httpLink.create({
    uri: `${url}/api/2025-01/graphql.json`,
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  });
}

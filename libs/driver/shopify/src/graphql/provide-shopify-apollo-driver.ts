import { InMemoryCache } from '@apollo/client/cache';
import { from } from '@apollo/client/core';
import { provideNamedApollo } from 'apollo-angular';

import {
  createErrorLink,
  createAuthLink,
  createHttpLink,
} from './apollo-links/public_api';
import { APOLLO_CLIENT_NAME } from './client-name';

/**
 * Provides an Apollo client configuration for Shopify's Storefront API.
 *
 * @deprecated, prefer using provideShopifyDriver
 *
 * @param domain - The Shopify store domain (e.g. "https://daffodil-demo-alpha.myshopify.com")
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An Apollo client provider configured with a Shopify store domain and Storefront API access token.
 */
export function provideShopifyApolloDriver(domain: string, accessToken: string) {
  const shopifyStorefrontAPIEndpoint = `${domain}/api/2025-01/graphql.json`;
  return provideNamedApollo(() => ({
    [APOLLO_CLIENT_NAME]: {
      link: from([
        createErrorLink(),
        createAuthLink(accessToken),
        createHttpLink(shopifyStorefrontAPIEndpoint),
      ]),
      cache: new InMemoryCache(),
    },
  }));

}

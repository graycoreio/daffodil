import {
  inject,
  InjectionToken,
} from '@angular/core';
import {
  from,
  InMemoryCache,
} from '@apollo/client/core';
import { provideNamedApollo } from 'apollo-angular';

import { DaffShopifyDriverConfig } from './config';
import { createAuthLink } from './graphql/apollo-links/auth-link';
import { createErrorLink } from './graphql/apollo-links/error-link';
import { createHttpLink } from './graphql/apollo-links/http-link';
import { APOLLO_CLIENT_NAME } from './graphql/client-name';

/**
 * Provides an Apollo client configuration for Shopify's Storefront API.
 *
 * @param domain - The Shopify store domain (e.g. "https://daffodil-demo-alpha.myshopify.com")
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An Apollo client provider configured with a Shopify store domain and Storefront API access token.
 */
export const provideShopifyDriver = (config: DaffShopifyDriverConfig | InjectionToken<DaffShopifyDriverConfig> ) => provideNamedApollo(() => {
  const resolvedConfig = config instanceof InjectionToken ? inject(config) : config;
  return {
    [APOLLO_CLIENT_NAME]: {
      link: from([
        createErrorLink(),
        createAuthLink(resolvedConfig.accessToken),
        createHttpLink(resolvedConfig.domain),
      ]),
      cache: new InMemoryCache(),
    },
  };
});

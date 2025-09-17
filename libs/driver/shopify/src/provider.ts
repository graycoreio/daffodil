import { provideShopifyApolloDriver } from './graphql/provide-shopify-apollo-driver';

/**
 * Provides an Apollo client configuration for Shopify's Storefront API.
 *
 * @param domain - The Shopify store domain (e.g. "https://daffodil-demo-alpha.myshopify.com")
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An Apollo client provider configured with a Shopify store domain and Storefront API access token.
 */
export const provideShopifyDriver = (domain: string, accessToken: string) => provideShopifyApolloDriver(domain, accessToken);

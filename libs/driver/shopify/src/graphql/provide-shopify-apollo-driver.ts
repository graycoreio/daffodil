
import { provideShopifyDriver } from '../provider';


/**
 * Provides an Apollo client configuration for Shopify's Storefront API.
 *
 * @deprecated, prefer using provideShopifyDriver Deprecated in version 0.89.0. Will be removed in version 0.92.0.
 *
 * @param domain - The Shopify store domain (e.g. "https://daffodil-demo-alpha.myshopify.com")
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An Apollo client provider configured with a Shopify store domain and Storefront API access token.
 */
export function provideShopifyApolloDriver(domain: string, accessToken: string) {
  return provideShopifyDriver({
    domain,
    accessToken,
  });
}

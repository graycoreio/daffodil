export type UrlFunction = () => string;
export type AccessTokenFunction = () => string;
/**
 * Configuration interface for the Shopify driver.
 *
 * Defines the required configuration parameters for connecting to and
 * authenticating with the Shopify Storefront API.
 */
export interface DaffShopifyDriverConfig {
  /** The Shopify store domain (e.g. "https://daffodil-demo-alpha.myshopify.com") */
  domain: string | UrlFunction;
  /** The Shopify Storefront API access token */
  accessToken: string | AccessTokenFunction;
}

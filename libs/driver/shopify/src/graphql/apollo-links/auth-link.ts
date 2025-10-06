import { ApolloLink } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';

import { AccessTokenFunction } from '../../config';

/**
 * Creates an Apollo authentication link that adds the Shopify Storefront API (public) access token to requests.
 *
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An ApolloLink instance that sets authentication headers.
 */
export function createAuthLink(accessToken: string | AccessTokenFunction): ApolloLink {
  return setContext(() => {
    if(typeof accessToken === 'function') {
      return {
        headers: {
          'X-Shopify-Storefront-Access-Token': accessToken(),
        },
      };
    }

    return {
      headers: {
        'X-Shopify-Storefront-Access-Token': accessToken,
      },
    };
  });
}

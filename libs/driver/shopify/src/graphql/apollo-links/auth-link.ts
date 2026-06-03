import { HttpHeaders } from '@angular/common/http';
import { ApolloLink } from '@apollo/client';
import { SetContextLink } from '@apollo/client/link/context';

import { AccessTokenFunction } from '../../config';

/**
 * Creates an Apollo authentication link that adds the Shopify Storefront API (public) access token to requests.
 *
 * @param accessToken - The Shopify Storefront API access token.
 * @returns An ApolloLink instance that sets authentication headers.
 */
export function createAuthLink(accessToken: string | AccessTokenFunction): ApolloLink {
  return new SetContextLink(() => {
    if(typeof accessToken === 'function') {
      return {
        headers: new HttpHeaders({
          'X-Shopify-Storefront-Access-Token': accessToken(),
        }),
      };
    }

    return {
      headers: new HttpHeaders({
        'X-Shopify-Storefront-Access-Token': accessToken,
      }),
    };
  });
}

import { Injectable } from '@angular/core';
import { ApolloLink } from '@apollo/client/core';

import { DaffApolloLinkGenerator } from '@daffodil/core/graphql';

export const MAGENTO_CUSTOMER_CACHE_ID_HEADER = 'X-Magento-Cache-Id';

/**
 * Stores and sets the Magento cache ID header.
 * This will set the `X-Magento-Cache-Id` header from the most recent value encountered
 * on a response, if there was a response with that header set.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoCacheHeaderApolloLinkGenerator implements DaffApolloLinkGenerator {
  private _cacheHeader?: string;

  getLink(): ApolloLink {
    return new ApolloLink((operation, forward) => {
      if (this._cacheHeader) {
        operation.setContext({
          headers: {
            ...operation.getContext().headers,
            [MAGENTO_CUSTOMER_CACHE_ID_HEADER]: this._cacheHeader,
          },
        });
      }
      return forward(operation).map((response) => {
        const { headers } = operation.getContext().response;
        if (headers.get(MAGENTO_CUSTOMER_CACHE_ID_HEADER)) {
          this._cacheHeader = headers.get(MAGENTO_CUSTOMER_CACHE_ID_HEADER);
        }
        return response;
      });
    });
  }
}

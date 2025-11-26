import {
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { ApolloLink } from '@apollo/client/core';

import {
  DaffApolloLinkGenerator,
  provideDaffApolloRequestHandlerFactories,
} from '@daffodil/core/graphql';

export const MAGENTO_CUSTOMER_CACHE_ID_HEADER = 'X-Magento-Cache-Id';

/**
 * Stores and sets the Magento cache ID header.
 * This will set the `X-Magento-Cache-Id` header from the most recent value encountered
 * on a response, if there was a response with that header set.
 */
export const provideDaffMagentoCacheHeader = () => makeEnvironmentProviders([
  provideDaffApolloRequestHandlerFactories(() => {
    let cacheHeader: string | undefined;
    return (operation, forward) => {
      if (cacheHeader) {
        operation.setContext({
          headers: {
            ...operation.getContext().headers,
            [MAGENTO_CUSTOMER_CACHE_ID_HEADER]: cacheHeader,
          },
        });
      }
      return forward(operation).map((response) => {
        const { headers } = operation.getContext().response;
        if (headers.get(MAGENTO_CUSTOMER_CACHE_ID_HEADER)) {
          cacheHeader = headers.get(MAGENTO_CUSTOMER_CACHE_ID_HEADER);
        }
        return response;
      });
    };
  }),
]);

/**
 * Stores and sets the Magento cache ID header.
 * This will set the `X-Magento-Cache-Id` header from the most recent value encountered
 * on a response, if there was a response with that header set.
 *
 * @inheritdoc
 * @deprecated Prefer using {@link provideDaffMagentoCacheHeader} instead.
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

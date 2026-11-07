import {
  inject,
  makeEnvironmentProviders,
} from '@angular/core';

import { provideDaffApolloRequestHandlerFactories } from '@daffodil/core/graphql';

import { DAFF_MAGENTO_CACHEABLE_OPERATIONS } from './cacheable-operations-token';

/**
 * A request handler provider that will convert cacheable apollo operations into a format that Magento will understand as cacheable.
 */
export const provideDaffMagentoApolloCacheableOperations = () => makeEnvironmentProviders([
  provideDaffApolloRequestHandlerFactories(() => {
    const cacheableOperations = inject(DAFF_MAGENTO_CACHEABLE_OPERATIONS);
    return (operation, forward) => {
      if (cacheableOperations.indexOf(operation.operationName) > -1) {
        operation.setContext({ method: 'GET' });
      }
      return forward(operation);
    };
  }),
]);

import {
  inject,
  Inject,
  Injectable,
  makeEnvironmentProviders,
} from '@angular/core';
import { ApolloLink } from '@apollo/client/core';

import {
  DaffApolloLinkGenerator,
  provideDaffApolloRequestHandlerFactories,
} from '@daffodil/core/graphql';

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

/**
 * A service that will convert cacheable apollo operations into a format that Magento will understand as cacheable.
 *
 * @inheritdoc
 * @deprecated Prefer using {@link provideDaffMagentoApolloCacheableOperations} instead.
 */
@Injectable({
  providedIn: 'root',
})
export class DaffMagentoApolloCacheableOperationsLinkGenerator implements DaffApolloLinkGenerator {
  constructor(
    @Inject(DAFF_MAGENTO_CACHEABLE_OPERATIONS) private apolloGetRequests: string[],
  ) {}

  getLink(): ApolloLink {
    return new ApolloLink((operation, forward) => {
      if(this.apolloGetRequests.indexOf(operation.operationName) > -1) {
        operation.setContext({ method: 'GET' });
      }
      return forward(operation);
    });
  }
}

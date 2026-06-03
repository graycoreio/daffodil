import { ApolloLink } from '@apollo/client';

import { createMultiInjectionToken } from '@daffodil/core';

export const {
  /**
   * Apollo request handlers. Allow custom logic to be injected into the apollo link chain.
   */
  token: DAFF_APOLLO_REQUEST_HANDLERS,
  /**
   * Provider for {@link DAFF_APOLLO_REQUEST_HANDLERS}.
   */
  provider: provideDaffApolloRequestHandlers,
  /**
   * Factory provider for {@link DAFF_APOLLO_REQUEST_HANDLERS}.
   */
  factoryProvider: provideDaffApolloRequestHandlerFactories,
} = createMultiInjectionToken<ApolloLink.RequestHandler>('DAFF_APOLLO_REQUEST_HANDLERS');

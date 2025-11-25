import { RequestHandler } from '@apollo/client/core';

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
} = createMultiInjectionToken<RequestHandler>('DAFF_APOLLO_REQUEST_HANDLERS');

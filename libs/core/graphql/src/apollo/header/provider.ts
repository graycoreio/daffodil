import {
  EnvironmentProviders,
  inject,
  Injector,
  makeEnvironmentProviders,
  runInInjectionContext,
} from '@angular/core';

import { DaffApolloHeaderProvider } from './type';
import { provideDaffApolloRequestHandlerFactories } from '../request-handler.provider';

/**
 * Provider function for {@link DaffApolloHeaderProvider}s.
 */
export const provideDaffApolloHeaderProviders = (...providers: Array<DaffApolloHeaderProvider>): EnvironmentProviders =>
  makeEnvironmentProviders([
    provideDaffApolloRequestHandlerFactories(() => {
      const injector = inject(Injector);
      return (operation, forward) => {
        operation.setContext({
          headers: providers.reduce((acc, provider) => ({
            ...acc,
            ...runInInjectionContext(injector, provider),
          }), operation.getContext().headers),
        });
        return forward(operation);
      };
    }),
  ]);

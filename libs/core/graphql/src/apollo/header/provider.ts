import {
  EnvironmentProviders,
  inject,
  Injector,
  makeEnvironmentProviders,
  runInInjectionContext,
} from '@angular/core';

import { DaffApolloHeaderProvider } from './type';
import { provideDaffApolloRequestHandlerFactories } from '../request-handler.provider';
import { getApolloOperationHeaders } from './get';

/**
 * Provider function for {@link DaffApolloHeaderProvider}s.
 */
export const provideDaffApolloHeaderProviders = (...providers: Array<DaffApolloHeaderProvider>): EnvironmentProviders =>
  makeEnvironmentProviders([
    provideDaffApolloRequestHandlerFactories(() => {
      const injector = inject(Injector);
      return (operation, forward) => {
        operation.setContext({
          headers: providers.reduce((acc, provider) => {
            const headers = runInInjectionContext(injector, provider);
            headers.keys().forEach((key) => {
              const val = headers.getAll(key);
              if (val) {
                acc.append(key, val);
              }
            });
            return acc;
          }, getApolloOperationHeaders(operation)),
        });
        return forward(operation);
      };
    }),
  ]);

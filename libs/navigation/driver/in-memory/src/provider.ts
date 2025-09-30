import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

import { provideDaffInMemoryBackends } from '@daffodil/driver/in-memory';
import { provideDaffNavigationDriver } from '@daffodil/navigation/driver';

import { DaffInMemoryNavigationService } from './navigation.service';
import { DaffInMemoryBackendNavigationService } from './public_api';

/**
 * Provides the `@daffodil/navigation` driver interfaces.
 *
 * @example Configuring your app.config
 *
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideRouter(routes),
 *     provideHttpClient(),
 *     provideDaffInMemoryDriver(myConfig),
 *     provideDaffNavigationInMemoryDriver(),
 *   ]
 * };
 * ```
 */
export const provideDaffNavigationInMemoryDriver = (): (Provider | EnvironmentProviders)[] => [
  provideDaffNavigationDriver(DaffInMemoryNavigationService),
  makeEnvironmentProviders(provideDaffInMemoryBackends(DaffInMemoryBackendNavigationService)),
];

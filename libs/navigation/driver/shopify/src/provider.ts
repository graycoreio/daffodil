import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

import { provideDaffNavigationDriver } from '@daffodil/navigation/driver';

import { DaffShopifyNavigationService } from './navigation.service';

/**
 * Provides the `@daffodil/navigation` driver interfaces for Shopify.
 *
 * @example Configuring your app.config
 *
 * ```ts
 * export const appConfig: ApplicationConfig = {
 *   providers: [
 *     provideRouter(routes),
 *     provideHttpClient(),
 *     provideDaffShopifyDriver({ domain: 'https://your-shopify-store.myshopify.com', accessToken: 'SOME_RANDOM_HEXADECIMAL_KEY' }),
 *     provideDaffNavigationShopifyDriver(),
 *   ]
 * };
 * ```
 */
export const provideDaffNavigationShopifyDriver = (): (Provider | EnvironmentProviders)[] => [
  makeEnvironmentProviders([DaffShopifyNavigationService]),
  provideDaffNavigationDriver(DaffShopifyNavigationService),
];

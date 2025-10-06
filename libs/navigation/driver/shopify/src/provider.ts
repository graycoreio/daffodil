import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  Provider,
} from '@angular/core';

import { provideDaffNavigationDriver } from '@daffodil/navigation/driver';

import {
  provideShopifyNavigationDriverConfig,
  SHOPIFY_NAVIGATION_DRIVER_CONFIG_DEFAULT,
  ShopifyNavigationDriverConfig,
} from './config/public_api';
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
export const provideDaffNavigationShopifyDriver = (config: ShopifyNavigationDriverConfig = SHOPIFY_NAVIGATION_DRIVER_CONFIG_DEFAULT): (Provider | EnvironmentProviders)[] => [
  makeEnvironmentProviders([DaffShopifyNavigationService]),
  provideDaffNavigationDriver(DaffShopifyNavigationService),
  provideShopifyNavigationDriverConfig(config),
];

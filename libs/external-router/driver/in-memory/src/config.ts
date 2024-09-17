import { InjectionToken } from '@angular/core';

import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
import { DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION } from '@daffodil/external-router/driver';

/**
 * A lookup for a URL.
 * Returns an {@link DaffExternallyResolvableUrl} or
 * {@link DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION} if the URL cannot be resolved
 */
export type DaffExternalRouterDriverInMemoryResolver = (url: string) => DaffExternallyResolvableUrl;

/**
 * The configuration for the in-memory driver.
 */
export interface DaffExternalRouterDriverInMemoryConfig {
  resolver: DaffExternalRouterDriverInMemoryResolver;
}

const defaultConfig: DaffExternalRouterDriverInMemoryConfig = {
  resolver: () => DAFF_EXTERNAL_ROUTER_NOT_FOUND_RESOLUTION,
};

/**
 * The token used by Daffodil to hold the driver's configuration.
 *
 * @docs-private
 */
export const DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG = new InjectionToken<
  DaffExternalRouterDriverInMemoryConfig
>('DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG', {
  providedIn: 'root',
  factory: () => defaultConfig,
});

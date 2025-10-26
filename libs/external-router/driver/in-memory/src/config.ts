import { inject } from '@angular/core';

import { createConfigInjectionToken } from '@daffodil/core';
import {
  DAFF_INMEMORY_ROUTABLE_OBJECTS,
  DaffInMemoryRoutableObjects,
} from '@daffodil/driver/in-memory';
import { DaffExternallyResolvableUrl } from '@daffodil/external-router';
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

export const {
  /**
   * The token used by Daffodil to hold the driver's configuration.
   *
   * @docs-private
   */
  token: DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG,
  /**
   * Provider function for {@link DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG}.
   */
  provider: provideDaffExternalRouterDriverInMemoryConfig,
} = createConfigInjectionToken<DaffExternalRouterDriverInMemoryConfig>(undefined, 'DAFF_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG', {
  factory: () => ({
    resolver: (url: string): DaffExternallyResolvableUrl => {
      const ROUTEABLE_OBJECTS: DaffInMemoryRoutableObjects = inject(DAFF_INMEMORY_ROUTABLE_OBJECTS);
      if(!ROUTEABLE_OBJECTS.has(url)) {
        return null;
      }
      return {
        id: ROUTEABLE_OBJECTS.get(url).url,
        code: 200,
        type: ROUTEABLE_OBJECTS.get(url).type,
        url: ROUTEABLE_OBJECTS.get(url).url,
      };
    },
  }),
});

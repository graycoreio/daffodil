import {
  EnvironmentProviders,
  importProvidersFrom,
  makeEnvironmentProviders,
  Type,
} from '@angular/core';
import { HttpClientInMemoryWebApiModule  } from 'angular-in-memory-web-api';

import {
  DaffInMemoryBackendInterface,
  DaffInMemoryRootBackend,
  provideDaffInMemoryBackends,
} from './backend/public_api';
import {
  DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT,
  DaffInMemoryDriverConfig,
  provideDaffInMemoryDriverConfig,
} from './config/public_api';

/**
 * Configures the Angular in-memory web API with Daffodil backend services.
 *
 * @example
 * ```ts
 * bootstrapApplication(AppComponent, {
 *   providers: [
 *     provideDaffInMemoryDriver(
 *       { delay: 300 },
 *       DaffProductInMemoryBackendService,
 *       DaffCartInMemoryBackendService
 *     )
 *   ]
 * });
 * ```
 */
export const provideDaffInMemoryDriver = (config: DaffInMemoryDriverConfig = DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT, ...backends: Array<Type<DaffInMemoryBackendInterface>>): EnvironmentProviders[] => {
  config = { ...DAFF_IN_MEMORY_DRIVER_CONFIG_DEFAULT,...config };
  return [
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(DaffInMemoryRootBackend, { ...config, passThruUnknownUrl: config.passThroughUnknownRequests })),
    makeEnvironmentProviders([
      provideDaffInMemoryDriverConfig(config),
      provideDaffInMemoryBackends(...backends),
    ]),
  ];
};

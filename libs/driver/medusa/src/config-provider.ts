import {
  EnvironmentProviders,
  makeEnvironmentProviders,
} from '@angular/core';

import {
  DAFF_MEDUSA_CONFIG,
  DaffMedusaConfig,
} from './config';

/**
 * Provides the Medusa configuration for the driver.
 *
 * @param config - The Medusa configuration object
 * @returns Array of Angular providers for the configuration
 */
export const provideMedusaDriver = (config: DaffMedusaConfig): EnvironmentProviders => makeEnvironmentProviders([{
  provide: DAFF_MEDUSA_CONFIG,
  useValue: config,
}]);

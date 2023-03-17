import {
  InjectionToken,
  ValueProvider,
} from '@angular/core';

import { DAFF_AUTH_ROUTING_CONFIG_DEFAULT } from './default';
import { DaffAuthRoutingConfig } from './interface';

/**
 * The token used to provide @daffodil/auth/routing config data.
 */
export const DAFF_AUTH_ROUTING_CONFIG = new InjectionToken<DaffAuthRoutingConfig>('DAFF_AUTH_ROUTING_CONFIG', {
  factory: () => DAFF_AUTH_ROUTING_CONFIG_DEFAULT,
});

export const provideDaffAuthRoutingConfig = (config: Partial<DaffAuthRoutingConfig>): ValueProvider => ({
  provide: DAFF_AUTH_ROUTING_CONFIG,
  useValue: {
    ...DAFF_AUTH_ROUTING_CONFIG_DEFAULT,
    ...config,
  },
});

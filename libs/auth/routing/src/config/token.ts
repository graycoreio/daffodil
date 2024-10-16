import { createConfigInjectionToken } from '@daffodil/core';

import { DAFF_AUTH_ROUTING_CONFIG_DEFAULT } from './default';
import { DaffAuthRoutingConfig } from './interface';

export const {
  /**
   * The token used to provide @daffodil/auth/routing config data.
   */
  token: DAFF_AUTH_ROUTING_CONFIG,
  /**
   * Provider function for {@link DAFF_AUTH_ROUTING_CONFIG}.
   */
  provider: provideDaffAuthRoutingConfig,
} = createConfigInjectionToken<DaffAuthRoutingConfig>(DAFF_AUTH_ROUTING_CONFIG_DEFAULT, 'DAFF_AUTH_ROUTING_CONFIG');

import { createConfigInjectionToken } from '@daffodil/core';

import { DaffRouterDataServiceConfig } from './type';

export const {
  token: DAFF_ROUTER_DATA_SERVICE_CONFIG,
  provider: provideDaffRouterDataServiceConfig,
} = createConfigInjectionToken<DaffRouterDataServiceConfig>({}, 'DAFF_ROUTER_DATA_SERVICE_CONFIG');

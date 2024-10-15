import { inject } from '@angular/core';

import { createSingleInjectionToken } from '@daffodil/core';

import { DaffDriverHttpClientCacheNoopService } from './noop.service';
import { DaffDriverHttpClientCacheServiceInterface } from './service.type';

export const {
  token: DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
  provider: provideDaffDriverHttpClientCacheService,
} = createSingleInjectionToken<DaffDriverHttpClientCacheServiceInterface>(
  'DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE',
  { factory: () => inject(DaffDriverHttpClientCacheNoopService) },
);

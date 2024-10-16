import { inject } from '@angular/core';

import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffDriverHttpClientCacheNoopService } from './noop.service';
import { DaffDriverHttpClientCacheServiceInterface } from './service.type';

export const {
  token: DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
  provider: provideDaffDriverHttpClientCacheService,
} = createSingletonInjectionToken<DaffDriverHttpClientCacheServiceInterface>(
  'DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE',
  { factory: () => inject(DaffDriverHttpClientCacheNoopService) },
);

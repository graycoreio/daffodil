import {
  InjectionToken,
  inject,
} from '@angular/core';

import { DaffDriverHttpClientCacheNoopService } from './noop.service';
import { DaffDriverHttpClientCacheServiceInterface } from './service.type';

export const DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE = new InjectionToken<DaffDriverHttpClientCacheServiceInterface>('DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE', { factory: () => inject(DaffDriverHttpClientCacheNoopService) });

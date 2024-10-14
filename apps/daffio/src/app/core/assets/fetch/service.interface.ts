import { inject } from '@angular/core';
import { Observable } from 'rxjs';

import { createSingletonInjectionToken } from '@daffodil/core';

import { DaffioAssetFetchBrowserService } from './browser.service';

export interface DaffioAssetFetchServiceInterface {
  fetch<T = unknown>(path: string): Observable<T>;
}

export const {
  token: DaffioAssetFetchService,
  provider: provideDaffioAssetFetchService,
} = createSingletonInjectionToken<DaffioAssetFetchServiceInterface>('DaffioAssetFetchService', { factory: () => inject(DaffioAssetFetchBrowserService) });

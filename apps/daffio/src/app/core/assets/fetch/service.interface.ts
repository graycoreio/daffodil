import {
  InjectionToken,
  inject,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffioAssetFetchBrowserService } from './browser.service';

export interface DaffioAssetFetchServiceInterface {
  fetch<T = unknown>(path: string): Observable<T>;
}

export const DaffioAssetFetchService = new InjectionToken<DaffioAssetFetchServiceInterface>(
  'DaffioAssetFetchService',
  {
    factory: () => inject(DaffioAssetFetchBrowserService),
  },
);

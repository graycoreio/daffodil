import {
  InjectionToken,
  inject,
} from '@angular/core';
import { Observable } from 'rxjs';

import { DaffDocsAssetFetchBrowserService } from './browser.service';

export interface DaffDocsAssetFetchServiceInterface {
  fetch<T = unknown>(path: string): Observable<T>;
}

export const DaffDocsAssetFetchService = new InjectionToken<DaffDocsAssetFetchServiceInterface>(
  'DaffDocsAssetFetchService',
  {
    factory: () => inject(DaffDocsAssetFetchBrowserService),
  },
);

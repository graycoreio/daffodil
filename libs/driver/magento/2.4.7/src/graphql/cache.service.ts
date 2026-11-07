import { isPlatformBrowser } from '@angular/common';
import {
  Inject,
  Injectable,
  PLATFORM_ID,
} from '@angular/core';

import { DaffDriverHttpClientCacheServiceInterface } from '@daffodil/driver';

/**
 * Interacts with the Apollo client.
 *
 * @inheritdoc
 */
@Injectable({
  providedIn: 'root',
})
export class DaffDriverHttpClientCacheMagentoService implements DaffDriverHttpClientCacheServiceInterface {
  constructor(
    @Inject(PLATFORM_ID) private platformId: string,
  ) {}

  reset(): void {
    if (isPlatformBrowser(this.platformId)) {
      location.reload();
    }
  }
}

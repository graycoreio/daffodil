import { NgModule } from '@angular/core';

import { provideDaffDriverHttpClientCacheService } from '@daffodil/driver';

import { DaffDriverHttpClientCacheMagentoService } from './graphql/cache.service';

/**
 * @deprecated in favor of {@link provideMagentoDriver} Deprecated in version 0.88.0. Will be removed in version 0.91.0.
 */
@NgModule({
  providers: [
    provideDaffDriverHttpClientCacheService(DaffDriverHttpClientCacheMagentoService),
  ],
})
export class DaffDriverMagentoModule {}

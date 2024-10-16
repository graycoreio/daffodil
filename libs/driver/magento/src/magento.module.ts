import { NgModule } from '@angular/core';

import { provideDaffDriverHttpClientCacheService } from '@daffodil/driver';

import { DaffDriverHttpClientCacheMagentoService } from './graphql/cache.service';

@NgModule({
  providers: [
    provideDaffDriverHttpClientCacheService(DaffDriverHttpClientCacheMagentoService),
  ],
})
export class DaffDriverMagentoModule {}

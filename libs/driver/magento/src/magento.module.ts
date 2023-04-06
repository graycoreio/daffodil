import { NgModule } from '@angular/core';

import { DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE } from '@daffodil/driver';

import { DaffDriverHttpClientCacheMagentoService } from './graphql/cache.service';

@NgModule({
  providers: [
    {
      provide: DAFF_DRIVER_HTTP_CLIENT_CACHE_SERVICE,
      useExisting: DaffDriverHttpClientCacheMagentoService,
    },
  ],
})
export class DaffDriverMagentoModule {}

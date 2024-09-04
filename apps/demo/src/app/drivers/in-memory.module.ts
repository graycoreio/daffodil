import {
  NgModule,
  inject,
} from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffAuthInMemoryDriverModule } from '@daffodil/auth/driver/in-memory';
import { DaffAuthorizeNetInMemoryDriverModule } from '@daffodil/authorizenet/driver/in-memory';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffCategoryInMemoryDriverModule } from '@daffodil/category/driver/in-memory';
import { DaffInMemoryBackendCategoryService } from '@daffodil/category/driver/in-memory';
import { DaffExternalRouterDriverInMemoryModule } from '@daffodil/external-router/driver/in-memory';
import { DaffGeographyInMemoryDriverModule } from '@daffodil/geography/driver/in-memory';
import {
  DaffNavigationInMemoryDriverModule,
  DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,
} from '@daffodil/navigation/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { DaffProductInMemoryDriverModule } from '@daffodil/product/driver/in-memory';
import { DaffCompositeProductInMemoryDriverModule } from '@daffodil/product-composite/driver/in-memory';
import { DaffConfigurableProductInMemoryDriverModule } from '@daffodil/product-configurable/driver/in-memory';

import { DemoInMemoryBackendService } from './in-memory/backend/backend.service';
import { DEMO_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG } from './in-memory/external-router.config.token';

@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DemoInMemoryBackendService),
    DaffAuthorizeNetInMemoryDriverModule.forRoot(),
    DaffAuthInMemoryDriverModule.forRoot(),
    DaffProductInMemoryDriverModule.forRoot(),
    DaffCompositeProductInMemoryDriverModule.forRoot(),
    DaffConfigurableProductInMemoryDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
    DaffGeographyInMemoryDriverModule.forRoot(),
    DaffCategoryInMemoryDriverModule.forRoot(),
    DaffExternalRouterDriverInMemoryModule.forRoot(DEMO_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG),
  ],
  providers: [
    {
      provide: DAFF_NAVIGATION_IN_MEMORY_SEED_DATA_PROVIDER,
      useFactory: () => {
        const categoryBackend = inject(DaffInMemoryBackendCategoryService);
        return () => categoryBackend.categories[0];
      },
    },
  ],
})
export class DemoDriverModule { }

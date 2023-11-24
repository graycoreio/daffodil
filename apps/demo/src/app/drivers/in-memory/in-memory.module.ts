import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffAuthInMemoryDriverModule } from '@daffodil/auth/driver/in-memory';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffExternalRouterDriverInMemoryModule } from '@daffodil/external-router/driver/in-memory';
import { DaffGeographyInMemoryDriverModule } from '@daffodil/geography/driver/in-memory';
import { DaffNavigationInMemoryDriverModule } from '@daffodil/navigation/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/driver/in-memory';
import { DaffProductInMemoryDriverModule } from '@daffodil/product/driver/in-memory';

import { DemoInMemoryBackendService } from './backend/backend.service';
import { DEMO_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG } from './external-router.config.token';


@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DemoInMemoryBackendService),
    DaffAuthInMemoryDriverModule.forRoot(),
    DaffProductInMemoryDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
    DaffGeographyInMemoryDriverModule.forRoot(),
    DaffExternalRouterDriverInMemoryModule.forRoot(DEMO_EXTERNAL_ROUTER_DRIVER_IN_MEMORY_CONFIG),
  ],
})
export class DemoInMemoryDriverModule { }

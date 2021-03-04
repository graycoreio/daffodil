import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffAuthInMemoryDriverModule } from '@daffodil/auth/testing';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/driver/in-memory';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationInMemoryDriverModule } from '@daffodil/navigation/driver/in-memory';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffProductInMemoryDriverModule } from '@daffodil/product/driver/in-memory';

import { DemoInMemoryBackendService } from './backend/backend.service';


@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DemoInMemoryBackendService),
    DaffAuthInMemoryDriverModule.forRoot(),
    DaffProductInMemoryDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot(),
  ],
})
export class DemoInMemoryDriverModule { }

import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffProductInMemoryDriverModule } from '@daffodil/product/testing';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationInMemoryDriverModule } from '@daffodil/navigation/testing';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffAuthInMemoryDriverModule } from '@daffodil/auth/testing';
import { DemoInMemoryBackendService } from './backend/backend.service';


@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DemoInMemoryBackendService),
    DaffAuthInMemoryDriverModule.forRoot(),
    DaffProductInMemoryDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot()
  ]
})
export class DemoInMemoryDriverModule { }

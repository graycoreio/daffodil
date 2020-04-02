import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DaffProductInMemoryDriverModule } from '@daffodil/product/testing';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationInMemoryDriverModule } from '@daffodil/navigation/testing';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DemoInMemoryService } from './backend/backend';


@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DemoInMemoryService),
    DaffProductInMemoryDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
    DaffNewsletterInMemoryDriverModule.forRoot()
  ]
})
export class DemoInMemoryDriverModule { }

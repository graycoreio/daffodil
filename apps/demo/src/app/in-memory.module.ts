import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { DemoInMemoryService } from './drivers/in-memory-services/in-memory.service';
import { DaffProductInMemoryDriverModule } from '@daffodil/product/testing';
import { DaffCartInMemoryDriverModule } from '@daffodil/cart/testing';
import { DaffCheckoutInMemoryDriverModule } from '@daffodil/checkout/testing';
import { DaffNavigationInMemoryDriverModule } from '@daffodil/navigation/testing';
import { DaffNewsletterInMemoryDriverModule } from '@daffodil/newsletter/testing';
import { DaffCategoryInMemoryDriverModule } from '@daffodil/category/testing';

@NgModule({
  imports: [
    HttpClientInMemoryWebApiModule.forRoot(DemoInMemoryService),
    DaffProductInMemoryDriverModule.forRoot(),
    DaffCartInMemoryDriverModule.forRoot(),
    DaffCheckoutInMemoryDriverModule.forRoot(),
    DaffNavigationInMemoryDriverModule.forRoot(),
		DaffNewsletterInMemoryDriverModule.forRoot(),
		DaffCategoryInMemoryDriverModule.forRoot()
  ]
})
export class InMemoryModule {}
